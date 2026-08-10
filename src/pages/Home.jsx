import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Capabilities from '../components/Capabilities'
import Products from '../components/Products'
import LisaHighlight from '../components/LisaHighlight'
import Process from '../components/Process'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { applyPageSeo } from '../utils/seo'

const HOME_TITLE = 'Asgard Dynamics — Forward-built technology'
const HOME_DESCRIPTION =
  'Asgard Dynamics builds software products, intelligent systems, automation platforms, and future-focused digital solutions.'

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    return applyPageSeo({
      title: HOME_TITLE,
      description: HOME_DESCRIPTION,
      canonical: 'https://www.asgarddynamics.io/',
    })
  }, [])

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1)
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
      return
    }

    window.scrollTo(0, 0)
  }, [location.pathname, location.hash])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Capabilities />
        <Products />
        <LisaHighlight />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
