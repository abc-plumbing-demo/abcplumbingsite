import React, { useState } from 'react'
import Button from '../components/Button'
import Dropdown from '../components/Dropdown'

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services', isDropdown: true },
    { name: 'Projects', href: '#projects' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' }
  ]

  const servicesItems = [
    { name: 'Emergency Repairs', href: '#services' },
    { name: 'Drain Cleaning', href: '#services' },
    { name: 'Water Heater', href: '#services' },
    { name: 'Pipe Installation', href: '#services' },
    { name: 'Leak Detection', href: '#services' },
    { name: 'Bathroom Remodel', href: '#services' }
  ]

  const handleServiceItemClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-light text-[#ff6b35]">
              ABC <span className="text-black">Plumbing</span>
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-8 flex-1 justify-center">
            {navItems.map((item) => 
              item.isDropdown ? (
                <Dropdown
                  key={item.name}
                  label={item.name}
                  href={item.href}
                  items={servicesItems}
                  desktopBehavior="hover"
                  mobileBehavior="click"
                  triggerClassName="text-gray-700 hover:text-[#ff6b35] transition-colors font-light text-sm uppercase tracking-wide"
                  itemClassName="text-sm uppercase tracking-wide"
                />
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-[#ff6b35] transition-colors font-light text-sm uppercase tracking-wide"
                >
                  {item.name}
                </a>
              )
            )}
          </div>

          <div className="hidden lg:block">
            <Button onClick={() => window.location.href = '#contact'}>
              Get Quote
            </Button>
          </div>

          <button
            className="lg:hidden text-gray-700 hover:text-[#ff6b35] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => 
                item.isDropdown ? (
                  <Dropdown
                    key={item.name}
                    label={item.name}
                    href={item.href}
                    items={servicesItems}
                    desktopBehavior="hover"
                    mobileBehavior="click"
                    triggerClassName="text-gray-700 hover:text-[#ff6b35] transition-colors font-light text-sm uppercase tracking-wide py-2"
                    itemClassName="text-sm uppercase tracking-wide"
                    onItemClick={handleServiceItemClick}
                  />
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-[#ff6b35] transition-colors font-light text-sm uppercase tracking-wide py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              )}
              <div className="pt-2">
                <Button onClick={() => { window.location.href = '#contact'; setIsMobileMenuOpen(false); }}>
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
