import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Capabilities from './components/Capabilities'
import Products from './components/Products'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Capabilities />
        <Products />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
