// components/Layout.tsx
import React, { ReactNode, useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './styles/Layout.module.css'

interface Props { children: ReactNode }

export default function Layout({ children }: Props) {
  const [open, setOpen] = useState(true)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        {/* this is the collapsible part */}
        <div className={`${styles.subHeader} ${open ? styles.open : styles.closed}`}>
          <h1>Minjung Shin</h1>
          <nav className={styles.nav}>
            <Link href="/" className={styles.navLink}>Home</Link>
            <Link href="/about" className={styles.navLink}>About</Link>
          </nav>
        </div>
      </header>

      <button
        onClick={() => setOpen(o => !o)}
        className={`${styles.toggleButton} ${open ? styles.open : styles.closed}`}
        aria-expanded={open}
        aria-label={open ? 'Close header' : 'Open header'}
      >
        {open ? '–' : '+'}
      </button>

      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} Minjung Shin
      </footer>
    </div>
  )
}
