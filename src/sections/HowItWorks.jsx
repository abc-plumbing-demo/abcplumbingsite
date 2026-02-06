import React from 'react'
import Button from '../components/Button'

const HowItWorks = () => {
  const steps = [
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Request Quote',
      description: 'Fill out our contact form or call us to describe your plumbing needs.'
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'We Arrive Within 1 Hour',
      description: 'Our licensed plumber arrives at your location within 60 minutes.'
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Solve Your Problem',
      description: 'We diagnose and fix the issue efficiently with quality workmanship.'
    }
  ]

  return (
    <section className="py-20 md:py-32 bg-gray-50 relative">
      {/* Corner Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 bg-[#ff6b35]/20 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ zIndex: 5 }}></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 bg-[#ff6b35]/20 rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none" style={{ zIndex: 5 }}></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="flex items-center justify-center gap-4 md:gap-6 mb-12 md:mb-16">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#ff6b35]/30 to-[#ff6b35]/60"></div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-center">
            <span className="text-black">How It</span> <span className="text-[#ff6b35]">Works</span>
          </h2>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#ff6b35]/30 to-[#ff6b35]/60"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-6 text-[#ff6b35]">
                {step.icon}
              </div>
              <div className="mb-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#ff6b35] text-white font-light text-lg mb-4">
                  {index + 1}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-light mb-4 text-gray-800">
                {step.title}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mb-12 md:mb-16">
          <Button onClick={() => window.location.href = '#contact'}>
            Get Started
          </Button>
        </div>

        {/* Image Placeholder */}
        <div
          className="w-full h-64 md:h-96 lg:h-[500px] rounded-lg flex items-center justify-center border-2 border-dashed border-[#ff6b35]/30 bg-gradient-to-br from-gray-100 via-gray-50 to-[#ff6b35]/5"
          style={{ backgroundImage: 'radial-gradient(circle at 30% 70%, rgba(255,107,53,0.08) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(255,107,53,0.06) 0%, transparent 40%)' }}
        >
          <div className="flex flex-col items-center justify-center gap-3 p-6">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-white/80 shadow-inner flex items-center justify-center ring-2 ring-[#ff6b35]/20">
              <svg className="w-8 h-8 md:w-10 md:h-10 text-[#ff6b35]/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-sm md:text-base font-medium text-[#ff6b35]/80 uppercase tracking-widest">
              Your image here
            </p>
            <p className="text-xs md:text-sm text-gray-400 font-light tracking-wide">
              Drop or replace
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks

