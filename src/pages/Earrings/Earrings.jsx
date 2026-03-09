import ProductCard from '@components/ProductCard'
import cercei from '@data/earrings.json'
import styles from './Earrings.module.css'

function Earrings() {
  return (
    <main className={styles.pagina}>
      <h1 className={styles.titlu}>Colectia de Cercei</h1>
      <div className={styles.grila}>
        {cercei.map((cercel) => (
          <ProductCard
            key={cercel.id}
            nume={cercel.nume}
            pret={cercel.pret}
            imagine={cercel.imagine}
            nou={cercel.nou}
          />
        ))}
      </div>
    </main>
  )
}

export default Earrings
