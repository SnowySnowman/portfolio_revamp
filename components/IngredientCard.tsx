// components/IngredientCard.tsx
import React from 'react'
import Link from 'next/link'
import styles from './styles/IngredientCard.module.css'
import type { SVGProps } from 'react'

interface Props {
  title: string
  slug: string
  Icon: React.FC<SVGProps<SVGSVGElement>>
}

export default function IngredientCard({ title, slug, Icon }: Props) {
  return (
    <Link href={`/projects/${slug}`} className={styles.link}>
      <Icon aria-label={title} className={styles.icon} />
    </Link>
  )
}
