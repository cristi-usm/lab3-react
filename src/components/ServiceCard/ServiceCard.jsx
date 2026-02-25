import styles from './ServiceCard.module.css'
import Button from '@components/Button/Button'

export default function ServiceCard({ service, onDetails }) {
  const { title, description, image, prices } = service

  return (
    <div className={styles.card}>
      <div className={styles.imageWrap}>
        <img src={image} alt={title} className={styles.image} loading="lazy" />
        <div className={styles.imageOverlay} />
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        <div className={styles.prices}>
          {prices.map((p, i) => (
            <div key={i} className={styles.priceRow}>
              <span className={styles.priceDuration}>{p.duration}</span>
              <span className={styles.priceAmount}>{p.price}</span>
            </div>
          ))}
        </div>

        <div className={styles.btn}>
          <Button variant="outline" fullWidth onClick={onDetails}>
            Detalii
          </Button>
        </div>
      </div>
    </div>
  )
}
