import { useState } from 'react'
import ProductCard from '@components/ProductCard'
import Button from '@components/Button'
import styles from './ProductGrid.module.css'

import sagetaStanga from '@assets/icon/arrow-left_10513357.png'
import sagetataDreapta from '@assets/icon/arrow-right_10513322.png'

function ProductGrid({ titlu, produse, onVeziMaiMulte, invers = false }) {
  const [pagina, setPagina] = useState(0)
  const perPagina = 3
  const totalPagini = Math.ceil(produse.length / perPagina)


  const produseVizibile = produse.slice(
    pagina * perPagina,
    pagina * perPagina + perPagina
  )

  return (
    <section className={`${styles.sectiune} ${invers ? styles.invers : ''}`}>

      <div className={styles.header}>
        <h2 className={styles.titlu}>{titlu}</h2>
        <Button text="Vezi mai multe" variant="contur" onClick={onVeziMaiMulte} />
      </div>

  
      <div className={styles.grila}>
        {produseVizibile.map((produs) => (
          <ProductCard
            key={produs.id}
            nume={produs.nume}
            pret={produs.pret}
            imagine={produs.imagine}
            nou={produs.nou}
          />
        ))}
      </div>

      <div className={`${styles.sageti} ${invers ? styles.sagetiDreapta : ''}`}>
        <button
          onClick={() => setPagina(pagina - 1)}
          disabled={pagina === 0}
          className={styles.sageata}
        >
          <img src={sagetaStanga} alt="Inapoi" />
        </button>
        <button
          onClick={() => setPagina(pagina + 1)}
          disabled={pagina === totalPagini - 1}
          className={styles.sageata}
        >
          <img src={sagetataDreapta} alt="Inainte" />
        </button>
      </div>

    </section>
  )
}

export default ProductGrid
