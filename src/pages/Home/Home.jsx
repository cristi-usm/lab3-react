import Hero        from '@components/Hero'
import ProductGrid from '@components/ProductGrid'
import Features    from '@components/Features'
import Newsletter  from '@components/Newsletter'

import inele   from '@data/rings.json'
import cercei  from '@data/earrings.json'
import beneficii from '@data/features.json'

function Home({ navigheaza, ROUTES }) {
  return (
    <main>
      <Hero onClick={() => navigheaza(ROUTES.RINGS)} />

      <ProductGrid
        titlu="Inele noi"
        produse={inele}
        onVeziMaiMulte={() => navigheaza(ROUTES.RINGS)}
        invers={false}
      />

      <ProductGrid
        titlu="Cercei noi"
        produse={cercei}
        onVeziMaiMulte={() => navigheaza(ROUTES.EARRINGS)}
        invers={true}
      />

      <Features beneficii={beneficii} />

      <Newsletter />
    </main>
  )
}

export default Home
