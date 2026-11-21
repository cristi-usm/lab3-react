import { useState } from 'react'

export function useNavigation(initialPage = 'dashboard') {
  const [activePage, setActivePage] = useState(initialPage)

  const navigate = (page) => setActivePage(page)

  return { activePage, navigate }
}
