import React from 'react'

export default function ContactCard() {
  return (
    <aside className="contact-card glass" aria-labelledby="contact-heading">
      <h2 id="contact-heading" className="contact-title">Contact</h2>
      <p className="contact-sub">Ready to learn or build with AI? Reach us directly via phone or email.</p>

      <div className="contact-details">
        <div className="contact-row">
          <div>
            <div className="meta">Phone</div>
            <a href="tel:6366653022" className="meta-link">6366653022</a>
          </div>
        </div>

        <div className="contact-row">
          <div>
            <div className="meta">Location</div>
            <div className="meta-link">Bangalore, India</div>
          </div>
        </div>

        <div className="contact-note">
          <p className="muted">Prefer email? </p>
          <a href="mailto:harimohan.info@gmail.com" className="email-link">harimohan.info@gmail.com</a>
        </div>

        <div style={{marginTop:12}}>
          <a href="https://topmate.io/hariforu/" target="_blank" rel="noopener" className="btn-primary">Book Free Consultation</a>
          <a href="tel:6366653022" className="btn-ghost" style={{marginLeft:8}}>Call Us</a>
        </div>
        <div style={{marginTop:12}}>
          <a href="https://www.youtube.com/@Haripoints" target="_blank" rel="noopener" className="link">YouTube Channel</a>
        </div>
      </div>

      <p className="copyright">© {new Date().getFullYear()} SoftEngineer AI — All rights reserved.</p>
    </aside>
  )
}
