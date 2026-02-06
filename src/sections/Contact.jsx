import React, { useState } from 'react'
import Button from '../components/Button'
import Modal from '../components/Modal'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowSuccessModal(true)
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-center gap-4 md:gap-6 mb-12 md:mb-16">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#ff6b35]/30 to-[#ff6b35]/60"></div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-center">
            <span className="text-black">Contact</span> <span className="text-[#ff6b35]">Us</span>
          </h2>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#ff6b35]/30 to-[#ff6b35]/60"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-light mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6b35] focus:border-transparent font-light"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-light mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6b35] focus:border-transparent font-light"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="phone" className="block text-gray-700 font-light mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6b35] focus:border-transparent font-light"
                placeholder="(123) 456-7890"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-light mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6b35] focus:border-transparent font-light resize-none"
                placeholder="Tell us about your plumbing needs..."
              />
            </div>
            <div className="text-center">
              <Button type="submit" variant="primary">
                Send Message
              </Button>
            </div>
          </form>

          {/* Contact Info - stacked cards on mobile, single row on md+ */}
          <div className="flex flex-col md:flex-row md:flex-nowrap items-stretch md:items-center justify-center gap-4 md:gap-6 lg:gap-10 text-center">
            <div className="flex items-center justify-center gap-3 min-w-0 rounded-xl border border-gray-100 bg-gray-50/80 p-4 shadow-sm md:flex-1 md:border-0 md:bg-transparent md:shadow-none md:p-0">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 text-[#ff6b35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div className="min-w-0">
                <h3 className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wide">Phone</h3>
                <a href="tel:+1234567890" className="text-gray-700 hover:text-[#ff6b35] transition-colors font-light text-sm sm:text-base">
                  (123) 456-7890
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 min-w-0 rounded-xl border border-gray-100 bg-gray-50/80 p-4 shadow-sm md:flex-1 md:border-0 md:bg-transparent md:shadow-none md:p-0">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 text-[#ff6b35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div className="min-w-0">
                <h3 className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wide">Email</h3>
                <a href="mailto:info@abcplumbing.com" className="text-gray-700 hover:text-[#ff6b35] transition-colors font-light text-sm sm:text-base break-all">
                  info@abcplumbing.com
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 min-w-0 rounded-xl border border-gray-100 bg-gray-50/80 p-4 shadow-sm md:flex-1 md:border-0 md:bg-transparent md:shadow-none md:p-0">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 text-[#ff6b35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div className="min-w-0">
                <h3 className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wide">Location</h3>
                <p className="text-gray-700 font-light text-sm sm:text-base">
                  123 Main St, New York, NY 10001
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success modal after form submit */}
      <Modal isOpen={showSuccessModal} onClose={() => setShowSuccessModal(false)} className="w-full max-w-md">
        <div className="p-8 pt-14 text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#ff6b35]/10 flex items-center justify-center">
            <svg className="w-8 h-8 text-[#ff6b35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-light text-gray-900 mb-2">Message sent</h3>
          <p className="text-gray-600 font-light mb-8">
            Thank you for getting in touch. We&apos;ll get back to you soon.
          </p>
          <Button onClick={() => setShowSuccessModal(false)}>Close</Button>
        </div>
      </Modal>
    </section>
  )
}

export default Contact

