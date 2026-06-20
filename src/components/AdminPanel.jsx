import React, { useEffect, useState } from 'react'

const SIGNUP_KEY = 'aml_signups_v1'
const STORAGE_KEY = 'aml_batches_v1'

export default function AdminPanel(){
  const [signups, setSignups] = useState([])
  const [batches, setBatches] = useState([])

  useEffect(()=>{
    const s = JSON.parse(localStorage.getItem(SIGNUP_KEY)||'[]')
    const b = JSON.parse(localStorage.getItem(STORAGE_KEY)||'[]')
    setSignups(s)
    setBatches(b)
  },[])

  function clearAll(){
    if(!confirm('Clear all signups?')) return
    localStorage.removeItem(SIGNUP_KEY)
    setSignups([])
  }

  return (
    <section id="admin" className="services-section" aria-labelledby="admin-heading">
      <h3 id="admin-heading">Admin — Signups & Batches</h3>
      <p className="muted">This admin panel reads data from your browser localStorage (no server).</p>

      <div style={{marginTop:12}}>
        <h4>Batches</h4>
        <ul className="list muted">
          {batches.map(b=> <li key={b.id}>{b.title} — {b.date} — seats available: {b.seatsAvailable}</li>)}
        </ul>
      </div>

      <div style={{marginTop:12}}>
        <h4>Signups ({signups.length})</h4>
        <ul className="list muted">
          {signups.map(s=> <li key={s.id}>{s.name} ({s.email}) — {s.seats} seats — {s.batchTitle}</li>)}
        </ul>
      </div>

      <div style={{marginTop:16}}>
        <button className="btn-ghost" onClick={clearAll}>Clear Signups</button>
      </div>
    </section>
  )
}
