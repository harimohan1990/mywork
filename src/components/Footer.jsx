import React from 'react'

export default function Footer() {
  return (
    <footer id="site-footer" className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand">SoftEngineer AI</div>
          <p className="muted">SoftEngineer AI Academy & Agency — training, automation, and production AI.</p>
        </div>

        <div>
          <h4>Contact</h4>
          <p className="muted">Phone: <a href="tel:6366653022" className="link">6366653022</a></p>
          <p className="muted">Location: Bangalore, India</p>
          <p className="muted"><a href="mailto:harimohan.info@gmail.com" className="link">harimohan.info@gmail.com</a></p>
          <p className="muted"><a href="https://www.linkedin.com/in/hari-m-47299b54/?skipRedirect=true" target="_blank" rel="noopener" className="link">LinkedIn</a></p>
          <p style={{marginTop:8}}>
            <a href="https://www.youtube.com/@Haripoints" target="_blank" rel="noopener" className="link">YouTube</a>
            <span style={{marginLeft:12}}></span>
            <a href="https://topmate.io/hariforu/" target="_blank" rel="noopener" className="link">Book Consultation</a>
          </p>
        </div>

        <div>
          <h4>Services</h4>
          <ul className="muted list">
            <li>AI Chatbots & Agents</li>
            <li>AI Automation & Workflows</li>
            <li>Document AI & OCR</li>
            <li>Corporate Training</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">© {new Date().getFullYear()} SoftEngineer AI — All rights reserved.</div>
      </div>
    </footer>
  )
}
