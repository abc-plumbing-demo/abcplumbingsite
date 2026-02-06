import React from 'react'
import TopBanner from './sections/TopBanner'
import Navigation from './sections/Navigation'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import TestimonialBanner from './sections/TestimonialBanner'
import Stats from './sections/Stats'
import RecentProjects from './sections/RecentProjects'
import WhyChooseUs from './sections/WhyChooseUs'
import Pricing from './sections/Pricing'
import HowItWorks from './sections/HowItWorks'
import Contact from './sections/Contact'
import FAQ from './sections/FAQ'
import Footer from './sections/Footer'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      {/* Sticky header: contact bar + nav - both stay in view at top */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <TopBanner />
        <Navigation />
      </header>
      <div className="h-[8.5rem] md:h-[7.5rem]" aria-hidden="true" />
      <Hero />
      <About />
      <Services />
      <TestimonialBanner />
      <Stats />
      <RecentProjects />
      <WhyChooseUs />
      <Pricing />
      <HowItWorks />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App

