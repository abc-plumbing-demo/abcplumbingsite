import React, { useState, useRef, useEffect } from 'react'
import Button from '../components/Button'
import '../styles/carousel.css'

const RecentProjects = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const carouselRef = useRef(null)

  const projects = [
    { id: 1, title: 'Modern Bathroom Renovation' },
    { id: 2, title: 'Kitchen Plumbing Upgrade' },
    { id: 3, title: 'Commercial Pipe Installation' },
    { id: 4, title: 'Water Heater Replacement' },
    { id: 5, title: 'Drain System Overhaul' },
    { id: 6, title: 'Emergency Leak Repair' }
  ]

  const ImagePlaceholder = () => (
    <div
      className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 via-gray-50 to-[#ff6b35]/5 border-2 border-dashed border-[#ff6b35]/30"
      style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(255,107,53,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,107,53,0.06) 0%, transparent 40%)' }}
    >
      <div className="flex flex-col items-center justify-center gap-2 p-4">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white/80 shadow-inner flex items-center justify-center ring-2 ring-[#ff6b35]/20">
          <svg className="w-6 h-6 md:w-7 md:h-7 text-[#ff6b35]/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <p className="text-xs font-medium text-[#ff6b35]/80 uppercase tracking-widest text-center">
          Your image here
        </p>
        <p className="text-[10px] text-gray-400 font-light tracking-wide hidden sm:block">
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
  }, [projects.length])

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
    <section id="projects" className="py-20 md:py-32 bg-white pb-0 md:pb-0">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-center gap-4 md:gap-6 mb-12 md:mb-16">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#ff6b35]/30 to-[#ff6b35]/60"></div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-center">
            <span className="text-black">Recent</span> <span className="text-[#ff6b35]">Projects</span>
          </h2>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#ff6b35]/30 to-[#ff6b35]/60"></div>
        </div>

        {/* Projects Container - Mobile Carousel, Desktop Grid */}
        <div className="projects-container">
          <div
            ref={carouselRef}
            className="projects-carousel md:grid md:grid-cols-3 md:gap-6 lg:gap-8"
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="project-card-wrapper"
              >
                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden group">
                  <div className="w-full h-full transition-transform duration-300 group-hover:scale-[1.02]">
                    <ImagePlaceholder />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-lg md:text-xl font-light">{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Progressive Dot Indicators - Mobile Only */}
          <div className="flex justify-center gap-2 mt-8 md:hidden">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToCard(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === activeIndex
                    ? 'w-8 h-2 bg-[#ff6b35]'
                    : 'w-2 h-2 bg-gray-300'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12 md:mt-16 pb-20 md:pb-32">
          <Button onClick={() => window.location.href = '#contact'}>
            View All Projects
          </Button>
        </div>
      </div>

      {/* Image - larger on desktop, positioned higher */}
      <div className="relative w-full -mt-20 md:-mt-40 flex justify-center items-start pt-8 md:pt-16" style={{ zIndex: 0 }}>
        <div className="relative inline-block">
          <img
            src={`${import.meta.env.BASE_URL}images/projects-cutout.avif`}
            alt="Recent projects"
            className="block w-auto h-auto max-w-full md:max-w-[400px] lg:max-w-[480px] xl:max-w-[520px]"
          />
        </div>
      </div>
    </section>
  )
}

export default RecentProjects

