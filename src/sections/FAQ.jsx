import React, { useState } from 'react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'Do you offer emergency plumbing services?',
      answer: 'Yes, we provide 24/7 emergency plumbing services. Our team is available around the clock to handle urgent plumbing issues, including burst pipes, severe leaks, and water heater failures.'
    },
    {
      question: 'Are your plumbers licensed and insured?',
      answer: 'Absolutely. All our plumbers are fully licensed, bonded, and insured. We maintain the highest standards of professionalism and ensure all work meets local building codes.'
    },
    {
      question: 'What are your service areas?',
      answer: 'We serve the greater New York metropolitan area, including Manhattan, Brooklyn, Queens, and surrounding areas. Contact us to confirm if we service your location.'
    },
    {
      question: 'Do you provide free estimates?',
      answer: 'Yes, we offer free estimates for all plumbing projects. Our team will assess your needs and provide a detailed, transparent quote with no hidden fees.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, checks, and all major credit cards. We also offer flexible payment plans for larger projects. Payment is due upon completion of work.'
    },
    {
      question: 'How quickly can you respond to service calls?',
      answer: 'For emergency calls, we aim to arrive within 60 minutes. For scheduled appointments, we provide time windows and will call ahead to confirm our arrival time.'
    }
  ]

  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-center gap-4 md:gap-6 mb-12 md:mb-16">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#ff6b35]/30 to-[#ff6b35]/60"></div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-center">
            <span className="text-black">Frequently Asked</span> <span className="text-[#ff6b35]">Questions</span>
          </h2>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#ff6b35]/30 to-[#ff6b35]/60"></div>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 md:px-6 md:py-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6b35] focus-visible:ring-offset-2 rounded-xl"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-base md:text-lg font-medium text-gray-800 pr-2">
                  {faq.question}
                </h3>
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-[#ff6b35] transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                  aria-hidden
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-200 ease-out ${openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
              >
                <div className="overflow-hidden">
                  <p className="text-gray-600 font-light leading-relaxed px-5 pb-4 md:px-6 md:pb-5 pt-0 border-t border-gray-50">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
