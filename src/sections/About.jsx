import React from 'react'
import Button from '../components/Button'

const About = () => {
  return (
    <section id="about" className="relative -mt-20 md:-mt-32 z-20 pb-20 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden md:flex">
          {/* Left Side - Content */}
          <div className="md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
              <span className="text-black">About</span> <span className="text-[#ff6b35]">Us</span>
            </h2>
            <p className="text-gray-700 mb-8 font-light leading-relaxed">
              With over 20 years of experience, ABC Plumbing delivers reliable residential and commercial plumbing—from emergency repairs to full installations. Our licensed team is committed to quality work and your satisfaction.
            </p>
            <Button onClick={() => window.location.href = '#contact'}>
              Contact Us
            </Button>
          </div>

          {/* Right Side - Image */}
          <div className="md:w-1/2 relative h-64 md:h-auto group">
            <img
              src="/images/about.avif"
              alt="Professional plumber"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#ff6b35]/30"></div>

            {/* Hovering Badge */}
            <div className="absolute top-4 left-2 md:top-8 md:left-8 bg-white/95 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-2xl px-3 py-2 md:px-6 md:py-4 transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-[#ff6b35]/20 z-20 border border-white/50">
              <div className="flex flex-col items-center">
                <div className="text-xl md:text-4xl lg:text-5xl font-light text-[#ff6b35] mb-0.5 md:mb-1">
                  20+
                </div>
                <div className="text-[10px] md:text-sm font-light text-gray-700 uppercase tracking-wide text-center leading-tight">
                  Years Experience
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute top-4 right-4 w-24 h-24 bg-[#ff6b35]/20 rounded-full -z-10"></div>
            <div className="absolute bottom-4 left-4 w-32 h-32 bg-[#ff6b35]/10 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

