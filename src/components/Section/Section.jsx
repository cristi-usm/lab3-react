import styles from './Section.module.css'

export default function Section({
  children,
  eyebrow,
  title,
  subtitle,
  alt = false,
  id,
  className = ''
}) {
  return (
    <section
      id={id}
      className={`${styles.section} ${alt ? styles.sectionAlt : styles.sectionDark} ${className}`}
    >
      <div className={styles.inner}>
        {(eyebrow || title || subtitle) && (
          <div className={styles.sectionHeader}>
            {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
            {title && <h2 className={styles.title}>{title}</h2>}
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
