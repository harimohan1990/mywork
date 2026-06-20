import React from 'react'

const quotes = [
  { name: 'Anita R., Head of Data', org: 'RetailCo', quote: 'Their AI training and pilot accelerated our recommendation launch — 3x conversion uplift in two months.' },
  { name: 'Ravi P., CTO', org: 'FMCG Inc', quote: 'Production-grade OCR pipeline reduced invoice processing time by 70%.' },
  { name: 'Meera S., Director', org: 'HealthTech', quote: 'The hands-on MLOps bootcamp helped our engineers deploy models with confidence.' }
]

export default function Testimonials(){
  return (
    <section id="testimonials" className="services-section" aria-labelledby="testimonials-heading">
      <h3 id="testimonials-heading">Client Success</h3>
      <div className="service-grid" style={{marginTop:12}}>
        {quotes.map((q, i) => (
          <div key={i} className="service-card">
            <p>“{q.quote}”</p>
            <p className="muted" style={{marginTop:8}}>- {q.name}, {q.org}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
