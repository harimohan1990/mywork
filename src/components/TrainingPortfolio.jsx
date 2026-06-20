import React from 'react'

export default function TrainingPortfolio(){
  // small client-side syllabus content
  const foundationsSyllabus = `Week 1: Data & Features\nWeek 2: Models & Training\nWeek 3: Evaluation & CI\nWeek 4: Deployment & Monitoring`;
  const advancedSyllabus = `Week 1: Advanced Architectures\nWeek 2: Scaling & Distributed Training\nWeek 3: MLOps & Observability\nWeek 4-6: Project`;
  const llmSyllabus = `Week 1: LLM internals\nWeek 2: Prompting & Retrieval\nWeek 3: Agents & Tooling\nWeek 4: Production & Safety`;

  function downloadSyllabus(name, body){
    const blob = new Blob([`Syllabus - ${name}\n\n${body}`], {type:'text/plain'})
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${name}-syllabus.txt`
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
  }

  return (
    <section id="training-portfolio" className="services-section" aria-labelledby="tp-heading">
      <div className="container">
        <h3 id="tp-heading">Training & Learning Portfolio</h3>
        <p className="muted">Cohort-based learning, role-specific bootcamps, and hands-on product building for enterprise teams. Designed for engineering teams, data scientists, and business leaders.</p>

        <div className="service-grid" style={{marginTop:16}}>
          <div className="service-card">
            <h4>Python for AI</h4>
            <p className="muted">Learn Python basics, data structures, functions, APIs, and automation.</p>
            <ul>
              <li>Python essentials and scripting</li>
              <li>Data manipulation with pandas</li>
              <li>API usage and automation</li>
            </ul>
            <div style={{marginTop:12}}>
              <button className="btn-primary small" onClick={()=>window.dispatchEvent(new CustomEvent('open-enroll', { detail: { id: 'py1', title: 'Python for AI' } }))}>Enroll</button>
            </div>
          </div>

          <div className="service-card">
            <h4>Machine Learning</h4>
            <p className="muted">Regression, classification, clustering, model training, evaluation, and deployment.</p>
            <ul>
              <li>Supervised & unsupervised learning</li>
              <li>Feature engineering & model evaluation</li>
              <li>Model deployment patterns</li>
            </ul>
            <div style={{marginTop:12}}>
              <button className="btn-primary small" onClick={()=>window.dispatchEvent(new CustomEvent('open-enroll', { detail: { id: 'ml1', title: 'Machine Learning' } }))}>Enroll</button>
            </div>
          </div>

          <div className="service-card">
            <h4>Deep Learning</h4>
            <p className="muted">Neural networks, PyTorch, CNN, RNN, transformers, and model optimization.</p>
            <ul>
              <li>Neural network foundations</li>
              <li>PyTorch workflows and optimization</li>
              <li>Transformers and advanced models</li>
            </ul>
            <div style={{marginTop:12}}>
              <button className="btn-primary small" onClick={()=>window.dispatchEvent(new CustomEvent('open-enroll', { detail: { id: 'dl1', title: 'Deep Learning' } }))}>Enroll</button>
            </div>
          </div>

          <div className="service-card">
            <h4>Generative AI</h4>
            <p className="muted">LLMs, ChatGPT, Claude, Gemini, prompt engineering, RAG, fine-tuning basics.</p>
            <ul>
              <li>Prompt engineering and LLM patterns</li>
              <li>RAG and retrieval systems</li>
              <li>Intro to fine-tuning & safety</li>
            </ul>
            <div style={{marginTop:12}}>
              <button className="btn-primary small" onClick={()=>window.dispatchEvent(new CustomEvent('open-enroll', { detail: { id: 'gen1', title: 'Generative AI' } }))}>Enroll</button>
            </div>
          </div>

          <div className="service-card">
            <h4>LangChain & LangGraph</h4>
            <p className="muted">Build AI agents, workflows, tools, memory, and automation pipelines.</p>
            <ul>
              <li>LangChain fundamentals and chains</li>
              <li>Tooling, memory and agent patterns</li>
              <li>Workflow orchestration with LangGraph</li>
            </ul>
            <div style={{marginTop:12}}>
              <button className="btn-primary small" onClick={()=>window.dispatchEvent(new CustomEvent('open-enroll', { detail: { id: 'lc1', title: 'LangChain & LangGraph' } }))}>Enroll</button>
            </div>
          </div>

          <div className="service-card">
            <h4>AWS for AI Engineers</h4>
            <p className="muted">Lambda, S3, DynamoDB, Bedrock, Textract, Transcribe, API Gateway.</p>
            <ul>
              <li>Serverless APIs and storage</li>
              <li>AWS Bedrock and model hosting</li>
              <li>Integration patterns and security</li>
            </ul>
            <div style={{marginTop:12}}>
              <button className="btn-primary small" onClick={()=>window.dispatchEvent(new CustomEvent('open-enroll', { detail: { id: 'aws1', title: 'AWS for AI Engineers' } }))}>Enroll</button>
            </div>
          </div>

          <div className="service-card">
            <h4>AI Automation</h4>
            <p className="muted">Build agents for HR, sales, support, documents, email, WhatsApp, and reports.</p>
            <ul>
              <li>Agent design for business workflows</li>
              <li>Integrations: email, WhatsApp, CRM</li>
              <li>Monitoring and maintenance</li>
            </ul>
            <div style={{marginTop:12}}>
              <button className="btn-primary small" onClick={()=>window.dispatchEvent(new CustomEvent('open-enroll', { detail: { id: 'auto1', title: 'AI Automation' } }))}>Enroll</button>
            </div>
          </div>
        </div>

        <h4 id="projects" style={{marginTop:20}}>Projects We Teach</h4>
        <ul className="muted">
          <li>AI Resume Screening Bot</li>
          <li>AI Customer Support Chatbot</li>
          <li>WhatsApp Ordering Bot</li>
          <li>RAG PDF Chatbot</li>
          <li>Sentiment Analysis System</li>
          <li>Image Classification Model</li>
          <li>Voice-to-Text AI Assistant</li>
          <li>Invoice OCR Automation</li>
          <li>HR Interview Assistant</li>
          <li>AI Sales Lead Bot</li>
        </ul>

        <h4 style={{marginTop:16}}>Why Choose Us</h4>
        <ul className="muted">
          <li>Practical project-based training</li>
          <li>Beginner-friendly explanations</li>
          <li>Real-world AI/ML use cases</li>
          <li>Industry-level tools and workflows</li>
          <li>Resume and interview support</li>
          <li>Online and offline training</li>
          <li>Corporate training available</li>
        </ul>

        <h4 style={{marginTop:16}}>Who Can Join</h4>
        <p className="muted">Students, freshers, working professionals, software engineers, data analysts, HR teams, business owners, startups, and corporate teams.</p>

        <div style={{marginTop:20}}>
          <button className="btn-primary" onClick={()=>{window.location.hash='#training'; window.scrollTo({top:document.getElementById('training')?.offsetTop || 0, behavior:'smooth'})}}>Join AI Training</button>
          <a href="#contact" className="btn-ghost" style={{marginLeft:12}}>Book Free Consultation</a>
        </div>
      </div>
    </section>
  )
}
