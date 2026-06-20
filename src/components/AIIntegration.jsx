import React from 'react'

export default function AIIntegration(){
  return (
    <section id="ai-integration" className="services-section" aria-labelledby="ai-integration-heading">
      <div className="container">
        <h3 id="ai-integration-heading">AI Integration for Your Business</h3>
        <p className="muted">We integrate AI into product workflows and business operations to drive automation, insights, and growth — without disrupting your core systems.</p>

        <div className="service-grid" style={{marginTop:12}}>
          <div className="service-card">
            <h4>What we do</h4>
            <ul>
              <li>Assess business processes and identify AI opportunities</li>
              <li>Prototype & validate with minimal data and real users</li>
              <li>Integrate models into existing systems (APIs, agents, messaging)</li>
            </ul>
          </div>

          <div className="service-card">
            <h4>Benefits</h4>
            <ul>
              <li>Reduce manual work and operating costs</li>
              <li>Improve decision-making with data-driven insights</li>
              <li>Scale personalized user experiences with automation</li>
            </ul>
          </div>

          <div className="service-card">
            <h4>How we deliver</h4>
            <ol>
              <li>Discovery & data readiness</li>
              <li>PoC / Pilot with measurable KPIs</li>
              <li>Production integration, monitoring & ops</li>
            </ol>
          </div>
        </div>

        <div style={{marginTop:16}}>
          <a href="https://topmate.io/hariforu/" target="_blank" rel="noopener" className="btn-primary">Build AI Solution</a>
          <a href="https://www.youtube.com/@Haripoints" target="_blank" rel="noopener" className="btn-ghost" style={{marginLeft:12}}>View YouTube</a>
        </div>
      </div>
    </section>
  )
}
