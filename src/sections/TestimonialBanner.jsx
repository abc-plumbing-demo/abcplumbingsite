import React, { useState, useEffect } from 'react'

const TestimonialBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'John Smith',
      location: 'New York, NY',
      text: 'ABC Plumbing saved the day when our water heater broke down. Fast, professional, and affordable. Highly recommend!',
      rating: 5,
      backgroundImage: '/images/hero-1.avif'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      location: 'Brooklyn, NY',
      text: 'Excellent service from start to finish. The team was punctual, clean, and fixed our leak quickly. Will definitely use again.',
      rating: 5,
      backgroundImage: '/images/hero-2.avif'
    },
    {
      id: 3,
      name: 'Mike Davis',
      location: 'Queens, NY',
      text: 'Best plumbers in the area! They installed new pipes throughout our house and did an amazing job. Very satisfied.',
      rating: 5,
      backgroundImage: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=1920&q=80'
    },
    {
      id: 4,
      name: 'Emily Wilson',
      location: 'Manhattan, NY',
      text: 'Professional, courteous, and knowledgeable. They fixed our bathroom issues and gave great advice. Thank you!',
      rating: 5,
      backgroundImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80'
    }
  ]

  // Auto-cycle through testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="relative py-20 md:py-32 overflow-hidden -mt-16 md:-mt-24" style={{ zIndex: 10 }}>
      {/* Solid back layer so transitions don't reveal content below (e.g. Services cut-out) */}
      <div className="absolute inset-0 bg-black" aria-hidden="true" />
      {/* Background Images - one for each testimonial */}
      <div className="absolute inset-0">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={testimonial.backgroundImage}
              alt={`Background ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center text-white">
          <div className="flex items-center justify-center gap-4 md:gap-6 mb-12">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/30 to-white/60"></div>
            <h2 className="text-3xl md:text-4xl font-light text-center">
              What Our <span className="text-[#ff6b35]">Clients Say</span>
            </h2>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-white/30 to-white/60"></div>
          </div>

          <div className="relative min-h-[300px] flex items-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="text-center">
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-6 h-6 text-[#ff6b35]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-lg md:text-xl font-light mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-light text-lg">{testimonial.name}</p>
                    <p className="text-gray-300 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-8 mt-8">
            <button
              onClick={prevTestimonial}
              className="text-white hover:text-[#ff6b35] transition-colors text-3xl font-light"
              aria-label="Previous testimonial"
            >
              &lt;
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-[#ff6b35] w-8' : 'bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="text-white hover:text-[#ff6b35] transition-colors text-3xl font-light"
              aria-label="Next testimonial"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialBanner

