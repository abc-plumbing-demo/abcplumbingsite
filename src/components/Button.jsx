import React from 'react'

const Button = ({ children, variant = 'primary', className = '', onClick, type = 'button' }) => {
  const baseClasses = 'px-6 py-3 rounded-lg font-light transition-all duration-300 text-sm uppercase tracking-wide'
  
  const variants = {
    primary: 'bg-[#ff6b35] text-white hover:bg-[#e55a2b] hover:shadow-lg',
    secondary: 'bg-transparent border-2 border-[#ff6b35] text-[#ff6b35] hover:bg-[#ff6b35] hover:text-white',
    outline: 'bg-white text-[#ff6b35] border-2 border-white hover:bg-transparent hover:text-white'
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  )
}

export default Button

