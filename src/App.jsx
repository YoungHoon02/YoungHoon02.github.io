import Nav from './components/Nav.jsx'
import Profile from './components/Profile.jsx'
import HomeBlocks from './components/HomeBlocks.jsx'
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
    <>
      <Profile />
      <HomeBlocks />
    </>
  )
}

export default function App() {
  const route = useHashRoute()
  const [page, ...rest] = route.split('/')
  const param = rest.join('/')
  const Page = pages[page] ?? Home

  return (
    <>
      <Nav route={page} />
      <main>
        <Page param={param} />
      </main>
      <footer>© {new Date().getFullYear()} YoungHoon02</footer>
    </>
  )
}
