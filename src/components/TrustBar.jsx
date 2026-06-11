const clients = ['NBFCs', 'Fintech Companies', 'Lending Businesses', 'DSAs', 'Collection Agencies', 'Enterprises']

export default function TrustBar() {
  const row = [...clients, ...clients]
  return (
    <section className="trust">
      <div className="container">
        <p className="trust-label">Trusted by teams across the lending ecosystem</p>
      </div>
      <div className="marquee">
        <div className="marquee-track">
          {row.map((c, i) => (
            <span className="logo-chip" key={i}>{c}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
