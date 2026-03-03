import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='dark:border-[#3A3A3C] bg-[#FBFBFD] dark:bg-[#0A0A0A] transition-colors duration-300'>
      <div className='max-w-[1152px] mx-auto px-6 py-6'>
        <h2 className='text-8xl font-bold text-[#1D1D1F] dark:text-[#F5F5F7] mb-4 text-center'>DHRUV PANCHAL</h2>
        <div className='flex flex-col md:flex-row justify-between items-center gap-3'>
          <p className='text-sm text-[#86868B] dark:text-[#86868B] text-center'>
            © {currentYear} Dhruv Panchal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
