'use client'
import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#" className={styles.logo}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Katana slicing paper */}
          <rect x="4" y="12" width="18" height="13" rx="2" fill="#F5F0E8" stroke="#D4C5A9" strokeWidth="1.2"/>
          <line x1="4" y1="16" x2="22" y2="16" stroke="#D4C5A9" strokeWidth="0.8"/>
          <line x1="4" y1="19" x2="22" y2="19" stroke="#D4C5A9" strokeWidth="0.8"/>
          <line x1="4" y1="22" x2="16" y2="22" stroke="#D4C5A9" strokeWidth="0.8"/>
          {/* Katana blade */}
          <line x1="6" y1="6" x2="28" y2="28" stroke="#C17B5C" strokeWidth="2" strokeLinecap="round"/>
          <line x1="6" y1="6" x2="28" y2="28" stroke="#C9A84C" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
          {/* Handle */}
          <rect x="3" y="3" width="5" height="5" rx="1" fill="#3D4F6B" transform="rotate(-45 5.5 5.5)"/>
        </svg>
        <span className={styles.logoText}>Samuraize<span className={styles.logoAi}>.ai</span></span>
      </a>

      <div className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        <a href="#how-it-works" className={styles.link} onClick={() => setMenuOpen(false)}>How It Works</a>
        <a href="#features" className={styles.link} onClick={() => setMenuOpen(false)}>Features</a>
        <a href="#roadmap" className={styles.link} onClick={() => setMenuOpen(false)}>Roadmap</a>
        <a href="#pricing" className={styles.link} onClick={() => setMenuOpen(false)}>Pricing</a>
        <a href="#faq" className={styles.link} onClick={() => setMenuOpen(false)}>FAQ</a>
        <a href="#hero" className={styles.cta} onClick={() => setMenuOpen(false)}>Try Free →</a>
      </div>

      <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        <span className={menuOpen ? styles.barOpen : styles.bar}></span>
        <span className={menuOpen ? styles.barOpen2 : styles.bar}></span>
        <span className={menuOpen ? styles.barOpen3 : styles.bar}></span>
      </button>
    </nav>
  )
}
