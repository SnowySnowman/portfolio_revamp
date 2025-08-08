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
    theme: 'Prawn Mushroom Fried Rice',
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

        {/* Icon grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.5rem',
            padding: '2rem 1rem',
            justifyItems: 'center',
            zIndex: 2,
            position: 'relative',
          }}
        >
          {projects.map(p => {
            const Icon = p.Icon
            return (
              <Link href={`/${p.slug}`} key={p.slug} className="flex flex-col items-center">
                <Icon className="w-12 h-12 hover:scale-110 transition-transform" />
                <span style={{ fontSize: '0.75rem', marginTop: '0.25rem' }}>
                  {p.title}
                </span>
              </Link>
            )
          })}
        </div>

        {/* Center “pot” linking to real photo */}
        <Link href={photoPath} className={potStyles.potClickable}>
          <div className={potStyles.pot} />
        </Link>

        {/* Right “carousel” arrow */}
        <button onClick={next} className={potStyles.arrowRight}>
          ▶︎
        </button>
      </div>
    </Layout>
  )
}
