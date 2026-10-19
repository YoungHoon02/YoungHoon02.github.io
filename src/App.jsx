import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Nav from './components/Nav.jsx'
import Profile from './components/Profile.jsx'
import { Destinations, Recent } from './components/HomeBlocks.jsx'
import Github from './components/Github.jsx'
import Games from './components/Games.jsx'
import Notes from './components/Notes.jsx'
import useHashRoute from './useHashRoute.js'

const pages = {
  github: Github,
  game: Games,
  notes: Notes,
}

function Home() {
  return (
    <section className="section">
      <div className="home">
        <Profile />
        <Destinations />
      </div>
      <Recent />
    </section>
  )
}

const SWAP_AT = 340
const SETTLE_AT = 1000
const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

// 주소가 바뀌면 시트가 들어오는 동안 이전 페이지를 두고, 시트가 나가기 시작할 때 새 페이지로 바꾼다
function usePageTransition(route) {
  const [shown, setShown] = useState(route)
  const [phase, setPhase] = useState('idle')
  const first = useRef(true)

  useEffect(() => {
    if (first.current) { first.current = false; return }
    if (route === shown) return
    if (reduceMotion()) { setShown(route); return }
    setPhase('enter')
    const swap = setTimeout(() => { setShown(route); setPhase('leave') }, SWAP_AT)
    const settle = setTimeout(() => setPhase('idle'), SETTLE_AT)
    return () => { clearTimeout(swap); clearTimeout(settle) }
  }, [route])

  return [shown, phase]
}

export default function App() {
  const route = useHashRoute()
  const [shown, phase] = usePageTransition(route)
  const mainRef = useRef(null)
  const [page, ...rest] = shown.split('/')
  const param = rest.join('/')
  const Page = pages[page] ?? Home

  useLayoutEffect(() => {
    if (phase !== 'leave') return
    mainRef.current.querySelectorAll('[data-stagger]').forEach((el, i) => el.style.setProperty('--i', i))
    document.documentElement.style.setProperty('--navh', `${document.querySelector('.nav').offsetHeight}px`)
  }, [phase, shown])

  return (
    <>
      <Nav route={page} />
      <main ref={mainRef} className={phase === 'leave' ? 'in-ws' : undefined}>
        <Page param={param} />
      </main>
      <div className={`ov ${phase}`} aria-hidden>{phase !== 'idle' && <i />}</div>
      <footer>© {new Date().getFullYear()} YoungHoon02</footer>
    </>
  )
}
