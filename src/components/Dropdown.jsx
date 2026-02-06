import { useState, useEffect, useRef } from 'react'

const Dropdown = ({
  label,
  href,
  items = [],
  desktopBehavior = 'hover', // 'hover' or 'click'
  mobileBehavior = 'click', // 'click' only
  closeDelay = 150,
  className = '',
  triggerClassName = '',
  dropdownClassName = '',
  itemClassName = '',
  showArrow = true,
  onItemClick,
  onToggle,
  isControlled,
  isOpen: controlledIsOpen,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)
  const closeTimeoutRef = useRef(null)

  // Use controlled or uncontrolled state
  const isDropdownOpen = isControlled ? controlledIsOpen : isOpen
  const setIsDropdownOpen = isControlled && onToggle ? onToggle : setIsOpen

  // Close dropdown when clicking outside (desktop only)
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Only handle desktop clicks (screens wider than lg breakpoint)
      if (window.innerWidth >= 1024 && desktopBehavior === 'click') {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsDropdownOpen(false)
        }
      }
    }

    if (isDropdownOpen && desktopBehavior === 'click') {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current)
      }
    }
  }, [isDropdownOpen, desktopBehavior, setIsDropdownOpen])

  const handleMouseEnter = () => {
    if (desktopBehavior === 'hover' && window.innerWidth >= 1024) {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current)
        closeTimeoutRef.current = null
      }
      setIsDropdownOpen(true)
    }
  }

  const handleMouseLeave = () => {
    if (desktopBehavior === 'hover' && window.innerWidth >= 1024) {
      closeTimeoutRef.current = setTimeout(() => {
        setIsDropdownOpen(false)
      }, closeDelay)
    }
  }

  const handleToggle = (e) => {
    if (desktopBehavior === 'click' && window.innerWidth >= 1024) {
      e.preventDefault()
      setIsDropdownOpen(!isDropdownOpen)
    } else if (mobileBehavior === 'click' && window.innerWidth < 1024) {
      e.preventDefault()
      setIsDropdownOpen(!isDropdownOpen)
    }
  }

  const handleItemClick = (item, index) => {
    if (onItemClick) {
      onItemClick(item, index)
    } else {
      setIsDropdownOpen(false)
    }
  }

  // Desktop dropdown
  const DesktopDropdown = () => (
    <div
      ref={dropdownRef}
      className={`relative ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {desktopBehavior === 'click' ? (
        <button
          onClick={handleToggle}
          className={`${triggerClassName} flex items-center gap-1`}
        >
          <span>{label}</span>
          {showArrow && (
            <svg
              className="w-4 h-4 transform transition-transform"
              style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          )}
        </button>
      ) : (
        <a
          href={href}
          className={`${triggerClassName} flex items-center gap-1`}
        >
          <span>{label}</span>
          {showArrow && (
            <svg
              className="w-4 h-4 transform transition-transform"
              style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          )}
        </a>
      )}
      {isDropdownOpen && (
        <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-56 bg-white border border-gray-200 shadow-lg z-50 py-2 ${dropdownClassName}`}>
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href || href}
              className={`block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#ff6b35] transition-colors font-light ${itemClassName}`}
              onClick={() => handleItemClick(item, index)}
            >
              {item.name || item.label || item}
            </a>
          ))}
        </div>
      )}
    </div>
  )

  // Mobile dropdown
  const MobileDropdown = () => (
    <div className={className}>
      <button
        className={`w-full flex items-center justify-between ${triggerClassName}`}
        onClick={handleToggle}
      >
        <span>{label}</span>
        {showArrow && (
          <svg
            className="w-4 h-4 transform transition-transform"
            style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </button>
      {isDropdownOpen && (
        <div className={`pl-4 pb-2 ${dropdownClassName}`}>
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href || href}
              className={`block py-2 text-gray-600 hover:text-[#ff6b35] transition-colors font-light ${itemClassName}`}
              onClick={() => handleItemClick(item, index)}
            >
              {item.name || item.label || item}
            </a>
          ))}
        </div>
      )}
    </div>
  )

  return (
    <>
      <div className="hidden lg:block">
        <DesktopDropdown />
      </div>
      <div className="lg:hidden">
        <MobileDropdown />
      </div>
    </>
  )
}

export default Dropdown

