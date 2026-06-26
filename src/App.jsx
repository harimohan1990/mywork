import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import TrainingPortfolio from './components/TrainingPortfolio'
import AIIntegration from './components/AIIntegration'
import ContactCard from './components/ContactCard'
import Blog from './components/Blog'

export default function App() {
  return (
    <div className="app-root">
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />

      <main id="main">
        <div className="container">
          <section className="mt-10">
            <TrainingPortfolio />
          </section>

          <section className="mt-10">
            <AIIntegration />
          </section>

          <section className="mt-10">
            <ContactCard />
          </section>

          <section className="mt-10">
            <Blog />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
