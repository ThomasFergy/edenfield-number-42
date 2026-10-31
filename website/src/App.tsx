import { Breakfast } from './components/Breakfast'
import { FindUs } from './components/FindUs'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Reviews } from './components/Reviews'
import { Rooms } from './components/Rooms'
import { Welcome } from './components/Welcome'

export default function App() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Welcome />
        <Rooms />
        <Breakfast />
        <Reviews />
        <FindUs />
      </main>
      <Footer />
    </>
  )
}
