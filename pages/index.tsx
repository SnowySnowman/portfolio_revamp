// pages/index.tsx
import { useState } from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import IngredientCard from '../components/IngredientCard'
import potStyles from '../styles/Pot.module.css'
import TomatoIcon from '../components/icons/TomatoIcon'
import BasilIcon from '../components/icons/BasilIcon'
import SpaghettiIcon from '../components/icons/SpaghettiIcon'
import MushroomIcon from '../components/icons/MushroomIcon'
import FinalDishIcon from '../components/icons/FinalDishIcon'

type Project = { title: string, slug: string, Icon: React.FC<React.SVGProps<SVGSVGElement>> }
type YearData = {
  year: number
  theme: string
  photoPath: string      // for the big center link
  projects: Project[]
}

const allYears: YearData[] = [
  {
    year: 2024,
    theme: 'Tomato Basil Pasta',
    photoPath: '/photos/tomato-basil-pasta.jpg',
    projects: [
      { title: 'USurveYD', slug: 'usurveyd', Icon: TomatoIcon },
      { title: '3Dicom', slug: '3dicom', Icon: BasilIcon },
      { title: 'NarwhalTutoring', slug: 'narwhal-tutoring', Icon: SpaghettiIcon },
      
    ],
  },
  {
    year: 2025,
    theme: 'Omelette',
    photoPath: '/photos/prawn-mushroom-fried-rice.jpg',
    projects: [
      { title: 'Emotion CNN', slug: 'emotion-cnn', Icon: MushroomIcon },
    ],
  },
  // add as many years as you like
]


export default function Home() {
  const [idx, setIdx] = useState(0)
  const len = allYears.length
  const current = allYears[idx]!
  const { year, theme, photoPath, projects } = current

  const prev = () => setIdx(i => (i - 1 + len) % len)
  const next = () => setIdx(i => (i + 1) % len)

  return (
    <Layout>
      {/* collapsible header is already handled in Layout */}
      <div className="mb-6 ml-10">
        <h1 className="text-4xl mt-2 pl-10">
          {year} · {theme}
        </h1>
      </div>

      <div className={potStyles.container} style={{ position: 'relative' }}>
        {/* Left “carousel” arrow */}
        <button onClick={prev} className={potStyles.arrowLeft}>
          ◀︎
        </button>

        {/* Icons */}
        <div
          style={{
            display: 'flex',
            justifyItems: 'center',
            justifyContent: 'center',
            zIndex: 2,
            position: 'relative',
            gap: '1.5rem',  
            width: '100%',
          }}
        >
          {projects.map(({ title, slug, Icon }) => (
            <IngredientCard
              key={slug}
              title={title}
              slug={slug}
              Icon={Icon}
            />
          ))}
        </div>

        {/* Center “pot” linking to real photo */}
        {/* Bottom‐center “View food photo” button */}
        <div className={potStyles.finalDishWrapper}>
          <Link href={photoPath} className={potStyles.finalDishCard}>
              <FinalDishIcon className={potStyles.finalDishIcon} />
              <span className={potStyles.finalDishOverlay}>
                View food photo
              </span>
          </Link>
        </div>

        {/* Right “carousel” arrow */}
        <button onClick={next} className={potStyles.arrowRight}>
          ▶︎
        </button>
      </div>
    </Layout>
  )
}
