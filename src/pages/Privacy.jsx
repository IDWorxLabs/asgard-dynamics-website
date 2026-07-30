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
            <h1 className="privacy-page__title">LISA® Communicator Privacy Policy</h1>
            <p className="privacy-page__company">A product of Asgard Dynamics</p>
            <p className="privacy-page__updated">Last updated: 30 July 2026</p>
          </header>

          <div className="privacy-page__body">
            <section className="privacy-page__section">
              <h2>1. Introduction</h2>
              <p>
                LISA® Communicator is an assistive communication application developed by Asgard
                Dynamics for people who communicate using eye movements.
              </p>
              <p>
                This Privacy Policy explains how LISA Version 1 uses the device camera, what
                information is stored on the device, and how optional feedback is handled.
              </p>
            </section>

            <section className="privacy-page__section">
              <h2>2. Camera use</h2>
              <p>
                The front camera is used only for eye tracking and intentional wink detection. These
                features allow a person to select and communicate phrases by looking at the screen
                and using intentional winks.
              </p>
              <p>
                The camera is not used for recording video, capturing photos for storage, or any
                purpose other than enabling on-screen communication.
              </p>
            </section>

            <section className="privacy-page__section">
              <h2>3. On-device processing</h2>
              <p>
                Camera processing happens entirely on the device. LISA does not upload camera video
                or images to Asgard Dynamics.
              </p>
            </section>

            <section className="privacy-page__section">
              <h2>4. Information stored</h2>
              <p>
                Communication profiles, phrases, settings, and preferences are stored locally on the
                device.
              </p>
              <p>
                Sensitive application data is protected using encrypted local storage. This
                information remains on the device and is used to keep LISA set up for the person
                using it.
              </p>
            </section>

            <section className="privacy-page__section">
              <h2>5. Feedback</h2>
              <p>If you choose to leave feedback in LISA:</p>
              <ul>
                <li>Feedback is stored only while LISA remains open.</li>
                <li>Feedback is cleared on a fresh application launch.</li>
                <li>
                  Choosing &ldquo;Review and send by email&rdquo; opens the user&apos;s own email
                  application.
                </li>
                <li>
                  A caregiver may be needed to choose an email application, select an account, review
                  the email if needed, and press Send.
                </li>
                <li>
                  Feedback leaves LISA only if the user or caregiver chooses to send the email.
                </li>
              </ul>
            </section>

            <section className="privacy-page__section">
              <h2>6. Emergency Mode</h2>
              <p>Emergency Mode is designed to attract attention nearby. When activated, it:</p>
              <ul>
                <li>plays a local alarm,</li>
                <li>repeats a spoken emergency phrase, and</li>
                <li>displays an on-screen alert.</li>
              </ul>
              <p>Emergency Mode does not automatically:</p>
              <ul>
                <li>call emergency services,</li>
                <li>send SMS messages,</li>
                <li>email anyone,</li>
                <li>share GPS location, or</li>
                <li>contact caregivers.</li>
              </ul>
            </section>

            <section className="privacy-page__section">
              <h2>7. No advertising</h2>
              <p>LISA does not sell personal information.</p>
              <p>Eye tracking data is not sold to advertisers.</p>
            </section>

            <section className="privacy-page__section">
              <h2>8. Security</h2>
              <p>
                LISA is designed to minimise data sharing by keeping information on the device
                whenever possible. By processing camera input locally and storing communication data
                on the device, LISA reduces the need to send information elsewhere.
              </p>
            </section>

            <section className="privacy-page__section">
              <h2>9. Changes to this policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Updates will be published on
                this page and inside future versions of LISA when appropriate.
              </p>
            </section>

            <section className="privacy-page__section">
              <h2>10. Contact</h2>
              <p>
                <strong>Support</strong>
                <br />
                <a href="mailto:lisa-support@asgarddynamics.io">lisa-support@asgarddynamics.io</a>
              </p>
              <p>
                <strong>Feedback</strong>
                <br />
                <a href="mailto:lisa-feedback@asgarddynamics.io">lisa-feedback@asgarddynamics.io</a>
              </p>
              <p>
                <strong>Company</strong>
                <br />
                Asgard Dynamics
                <br />
                <a href="https://asgarddynamics.io">https://asgarddynamics.io</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
