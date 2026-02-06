import React from 'react'

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Licensed & Insured',
      description: 'All our plumbers are fully licensed, bonded, and insured for your peace of mind.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: '24/7 Availability',
      description: 'Emergency plumbing services available around the clock, whenever you need us.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Quality Guarantee',
      description: 'We stand behind our work with comprehensive warranties on all services.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Fair Pricing',
      description: 'Transparent, upfront pricing with no hidden fees or surprise charges.'
    }
  ]

  return (
    <section className="py-20 md:py-32 bg-gray-50 relative overflow-hidden -mt-16 md:-mt-24" style={{ zIndex: 10 }}>
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff6b35]/10 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" style={{ zIndex: 1 }}></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ff6b35]/10 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" style={{ zIndex: 1 }}></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-[#ff6b35]/5 rounded-full pointer-events-none" style={{ zIndex: 1 }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-[#ff6b35]/5 rounded-full pointer-events-none" style={{ zIndex: 1 }}></div>

      {/* Subtle Icon Background Elements */}
      <div className="absolute top-20 left-10 opacity-5 pointer-events-none" style={{ zIndex: 1 }}>
        <svg className="w-24 h-24 text-[#ff6b35]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      </div>
      <div className="absolute bottom-20 right-10 opacity-5 pointer-events-none" style={{ zIndex: 1 }}>
        <svg className="w-24 h-24 text-[#ff6b35]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="flex items-center justify-center gap-4 md:gap-6 mb-12 md:mb-16">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#ff6b35]/30 to-[#ff6b35]/60"></div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-center">
            <span className="text-black">Why Choose</span> <span className="text-[#ff6b35]">Us</span>
          </h2>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#ff6b35]/30 to-[#ff6b35]/60"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-6 text-[#ff6b35]">
                {reason.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-light mb-4 text-gray-800">
                {reason.title}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs

