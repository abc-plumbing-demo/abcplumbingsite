import React, { useState, useRef, useEffect } from 'react'
import Button from '../components/Button'
import Modal from '../components/Modal'
import '../styles/carousel.css'

const ServiceIcon = ({ name }) => {
  const icons = {
    'Emergency Repairs': (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
    ),
    'Drain Cleaning': (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
    ),
    'Water Heater': (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" /></svg>
    ),
    'Pipe Installation': (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
    ),
    'Leak Detection': (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0L12 2.69z" /></svg>
    ),
    'Bathroom Remodel': (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 5m-1.5 0a1.5 1.5 0 103 0a1.5 1.5 0 00-3 0M12 6.5v5M8 11.5h8M12 11.5v6" /></svg>
    )
  }
  return <span className="text-[#ff6b35]">{icons[name] || null}</span>
}

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [serviceModal, setServiceModal] = useState(null)
  const carouselRef = useRef(null)

  const services = [
    { id: 1, name: 'Emergency Repairs', description: 'Fast response for burst pipes, no heat, and urgent plumbing issues.', link: '#contact' },
    { id: 2, name: 'Drain Cleaning', description: 'Clear clogs and keep your drains flowing with professional cleaning.', link: '#contact' },
    { id: 3, name: 'Water Heater', description: 'Installation, repair, and maintenance for all types of water heaters.', link: '#contact' },
    { id: 4, name: 'Pipe Installation', description: 'New pipes, repiping, and reliable installation for your home.', link: '#contact' },
    { id: 5, name: 'Leak Detection', description: 'Find hidden leaks before they cause damage with expert detection.', link: '#contact' },
    { id: 6, name: 'Bathroom Remodel', description: 'Full bathroom upgrades and plumbing for your remodel project.', link: '#contact' }
  ]

  const ImagePlaceholder = () => (
    <div
      className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 via-gray-50 to-[#ff6b35]/5 border-2 border-dashed border-[#ff6b35]/30 rounded-sm relative overflow-hidden"
      style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(255,107,53,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,107,53,0.06) 0%, transparent 40%)' }}
    >
      <div className="relative z-0 flex flex-col items-center justify-center gap-2 p-4">
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-white/80 shadow-inner flex items-center justify-center ring-2 ring-[#ff6b35]/20">
          <svg className="w-7 h-7 md:w-8 md:h-8 text-[#ff6b35]/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <p className="text-xs md:text-sm font-medium text-[#ff6b35]/80 uppercase tracking-widest text-center max-w-[90%]">
          Your image here
        </p>
        <p className="text-[10px] md:text-xs text-gray-400 font-light tracking-wide hidden sm:block">
          Drop or replace
        </p>
      </div>
    </div>
  )

  // Dots: use Intersection Observer so the active dot reflects the card most in view
  const ratiosRef = useRef([])
  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel || typeof IntersectionObserver === 'undefined') return

    const cards = Array.from(carousel.children)
    ratiosRef.current = new Array(cards.length).fill(0)

    const observer = new IntersectionObserver(
      (entries) => {
        const ratios = ratiosRef.current
        entries.forEach((entry) => {
          const index = cards.indexOf(entry.target)
          if (index !== -1) ratios[index] = entry.intersectionRatio
        })
        const maxRatio = Math.max(...ratios)
        const newIndex = maxRatio > 0 ? ratios.findIndex((r) => r === maxRatio) : 0
        setActiveIndex(newIndex !== -1 ? newIndex : 0)
      },
      { root: carousel, threshold: [0, 0.25, 0.5, 0.75, 1] }
    )

    cards.forEach((el) => observer.observe(el))
    return () => cards.forEach((el) => observer.unobserve(el))
  }, [services.length])

  const scrollToCard = (index) => {
    const carousel = carouselRef.current
    if (!carousel) return

    const card = carousel.children[index]
    if (!card) return

    const cardLeft = card.offsetLeft
    const cardWidth = card.offsetWidth
    const containerWidth = carousel.clientWidth
    const scrollPosition = cardLeft - (containerWidth - cardWidth) / 2

    carousel.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    })
  }

  return (
    <section id="services" className="py-20 md:py-32 bg-gray-50 relative pb-0 md:pb-0">
      {/* Corner Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 bg-[#ff6b35]/20 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ zIndex: 5 }}></div>
      <div className="absolute bottom-20 md:bottom-24 right-0 w-32 h-32 md:w-48 md:h-48 bg-[#ff6b35]/20 rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none" style={{ zIndex: 15 }}></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="flex items-center justify-center gap-4 md:gap-6 mb-12 md:mb-16">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#ff6b35]/30 to-[#ff6b35]/60"></div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-center">
            <span className="text-black">Our</span> <span className="text-[#ff6b35]">Services</span>
          </h2>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#ff6b35]/30 to-[#ff6b35]/60"></div>
        </div>

        {/* Services Container - Mobile Carousel, Desktop Grid */}
        <div className="services-container">
          <div
            ref={carouselRef}
            className="services-carousel md:grid md:grid-cols-3 md:gap-6 lg:gap-8"
          >
            {services.map((service) => (
              <div key={service.id} className="service-card-wrapper">
                <div className="block group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <div className="w-full h-full group-hover:scale-[1.02] transition-transform duration-300">
                      <ImagePlaceholder />
                    </div>
                    <div className="absolute inset-0 bg-[#ff6b35]/15 group-hover:bg-[#ff6b35]/25 transition-colors pointer-events-none" aria-hidden="true" />
                  </div>
                  <div className="p-4 md:p-5">
                    <div className="mb-2">
                      <ServiceIcon name={service.name} />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">{service.name}</h3>
                    <p className="text-gray-600 text-sm font-light mb-4 leading-relaxed">{service.description}</p>
                    <button
                      type="button"
                      onClick={() => setServiceModal(service)}
                      className="text-[#ff6b35] text-sm font-medium underline decoration-[#ff6b35]/50 hover:decoration-[#ff6b35] transition-colors cursor-pointer"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Progressive Dot Indicators - Mobile Only */}
          <div className="flex justify-center gap-2 mt-8 md:hidden">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToCard(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === activeIndex
                    ? 'w-8 h-2 bg-[#ff6b35]'
                    : 'w-2 h-2 bg-gray-300'
                }`}
                aria-label={`Go to service ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12 md:mt-16 pb-20 md:pb-32">
          <Button onClick={() => window.location.href = '#contact'}>
            View All Services
          </Button>
        </div>
      </div>

      {/* Cut-out Image Placeholder - positioned at bottom, next section will overlap bottom part (waist high) */}
      <div className="relative w-full -mt-20 md:-mt-32 flex justify-center pt-8 md:pt-12" style={{ zIndex: 0 }}>
        <div className="relative w-64 md:w-80 lg:w-96 xl:w-[28rem] h-[400px] md:h-[450px] lg:h-[500px]">
          <div className="w-full h-full rounded-t-full overflow-hidden" style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 5%, 100% 95%, 80% 100%, 20% 100%, 0% 95%, 0% 5%)' }}>
            <img
              src={`${import.meta.env.BASE_URL}images/services-cutout.avif`}
              alt="24/7 plumbing service"
              className="w-full h-full object-contain object-top"
            />
          </div>
          
          {/* Badge overlapping cut-out image, positioned slightly to the right */}
          <div className="absolute top-6 -right-16 md:top-8 md:-right-12 lg:-right-16 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl px-4 py-3 md:px-6 md:py-4 transform transition-all duration-300 hover:scale-110 hover:shadow-[#ff6b35]/20 z-20 border border-white/50">
            <div className="flex flex-col items-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-light text-[#ff6b35] mb-1">
                24/7
              </div>
              <div className="text-xs md:text-sm font-light text-gray-700 uppercase tracking-wide text-center">
                Plumbing Service
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service detail modal - for real site this would link to service page */}
      <Modal isOpen={!!serviceModal} onClose={() => setServiceModal(null)} className="w-full max-w-lg">
        {serviceModal && (
          <div className="p-6 pt-14 md:p-8 md:pt-14">
            <div className="mb-4 text-[#ff6b35]">
              <ServiceIcon name={serviceModal.name} />
            </div>
            <h3 className="text-2xl font-light text-gray-900 mb-3">{serviceModal.name}</h3>
            <p className="text-gray-600 font-light leading-relaxed mb-6">{serviceModal.description}</p>
            <p className="text-sm text-gray-500 font-light mb-6">
              On the full site, this will link to the <strong className="text-gray-700">{serviceModal.name}</strong> service page for more details and booking.
            </p>
            <Button onClick={() => setServiceModal(null)}>Close</Button>
          </div>
        )}
      </Modal>
    </section>
  )
}

export default Services

