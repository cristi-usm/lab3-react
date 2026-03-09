import styles from './ProductCard.module.css'

function ProductCard({ nume, pret, imagine, nou }) {
  return (
    <div className={styles.card}>

      <div className={styles.poza}>
        <img src={imagine} alt={nume} />
        {nou && <span className={styles.badge}>Nou</span>}
        <button className={styles.adauga}>+ Adauga in cos</button>
      </div>

      <div className={styles.info}>
        <span>{nume}</span>
        <span className={styles.pret}>{pret}$</span>
      </div>

    </div>
  )
}

export default ProductCard
