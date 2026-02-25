import { useState, useEffect, useCallback } from 'react'

export function useRouter() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigate = useCallback((path) => {
    window.history.pushState(null, '', path)
    setCurrentPath(path)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const isActive = useCallback((path) => {
    if (path === '/') return currentPath === '/'
    return currentPath.startsWith(path)
  }, [currentPath])

  return { currentPath, navigate, isActive }
}
