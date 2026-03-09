import { useState } from 'react'

// Toate paginile aplicației
const ROUTES = {
  HOME:     'home',
  RINGS:    'rings',
  EARRINGS: 'earrings',
}

function useRouter() {
  const [pagina, setPagina] = useState(ROUTES.HOME)

  function navigheaza(ruta) {
    setPagina(ruta)
    window.scrollTo(0, 0)
  }

  return { pagina, navigheaza, ROUTES }
}

export default useRouter
