import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import TrustBar from './components/TrustBar.jsx'
import PainSection from './components/PainSection.jsx'
import Products from './components/Products.jsx'
import Calculator from './components/Calculator.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Impact from './components/Impact.jsx'
import Industries from './components/Industries.jsx'
import WhyUs from './components/WhyUs.jsx'
import Testimonials from './components/Testimonials.jsx'
import DemoForm from './components/DemoForm.jsx'
import FAQ from './components/FAQ.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <PainSection />
        <Products />
        <Calculator />
        <HowItWorks />
        <Impact />
        <Industries />
        <WhyUs />
        <Testimonials />
        <DemoForm />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
