import React from 'react'

export default function Services() {
  return (
    <section id="services" className="services-section" aria-labelledby="services-heading">
      <h3 id="services-heading">Our Services</h3>
      <div className="service-grid">
        <article className="service-card">
          <h4>AI Chatbot Development</h4>
          <p>Custom chatbots for websites, WhatsApp, customer support, sales, and internal tools.</p>
        </article>

        <article className="service-card">
          <h4>AI Automation</h4>
          <p>Automate repetitive business workflows using AI agents and APIs to save time and reduce errors.</p>
        </article>

        <article className="service-card">
          <h4>Document AI</h4>
          <p>OCR, invoice processing, resume screening, PDF extraction, and automated report generation.</p>
        </article>

        <article className="service-card">
          <h4>Generative AI Solutions</h4>
          <p>RAG chatbots, knowledge base assistants, enterprise AI assistants, and multilingual bots.</p>
        </article>

        <article className="service-card">
          <h4>ML Model Development</h4>
          <p>Prediction models, classification systems, recommendation engines, and analytics tailored to business needs.</p>
        </article>

        <article className="service-card">
          <h4>WhatsApp AI Bot</h4>
          <p>Ordering, lead generation, support, and appointment bots for WhatsApp and messaging platforms.</p>
        </article>

        <article className="service-card">
          <h4>Corporate AI Training</h4>
          <p>Workshops and upskilling programs for teams, developers, HR, sales, and business leaders.</p>
        </article>
      </div>

      <div id="training" className="training-block">
        <h4>Training formats</h4>
        <p>Public cohorts, on-demand labs, mentoring hours, and customized corporate tracks.</p>
      </div>

      <div id="projects" className="products-block">
        <h4>Projects we teach</h4>
        <p className="muted">AI Resume Screening, Chatbots, WhatsApp Ordering Bots, RAG PDF Chatbots, Sentiment Analysis, Image Classification, Voice Assistants, Invoice OCR, HR Assistants, Sales Lead Bots.</p>
      </div>
    </section>
  )
}
