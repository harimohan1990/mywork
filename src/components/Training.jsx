import React, { useEffect, useState } from 'react'

const STORAGE_KEY = 'aml_batches_v1'
const SIGNUP_KEY = 'aml_signups_v1'

const defaultBatches = [
  { id: 'b1', title: 'Cohort: Intro to ML (June)', date: '2026-07-10', seats: 20, seatsAvailable: 8, location: 'Bangalore' },
  { id: 'b2', title: 'Cohort: LLMs & Agents (July)', date: '2026-08-01', seats: 15, seatsAvailable: 12, location: 'Online' },
  { id: 'b3', title: 'Cohort: MLOps Bootcamp (Aug)', date: '2026-09-05', seats: 12, seatsAvailable: 12, location: 'Bangalore' }
]

export default function Training() {
  const [batches, setBatches] = useState([])
  const [selected, setSelected] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', company: '', seats: 1 })
  const [message, setMessage] = useState('')

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) setBatches(JSON.parse(raw))
    else {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultBatches))
      setBatches(defaultBatches)
    }
    // listen for cross-component enroll events
    function onOpenEnroll(e){
      const info = e.detail
      if(info && info.id){
        const batch = (batches.find(b=>b.id===info.id) || info)
        setSelected(batch)
        setForm({ name: '', email: '', company: '', seats: 1 })
        setMessage('')
      }
    }
    window.addEventListener('open-enroll', onOpenEnroll)
    return ()=> window.removeEventListener('open-enroll', onOpenEnroll)
  }, [])

  function openJoin(batch) {
    setSelected(batch)
    setForm({ name: '', email: '', company: '', seats: 1 })
    setMessage('')
  }

  async function submitJoin(e) {
    e.preventDefault()
    if (!selected) return
    const seats = Number(form.seats || 1)
    if (seats <= 0) return setMessage('Please select at least 1 seat')
    if (seats > selected.seatsAvailable) return setMessage('Not enough seats available')

    const signup = { id: Date.now().toString(), batchId: selected.id, batchTitle: selected.title, ...form, seats, createdAt: new Date().toISOString() }

    // Try server submission first; fall back to localStorage
    let remoteOk = false
    try {
      const res = await fetch('/api/enroll', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signup)
      })
      if (res.ok) remoteOk = true
    } catch (err) {
      // network error — we'll fallback below
    }

    if (!remoteOk) {
      const signups = JSON.parse(localStorage.getItem(SIGNUP_KEY) || '[]')
      signups.push(signup)
      localStorage.setItem(SIGNUP_KEY, JSON.stringify(signups))
    }

    // decrement seats locally and persist batches
    const updated = batches.map(b => b.id === selected.id ? { ...b, seatsAvailable: b.seatsAvailable - seats } : b)
    setBatches(updated)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))

    setMessage(remoteOk ? 'Signup submitted — confirmation will arrive by email shortly.' : 'Signup saved locally — we will sync when online.')
    setSelected(null)
  }

  return (
    <section id="training" className="services-section" aria-labelledby="training-heading">
      <h3 id="training-heading">Group Training & Cohorts</h3>

      <p className="muted">We run regular cohort-based training and group sessions. Join an existing batch or request a private corporate cohort.</p>

      <div className="service-grid" style={{marginTop:16}}>
        {batches.map(batch => (
          <div key={batch.id} className="service-card">
            <h4>{batch.title}</h4>
            <p className="muted">Date: {batch.date} · Location: {batch.location}</p>
            <p className="muted">Seats: {batch.seatsAvailable} / {batch.seats}</p>
            <div style={{marginTop:12}}>
              <button className="btn-primary small" onClick={() => openJoin(batch)} disabled={batch.seatsAvailable<=0}>Join</button>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div style={{marginTop:18}}>
          <h4>Join {selected.title}</h4>
          <form onSubmit={submitJoin} className="training-form">
            <label className="muted">Name<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} /></label>
            <label className="muted">Email<input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} /></label>
            <label className="muted">Company<input value={form.company} onChange={e=>setForm({...form,company:e.target.value})} /></label>
            <label className="muted">Seats<input required type="number" min="1" max={selected.seatsAvailable} value={form.seats} onChange={e=>setForm({...form,seats:e.target.value})} /></label>
            <div style={{marginTop:8}}>
              <button type="submit" className="btn-primary">Confirm Signup</button>
              <button type="button" onClick={()=>setSelected(null)} className="btn-ghost" style={{marginLeft:8}}>Cancel</button>
            </div>
          </form>
          {message && <p className="muted" style={{marginTop:8}}>{message}</p>}
        </div>
      )}
    </section>
  )
}
