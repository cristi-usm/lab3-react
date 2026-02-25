import { useState, useEffect } from 'react'
import styles from './Header.module.css'
import navData from '@data/navigation.json'

export default function Header({ navigate, isActive }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNav = (path) => {
    navigate(path)
    setMenuOpen(false)
  }

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          <div className={styles.logo} onClick={() => handleNav('/')}>
            <div className={styles.logoText}>
              <span className={styles.logoMain}>AERO TEAM</span>
              <span className={styles.logoSub}>Moldova</span>
            </div>
          </div>

          <nav className={styles.nav}>
            {navData.map(item => (
              <button
                key={item.id}
                className={`${styles.navLink} ${isActive(item.path) ? styles.active : ''}`}
                onClick={() => handleNav(item.path)}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <a href="tel:+37376014777" className={styles.phone}>
            +373 760 14 777
          </a>

          <button
            className={`${styles.menuToggle} ${menuOpen ? styles.open : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
        {navData.map(item => (
          <button
            key={item.id}
            className={`${styles.mobileNavLink} ${isActive(item.path) ? styles.active : ''}`}
            onClick={() => handleNav(item.path)}
          >
            {item.label}
          </button>
        ))}
        <a href="tel:+37376014777" className={styles.mobilePhone}>
          +373 760 14 777
        </a>
      </div>
    </>
  )
}
