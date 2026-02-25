import Section from '@components/Section/Section'
import ReviewCard from '@components/ReviewCard/ReviewCard'
import reviewsData from '@data/reviews.json'
import styles from './Reviews.module.css'

export default function Reviews() {
  return (
    <main>
      <div className={styles.hero}>
        <p className={styles.heroEyebrow}>Ce spun clienții</p>
        <h1 className={styles.heroTitle}>RECENZII</h1>
        <p className={styles.heroSubtitle}>
          Peste 2000 de zboruri efectuate. Fiecare cu o poveste aparte.
        </p>
      </div>

      <Section alt>
        <div className={styles.grid}>
          {reviewsData.map(review => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </Section>
    </main>
  )
}
