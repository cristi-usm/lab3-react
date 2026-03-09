import useRouter from '@hooks/useRouter'

import Navbar   from '@components/Navbar'
import Footer   from '@components/Footer'
import Home     from '@pages/Home'
import Rings    from '@pages/Rings'
import Earrings from '@pages/Earrings'

function App() {
  const { pagina, navigheaza, ROUTES } = useRouter()

  function afiseazaPagina() {
    if (pagina === ROUTES.RINGS)    return <Rings />
    if (pagina === ROUTES.EARRINGS) return <Earrings />
    return <Home navigheaza={navigheaza} ROUTES={ROUTES} />
  }

  return (
    <div>
      <Navbar navigheaza={navigheaza} pagina={pagina} ROUTES={ROUTES} />
      {afiseazaPagina()}
      <Footer navigheaza={navigheaza} ROUTES={ROUTES} />
    </div>
  )
}

export default App
