import { useEffect, useState } from 'react'

const read = () => window.location.hash.replace(/^#\/?/, '') || ''
const cleanUrl = () => window.location.pathname + window.location.search

export function goHome(e) {
  e.preventDefault()
  if (!window.location.hash) return
  history.pushState(null, '', cleanUrl())
  window.dispatchEvent(new PopStateEvent('popstate'))
}

export default function useHashRoute() {
  const [route, setRoute] = useState(read)

  useEffect(() => {
    const stripEmptyHash = () => {
      if (window.location.hash === '#/' || window.location.hash === '#') {
        history.replaceState(null, '', cleanUrl())
      }
    }
    stripEmptyHash()

    const onChange = () => {
      stripEmptyHash()
      setRoute(read())
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onChange)
    window.addEventListener('popstate', onChange)
    return () => {
      window.removeEventListener('hashchange', onChange)
      window.removeEventListener('popstate', onChange)
    }
  }, [])

  return route
}
