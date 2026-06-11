import { useState } from 'react'
import { Reveal, formatINR } from '../hooks.jsx'

export default function Calculator() {
  const [team, setTeam] = useState(10)
  const [salary, setSalary] = useState(25000)
  const [calls, setCalls] = useState(15000)

  const currentCost = team * salary
  const aiCost = Math.round(Math.max(15000, calls * 1.8))
  const savings = Math.max(0, currentCost - aiCost)
  const annual = savings * 12
  const efficiency = currentCost > 0 ? Math.round((savings / currentCost) * 100) : 0

  return (
    <section className="section section-soft" id="calculator">
      <div className="container">
        <Reveal>
          <p className="eyebrow center">Savings calculator</p>
          <h2 className="h2 center">Calculate how much money<br />AI can save you</h2>
          <p className="section-sub center">Move the sliders. Watch the savings stack up — live.</p>
        </Reveal>

        <Reveal delay={120}>
          <div className="calc glass">
            <div className="calc-inputs">
              <label className="slider-field">
                <div className="slider-head"><span>Team size</span><b>{team} people</b></div>
                <input type="range" min="1" max="200" value={team}
                  onChange={(e) => setTeam(+e.target.value)} />
              </label>

              <label className="slider-field">
                <div className="slider-head"><span>Avg. monthly salary</span><b>{formatINR(salary)}</b></div>
                <input type="range" min="10000" max="100000" step="1000" value={salary}
                  onChange={(e) => setSalary(+e.target.value)} />
              </label>

              <label className="slider-field">
                <div className="slider-head"><span>Calls per month</span><b>{calls.toLocaleString('en-IN')}</b></div>
                <input type="range" min="1000" max="200000" step="1000" value={calls}
                  onChange={(e) => setCalls(+e.target.value)} />
              </label>
            </div>

            <div className="calc-outputs">
              <div className="calc-row">
                <span>Current monthly cost</span><b>{formatINR(currentCost)}</b>
              </div>
              <div className="calc-row">
                <span>AI cost</span><b className="blue-text">{formatINR(aiCost)}</b>
              </div>
              <div className="calc-row big">
                <span>Monthly savings</span><b className="green-text">{formatINR(savings)}</b>
              </div>
              <div className="calc-row big">
                <span>Annual savings</span><b className="green-text">{formatINR(annual)}</b>
              </div>
              <div className="efficiency">
                <div className="efficiency-head">
                  <span>Efficiency increase</span><b>{efficiency}%</b>
                </div>
                <div className="bar"><div className="bar-fill" style={{ width: `${Math.min(efficiency, 100)}%` }} /></div>
              </div>
              <a href="#demo" className="btn btn-primary btn-block">Unlock these savings →</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
