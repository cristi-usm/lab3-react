import ProductCard from '@components/ProductCard'
import inele from '@data/rings.json'
import styles from './Rings.module.css'

function Rings() {
  return (
    <main className={styles.pagina}>
      <h1 className={styles.titlu}>Colectia de Inele</h1>
      <div className={styles.grila}>
        {inele.map((inel) => (
          <ProductCard
            key={inel.id}
            nume={inel.nume}
            pret={inel.pret}
            imagine={inel.imagine}
            nou={inel.nou}
          />
        ))}
      </div>
    </main>
  )
}

export default Rings
