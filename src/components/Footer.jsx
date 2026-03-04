import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='bg-[#FBFBFD] dark:bg-[#0A0A0A] border-t border-[#E8E8ED] dark:border-[#1C1C1E] transition-colors duration-300'>
      <div className='max-w-[1152px] mx-auto px-6 py-12'>

        {/* Large name with refined styling */}
        <div className='relative overflow-hidden mb-10'>
          <h2
            className='font-black text-[#1D1D1F] dark:text-[#F5F5F7] leading-none tracking-tighter select-none'
            style={{
              fontSize: 'clamp(3.5rem, 10vw, 7.5rem)',
              letterSpacing: '-0.03em',
            }}
          >
            DHRUV
            <span
              className='ml-4 text-transparent'
              style={{
                WebkitTextStroke: '1.5px',
                WebkitTextStrokeColor: 'currentColor',
                opacity: 0.25,
              }}
            >
              PANCHAL
            </span>
          </h2>

          {/* Subtle accent line */}
          <div
            className='mt-4 h-px w-full'
            style={{
              background: 'linear-gradient(to right, #1D1D1F 0%, transparent 60%)',
              opacity: 0.12,
            }}
          />
        </div>

        {/* Bottom row */}
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3'>
          <p className='text-xs tracking-widest uppercase text-[#86868B] font-medium'>
            © {currentYear} Dhruv Panchal
          </p>
          <p className='text-xs text-[#AEAEB2] dark:text-[#636366] tracking-wide'>
            All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer