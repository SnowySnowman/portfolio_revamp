import React from 'react'
import Link from 'next/link'
import styles from './styles/ProjectCard.module.css'

interface Props { title: string; slug: string; thumbnailUrl: string }

export default function ProjectCard({ title, slug, thumbnailUrl }: Props) {
  return (
    <Link
      href={`/projects/${slug}`}
      className={styles.card}
    >
      <img
        src={thumbnailUrl}
        alt={title}
        className={styles.thumbnail}
      />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
      </div>
    </Link>
  )
}
