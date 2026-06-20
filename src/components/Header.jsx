import React, { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header" role="banner">
      <div className="container">
        <div className="header-inner">
          <div className="brand-nav">
            <a href="#" className="brand" aria-label="SoftEngineer AI home">SoftEngineer AI</a>
            <nav className="primary-nav" aria-label="Primary navigation">
              <a href="#main" className="nav-link" aria-current="page">Home</a>
              <a href="#training-portfolio" className="nav-link">Training Programs</a>
              <a href="#projects" className="nav-link">Projects</a>
              <a href="#site-footer" className="nav-link">Contact</a>
            </nav>
          </div>

            <div className="header-actions">
            <a href="tel:6366653022" className="phone">6366653022</a>
            <a href="https://topmate.io/hariforu/" target="_blank" rel="noopener" className="btn-primary small" role="button">Book Free Consultation</a>
          </div>

          <div className="mobile-toggle">
            <button onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open} className="toggle-btn">
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><path d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
            </button>
          </div>
        </div>
      </div>

      {open && (
            <div className="mobile-nav">
          <nav aria-label="Mobile navigation">
            <a href="#main" className="mobile-link">Home</a>
            <a href="#training-portfolio" className="mobile-link">Training Programs</a>
            <a href="#projects" className="mobile-link">Projects</a>
            <a href="#site-footer" className="mobile-link">Contact</a>
          </nav>
        </div>
      )}
    </header>
  )
}
