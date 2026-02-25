import styles from './ReviewCard.module.css'

export default function ReviewCard({ review }) {
  const { name, location, rating, text, service, date, avatar } = review

  return (
    <div className={styles.card}>
      <div className={styles.quoteIcon}></div>
      <div className={styles.stars}>
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} className={styles.star} aria-hidden="true">*</span>
        ))}
      </div>
      <p className={styles.text}>{text}</p>
      <div className={styles.footer}>
        <div className={styles.avatar}>{avatar}</div>
        <div className={styles.info}>
          <div className={styles.name}>{name} · <span style={{ color: 'rgba(255,255,255,0.4)', fontWeight: 400 }}>{location}</span></div>
          <div className={styles.meta}>
            <span className={styles.service}>{service}</span> · {date}
          </div>
        </div>
      </div>
    </div>
  )
}
