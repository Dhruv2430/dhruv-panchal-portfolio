import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <section id='home' className='py-24 bg-[#FBFBFD] dark:bg-[#0A0A0A] transition-colors duration-300'>
      <div className='max-w-[1152px] mx-auto px-6'>
        <div className='grid grid-cols-1 lg:grid-cols-[240px,1fr] items-center gap-12'>
          <div className='flex justify-center lg:justify-start'>
            <img
              className='w-60 h-60 rounded-full object-cover border-4 border-white dark:border-[#2C2C2E] shadow-[0_8px_24px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.5)] transition-all duration-300'
              src={assets.mi}
              alt='Portrait of Dhruv Panchal'
            />
          </div>
          <div>
            <p className='text-sm font-semibold tracking-[0.15em] uppercase text-[#86868B] dark:text-[#98989D] mb-3 transition-colors duration-300'>Full Stack Developer</p>
            <h1 className='text-[56px] font-bold tracking-tight leading-[1.1] text-[#1D1D1F] dark:text-[#F5F5F7] mb-4 transition-colors duration-300'>
              Dhruv Panchal
            </h1>
            <h2 className='text-3xl font-semibold text-[#424245] dark:text-[#A1A1A6] mb-6 transition-colors duration-300'>
              Create, Build, and Deploy Modern Web Products
            </h2>
            <p className='max-w-2xl text-lg leading-relaxed text-[#424245] dark:text-[#A1A1A6] mb-8 transition-colors duration-300'>
              I design and ship scalable web experiences with clean architecture, fast performance, and
              user-focused interfaces.
            </p>
            <div className='flex flex-wrap gap-4'>
              <a
                href='#projects'
                className='px-6 py-3 bg-[#0071E3] dark:bg-[#0A84FF] text-white rounded-xl font-medium hover:bg-[#0077ED] dark:hover:bg-[#409CFF] transition-all duration-300'
              >
                View Projects
              </a>
              <a
                href='#contact'
                className='px-6 py-3 border-2 border-[#D2D2D7] dark:border-[#3A3A3C] text-[#1D1D1F] dark:text-[#F5F5F7] rounded-xl font-medium hover:border-[#0071E3] dark:hover:border-[#0A84FF] hover:text-[#0071E3] dark:hover:text-[#0A84FF] transition-all duration-300'
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
