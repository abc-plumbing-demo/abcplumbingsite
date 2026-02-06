import React, { useState, useEffect } from 'react'
import Button from '../components/Button'

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const heroImages = [
    `${import.meta.env.BASE_URL}images/hero-1.avif`,
    `${import.meta.env.BASE_URL}images/hero-2.avif`,
    'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=1920&q=80'
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextImage, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative h-[90vh] md:h-screen overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Hero ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight">
            Professional <span className="text-[#ff6b35]">Plumbing</span> Services
          </h1>
          <p className="text-lg md:text-xl mb-8 font-light max-w-2xl mx-auto">
            Trusted experts delivering quality solutions for all your plumbing needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" onClick={() => window.location.href = '#contact'}>
              Get Free Quote
            </Button>
            <Button variant="outline" onClick={() => window.location.href = '#services'}>
              Our Services
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevImage}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 text-white hover:text-[#ff6b35] transition-colors text-4xl font-light hidden md:block"
        aria-label="Previous image"
      >
        &lt;
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 text-white hover:text-[#ff6b35] transition-colors text-4xl font-light hidden md:block"
        aria-label="Next image"
      >
        &gt;
      </button>

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentImageIndex ? 'bg-[#ff6b35] w-8' : 'bg-white/50'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero

