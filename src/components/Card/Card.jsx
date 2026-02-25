import styles from './Card.module.css'

export default function Card({ image, tag, title, text, children, className = '' }) {
  return (
    <div className={`${styles.card} ${className}`}>
      {image && <img src={image} alt={title} className={styles.image} loading="lazy" />}
      <div className={styles.body}>
        {tag && <span className={styles.tag}>{tag}</span>}
        {title && <h3 className={styles.title}>{title}</h3>}
        {text && <p className={styles.text}>{text}</p>}
        {children && <div className={styles.footer}>{children}</div>}
      </div>
    </div>
  )
}
