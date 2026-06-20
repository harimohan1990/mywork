import React from 'react'

export default function About(){
  return (
    <section id="about" className="services-section" aria-labelledby="about-heading">
      <div className="container">
        <h3 id="about-heading">About Us</h3>
        <p className="muted">SoftEngineer AI helps students, professionals, startups, and businesses learn and implement AI. We offer practical training and build production-ready AI automation solutions.</p>

        <div className="service-grid" style={{marginTop:16}}>
          <div className="service-card">
            <h4>AI/ML Training</h4>
            <p>Career-focused programs, cohort bootcamps, and corporate upskilling to make participants industry-ready.</p>
          </div>

          <div className="service-card">
            <h4>AI Agency Services</h4>
            <p>We build custom AI solutions: chatbots, automation agents, document AI, and end-to-end ML systems for businesses.</p>
          </div>

          <div className="service-card">
            <h4>Our Focus</h4>
            <ul className="list muted"><li>Practical learning with projects</li><li>Real-world deployments</li><li>Industry-ready deliverables</li></ul>
          </div>
        </div>
      </div>
    </section>
  )
}
