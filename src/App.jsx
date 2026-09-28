import Nav from './components/Nav.jsx'
import Profile from './components/Profile.jsx'
import HomeBlocks from './components/HomeBlocks.jsx'
import Github from './components/Github.jsx'
import Games from './components/Games.jsx'
import useHashRoute from './useHashRoute.js'

const pages = {
  github: Github,
  game: Games,
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
  const Page = pages[route] ?? Home

  return (
    <>
      <Nav route={route} />
      <main>
        <Page />
      </main>
      <footer>© {new Date().getFullYear()} YoungHoon02</footer>
    </>
  )
}
