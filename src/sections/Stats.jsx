import React from 'react'

const Stats = () => {
  const stats = [
    { number: '5000+', label: 'Happy Customers' },
    { number: '20+', label: 'Years Experience' },
    { number: '24/7', label: 'Emergency Service' },
    { number: '100%', label: 'Satisfaction Rate' }
  ]

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-5xl lg:text-6xl font-light text-[#ff6b35] mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-gray-700 font-light uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats

