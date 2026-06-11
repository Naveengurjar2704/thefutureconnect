// import { useEffect, useState } from 'react'
// import { useCountUp, useInView } from '../hooks.jsx'

// const loop = [
//   'Qualifying Leads…',
//   'Sending Follow-Ups…',
//   'Processing Loans…',
//   'Collecting Documents…',
//   'Approving Applications…',
//   'Sending EMI Reminders…',
//   'Recovering Payments…',
//   'Supporting Customers…',
//   'All Powered by AI.',
// ]

// function Stat({ label, value, suffix = '', prefix = '', start, accent }) {
//   const v = useCountUp(value, start, 1800)
//   return (
//     <div className="dash-stat">
//       <span className="dash-stat-label">{label}</span>
//       <span className={`dash-stat-value ${accent ? 'accent' : ''}`}>
//         {prefix}{v.toLocaleString('en-IN')}{suffix}
//       </span>
//     </div>
//   )
// }

// export default function Hero() {
//   const [i, setI] = useState(0)
//   const [ref, inView] = useInView(0.2)

//   useEffect(() => {
//     const t = setInterval(() => setI((p) => (p + 1) % loop.length), 2200)
//     return () => clearInterval(t)
//   }, [])

//   return (
//     <section className="hero" id="top">
//       <div className="hero-bg">
//         <div className="orb orb-a" />
//         <div className="orb orb-b" />
//         <div className="orb orb-c" />
//         <div className="grid-fade" />
//       </div>

//       <div className="container hero-grid">
//         <div className="hero-copy">
//           <p className="eyebrow">The Future of Fintech Operations Has Arrived</p>
//           <h1 className="hero-h1">
//             Every unanswered lead. Every missed EMI. Every manual task.{' '}
//             <span className="grad-text">Is costing you money.</span>
//           </h1>
//           <p className="hero-sub">
//             AI-powered LOS, LMS, Voice Calling Agents and intelligent business automation
//             that help lenders, NBFCs and enterprises reduce operational costs, increase
//             collections, accelerate loan processing and deliver exceptional customer experiences.
//           </p>

//           <div className="hero-actions">
//             <a href="#demo" className="btn btn-primary">🚀 Schedule Free Demo</a>
//             <a href="#products" className="btn btn-ghost">▶ Explore Solutions</a>
//           </div>

//           <div className="ticker" aria-live="polite">
//             <span className="ticker-dot" />
//             <span key={i} className="ticker-text">{loop[i]}</span>
//           </div>
//         </div>

//         <div className="hero-visual" ref={ref}>
//           <div className="dash glass">
//             <div className="dash-head">
//               <span className="dash-title">AI Operations · Live</span>
//               <span className="live-pill"><span className="live-dot" /> Live</span>
//             </div>
//             <div className="dash-grid">
//               <Stat label="Active Calls" value={142} start={inView} />
//               <Stat label="Today's Collections" value={482000} prefix="₹" start={inView} accent />
//               <Stat label="Leads Generated" value={368} start={inView} />
//               <Stat label="Loans Processed" value={57} start={inView} />
//               <Stat label="Cost Saved" value={186000} prefix="₹" start={inView} accent />
//               <Stat label="AI Agent Uptime" value={24} suffix="/7" start={inView} />
//             </div>
//             <div className="dash-wave" aria-hidden="true">
//               {Array.from({ length: 28 }).map((_, n) => (
//                 <span key={n} style={{ animationDelay: `${n * 0.07}s` }} />
//               ))}
//             </div>
//             <p className="dash-foot">AI Agent Activity · 1,248 conversations handled today</p>
//           </div>

//           <div className="float-card float-a glass">
//             <span className="fc-icon green">✓</span>
//             <div><b>EMI Recovered</b><small>₹24,500 · Auto-collected</small></div>
//           </div>
//           <div className="float-card float-b glass">
//             <span className="fc-icon blue">☏</span>
//             <div><b>AI Call Completed</b><small>Lead qualified in 94s</small></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
import { useEffect, useState } from 'react'
import { useCountUp, useInView } from '../hooks.jsx'

// Rotating headline phrases — keep them short so the line never wraps awkwardly
const headlines = [
  'Lead Qualification',
  'EMI Collections',
  'Loan Processing',
  'Customer Calls',
  'Document Collection',
  'Payment Recovery',
]

function Stat({ label, value, suffix = '', prefix = '', start, accent }) {
  const v = useCountUp(value, start, 1800)
  return (
    <div className="dash-stat">
      <span className="dash-stat-label">{label}</span>
      <span className={`dash-stat-value ${accent ? 'accent' : ''}`}>
        {prefix}{v.toLocaleString('en-IN')}{suffix}
      </span>
    </div>
  )
}

export default function Hero() {
  const [i, setI] = useState(0)
  const [fade, setFade] = useState(true)
  const [ref, inView] = useInView(0.2)

  // Swap the headline word with a short fade-out / fade-in
  useEffect(() => {
    const t = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setI((p) => (p + 1) % headlines.length)
        setFade(true)
      }, 350)
    }, 2800)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="hero" id="top">
      <div className="hero-bg">
        <div className="orb orb-a" />
        <div className="orb orb-b" />
        <div className="grid-fade" />
      </div>

      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">AI Operations for Lenders &amp; NBFCs</p>

          <h1 className="hero-h1">
            Put your{' '}
            <span className={`rotate-word grad-text ${fade ? 'in' : 'out'}`} key={i}>
              {headlines[i]}
            </span>
            <br />
            on autopilot.
          </h1>

          <p className="hero-sub">
            AI-powered LOS, LMS and voice agents that cut operational costs,
            speed up loan processing and recover more payments — without
            adding headcount.
          </p>

          <div className="hero-actions">
            <a href="#demo" className="btn btn-primary">Schedule a free demo</a>
            <a href="#products" className="btn btn-ghost">Explore solutions</a>
          </div>

          <p className="hero-note">No setup fees · Live in days, not months</p>
        </div>

        <div className="hero-visual" ref={ref}>
          <div className="dash glass">
            <div className="dash-head">
              <span className="dash-title">AI Operations</span>
              <span className="live-pill"><span className="live-dot" /> Live</span>
            </div>
            <div className="dash-grid">
              <Stat label="Active Calls" value={142} start={inView} />
              <Stat label="Today's Collections" value={482000} prefix="₹" start={inView} accent />
              <Stat label="Leads Generated" value={368} start={inView} />
              <Stat label="Loans Processed" value={57} start={inView} />
            </div>
            <div className="dash-wave" aria-hidden="true">
              {Array.from({ length: 28 }).map((_, n) => (
                <span key={n} style={{ animationDelay: `${n * 0.07}s` }} />
              ))}
            </div>
            <p className="dash-foot">1,248 conversations handled today</p>
          </div>

          <div className="float-card float-a glass">
            <span className="fc-icon green">✓</span>
            <div><b>EMI Recovered</b><small>₹24,500 · Auto-collected</small></div>
          </div>
        </div>
      </div>
    </section>
  )
}