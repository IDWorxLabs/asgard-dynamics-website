import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Header />
      <main className="page privacy-page">
        <div className="container privacy-page__inner">
          <header className="privacy-page__header">
            <h1 className="privacy-page__title">Privacy Policy</h1>
            <p className="privacy-page__company">Asgard Dynamics</p>
            <p className="privacy-page__updated">Last updated: 30 July 2026</p>
          </header>

          <div className="privacy-page__body">
            <p className="privacy-page__placeholder">
              [Privacy Policy content will be inserted after the LISA data-handling review.]
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
