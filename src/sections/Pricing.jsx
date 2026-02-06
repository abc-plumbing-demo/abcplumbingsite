import React from 'react'
import Button from '../components/Button'

const Pricing = () => {
  const services = [
    { service: 'Emergency Repair', price: '$150', note: 'per hour' },
    { service: 'Drain Cleaning', price: '$200', note: 'per service' },
    { service: 'Water Heater Installation', price: '$1,200', note: 'starting at' },
    { service: 'Pipe Repair', price: '$300', note: 'per hour' },
    { service: 'Leak Detection', price: '$150', note: 'per service' },
    { service: 'Bathroom Remodel', price: '$5,000', note: 'starting at' },
    { service: 'Fixture Installation', price: '$250', note: 'per fixture' },
    { service: 'Sewer Line Repair', price: '$2,500', note: 'starting at' }
  ]

  return (
    <section id="pricing" className="py-20 md:py-32 bg-white relative">
      {/* Corner Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 bg-[#ff6b35]/20 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ zIndex: 5 }}></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 md:w-48 md:h-48 bg-[#ff6b35]/20 rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" style={{ zIndex: 5 }}></div>
      
      <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
        <div className="flex items-center justify-center gap-4 md:gap-6 mb-12 md:mb-16">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#ff6b35]/30 to-[#ff6b35]/60"></div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-center">
            <span className="text-black">Service</span> <span className="text-[#ff6b35]">Pricing</span>
          </h2>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#ff6b35]/30 to-[#ff6b35]/60"></div>
        </div>

        <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#ff6b35] text-white">
                <tr>
                  <th className="text-left py-4 px-6 font-light uppercase tracking-wide text-sm">Service</th>
                  <th className="text-right py-4 px-6 font-light uppercase tracking-wide text-sm">Price</th>
                </tr>
              </thead>
              <tbody>
                {services.map((item, index) => (
                  <tr
                    key={index}
                    className={`border-b border-gray-200 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    } hover:bg-[#ff6b35]/5 transition-colors`}
                  >
                    <td className="py-4 px-6 font-light text-gray-800">{item.service}</td>
                    <td className="py-4 px-6 text-right">
                      <span className="text-[#ff6b35] font-light text-lg">{item.price}</span>
                      <span className="text-gray-500 text-sm ml-2">{item.note}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 text-center mb-12 md:mb-16">
          <p className="text-gray-600 font-light mb-6">
            *Prices may vary based on project complexity. Contact us for a free quote.
          </p>
          <Button onClick={() => window.location.href = '#contact'}>
            Get Free Quote
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

export default Pricing

