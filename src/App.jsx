import { useRouter } from '@hooks/useRouter'
import Header from '@components/Header/Header'
import Footer from '@components/Footer/Footer'
import Home from '@pages/Home/Home'
import Services from '@pages/Services/Services'
import Team from '@pages/Team/Team'
import Reviews from '@pages/Reviews/Reviews'
import Contact from '@pages/Contact/Contact'

function Router({ path, navigate }) {
  if (path === '/') return <Home navigate={navigate} />
  if (path === '/servicii') return <Services navigate={navigate} />
  if (path === '/echipa') return <Team navigate={navigate} />
  if (path === '/recenzii') return <Reviews navigate={navigate} />
  if (path === '/contact') return <Contact navigate={navigate} />
  return <Home navigate={navigate} />
}

export default function App() {
  const { currentPath, navigate, isActive } = useRouter()

  return (
    <>
      <Header navigate={navigate} isActive={isActive} />
      <Router path={currentPath} navigate={navigate} />
      <Footer navigate={navigate} />
    </>
  )
}
