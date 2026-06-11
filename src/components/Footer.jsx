export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="#top" className="brand">
            <span className="brand-mark">F</span>
            <span className="brand-name light">thefuture<b>connect</b></span>
          </a>
          <p>AI automation and lending technology that helps businesses save money, reduce manpower dependency and scale operations.</p>
          <div className="socials">
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="X (Twitter)">𝕏</a>
            <a href="#" aria-label="YouTube">▶</a>
            <a href="#" aria-label="Instagram">◎</a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Products</h4>
          <a href="#products">LOS</a>
          <a href="#products">LMS</a>
          <a href="#products">AI Calling Agents</a>
          <a href="#products">AI Automation</a>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <a href="#why">About Us</a>
          <a href="#demo">Careers</a>
          <a href="#demo">Contact</a>
        </div>

        <div className="footer-col">
          <h4>Resources</h4>
          <a href="#faq">Blog</a>
          <a href="#testimonials">Case Studies</a>
          <a href="#faq">Documentation</a>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <a href="tel:+919999999999">+91 99999 99999</a>
          <a href="mailto:hello@thefutureconnect.com">hello@thefutureconnect.com</a>
          <span className="footer-addr">Agra, Uttar Pradesh, India</span>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} thefutureconnect. All rights reserved.</span>
        <span><a href="#">Privacy</a> · <a href="#">Terms</a></span>
      </div>
    </footer>
  )
}
