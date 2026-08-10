import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import lisaHero from '../assets/lisa/lisa-hero.png'
import lisaHowItWorks from '../assets/lisa/lisa-how-it-works.png'
import lisaGuidedLearning from '../assets/lisa/lisa-guided-learning.png'
import lisaCustomPhrases from '../assets/lisa/lisa-custom-phrases.png'
import lisaEmergency from '../assets/lisa/lisa-emergency.png'
import lisaIndependence from '../assets/lisa/lisa-built-for-independence.png'
import { applyPageSeo } from '../utils/seo'

const FEATURE_BADGES = ['Android', 'Works Offline', 'Eye Controlled', 'Designed in South Africa']

const GALLERY = [
  {
    title: 'How LISA Works',
    caption: 'Learn how simple eye movements become spoken communication.',
    src: lisaHowItWorks,
    alt: 'How LISA works — look, wink, and communicate using eye movement',
  },
  {
    title: 'Guided Learning',
    caption: 'Built-in lessons help new users gain confidence at their own pace.',
    src: lisaGuidedLearning,
    alt: 'Guided learning in LISA — step-by-step practice for confident eye control',
  },
  {
    title: 'Create Phrases',
    caption: 'Personalise LISA with the phrases that matter most.',
    src: lisaCustomPhrases,
    alt: 'Custom phrases in LISA — personalise communication boards and messages',
  },
  {
    title: 'Emergency',
    caption: 'Emergency mode provides immediate access to help when every second matters.',
    src: lisaEmergency,
    alt: 'LISA Emergency Mode — local alert to attract nearby attention when help is needed',
  },
  {
    title: 'Built for Independence',
    caption: 'LISA is designed to support greater independence in everyday communication.',
    src: lisaIndependence,
    alt: 'Built for independence — LISA helps people communicate with confidence every day',
  },
]

const PAGE_TITLE = 'LISA® Communicator — Eye-Controlled Communication App | Asgard Dynamics'
const PAGE_DESCRIPTION =
  'LISA Communicator is an Android communication application that enables people who cannot speak to communicate using only eye movements. Designed in South Africa by Asgard Dynamics.'

export default function Lisa() {
  useEffect(() => {
    window.scrollTo(0, 0)
    return applyPageSeo({
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      canonical: 'https://www.asgarddynamics.io/lisa',
    })
  }, [])

  return (
    <>
      <Header />
      <main className="lisa-page">
        <section className="lisa-page__intro lisa-page__section--fade" aria-labelledby="lisa-intro-heading">
          <div className="container lisa-page__intro-inner">
            <p className="lisa-page__eyebrow">LISA® COMMUNICATOR</p>
            <h1 id="lisa-intro-heading" className="lisa-page__intro-title">
              Communication powered by eye movement.
            </h1>
            <p className="lisa-page__intro-body">
              LISA Communicator is an eye-controlled communication app designed for people who cannot
              speak or use their hands. Using only eye movements, LISA helps users communicate,
              request assistance and express themselves with greater confidence and independence.
            </p>
            <p className="lisa-page__definition">
              LISA Communicator is an Android communication application that enables people who cannot
              speak to communicate using only eye movements.
            </p>

            <ul className="lisa-page__badges" aria-label="LISA product highlights">
              {FEATURE_BADGES.map((label) => (
                <li key={label} className="lisa-page__badge">
                  <span className="lisa-page__badge-icon" aria-hidden="true">
                    ✓
                  </span>
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="lisa-page__hero lisa-page__section--fade" aria-label="LISA Communicator hero">
          <div className="container lisa-page__hero-container">
            <img
              src={lisaHero}
              alt="LISA Communicator hero — eye-controlled communication for independent expression"
              className="lisa-page__image lisa-page__image--hero"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              width={1400}
              height={788}
            />
          </div>
        </section>

        <div className="lisa-page__gallery">
          {GALLERY.map(({ title, caption, src, alt }) => (
            <section
              key={title}
              className="lisa-page__section lisa-page__section--fade"
              aria-labelledby={`lisa-section-${title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="container lisa-page__container">
                <header className="lisa-page__image-intro">
                  <h2
                    id={`lisa-section-${title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="lisa-page__image-heading"
                  >
                    {title}
                  </h2>
                  <p className="lisa-page__image-caption">{caption}</p>
                </header>
                <img
                  src={src}
                  alt={alt}
                  className="lisa-page__image"
                  loading="lazy"
                  decoding="async"
                  width={1200}
                  height={675}
                />
              </div>
            </section>
          ))}
        </div>

        <section className="lisa-page__cta lisa-page__section--fade" aria-labelledby="lisa-cta-heading">
          <div className="container lisa-page__cta-inner">
            <h2 id="lisa-cta-heading" className="lisa-page__cta-title">
              LISA gives a voice to people who need it most.
            </h2>
            <p className="lisa-page__cta-text">
              Built for people living with conditions that affect speech and movement, including
              locked-in syndrome, motor neurone disease, ALS and stroke recovery.
            </p>
            <p className="lisa-page__cta-support">
              Designed in South Africa. Built by Asgard Dynamics.
            </p>
            <div className="lisa-page__cta-actions">
              <div className="lisa-page__play-block">
                <button
                  type="button"
                  className="btn btn--primary btn--disabled"
                  disabled
                  aria-disabled="true"
                  aria-label="Preparing for Google Play — waiting list not yet open for automated signup"
                >
                  Preparing for Google Play
                </button>
                <p className="lisa-page__play-note">Available on Google Play soon.</p>
              </div>
              <Link to={{ pathname: '/', hash: 'contact' }} className="btn btn--secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
