import React from 'react'

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-inner">
        <h1 className="hero-title">Transform Your Career and Business with AI</h1>
        <p className="hero-sub">We provide practical AI/ML training and build real-world AI automation solutions for businesses using Machine Learning, Generative AI, LLMs, ChatGPT, LangChain, LangGraph, AWS, and custom AI agents.</p>

        <div className="hero-ctas">
          <a href="#training-portfolio" className="btn-primary">Join AI Training</a>
          <a href="#contact" className="btn-ghost">Build AI Solution</a>
        </div>

        <ul className="features-list">
          <li>Hands-on cohorts & bootcamps</li>
          <li>Enterprise-grade AI product development</li>
          <li>Agents, RAG, and MLOps for production</li>
        </ul>
      </div>
    </div>
  )
}
