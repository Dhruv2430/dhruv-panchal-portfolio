import React from 'react'
import ShowImage from './ShowImage'
import Title from './Title'

const About = () => {
  return (
    <>
      <section id='about' className='py-24 bg-[#FBFBFD] dark:bg-[#0A0A0A] transition-colors duration-300'>
        <div className='max-w-[1152px] mx-auto px-6'>
          <Title title="Building useful products with clean engineering" subtitle="About Me" />
          <p className='max-w-4xl text-lg leading-relaxed text-[#424245] dark:text-[#A1A1A6] mb-8 transition-colors duration-300'>
            I am a developer focused on shipping production-ready web applications with dependable performance and
            maintainable code. My workflow combines UI craftsmanship with backend reliability, so ideas move from
            concept to deployment quickly. I enjoy solving practical problems, improving existing systems, and
            collaborating with teams that care about quality.
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
            <div className='bg-[#FFFFFF] dark:bg-[#1C1C1E] border border-[#D2D2D7] dark:border-[#3A3A3C] rounded-2xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.5)] transition-all duration-300'>
              <p className='text-3xl font-bold text-[#1D1D1F] dark:text-[#F5F5F7] mb-2 transition-colors duration-300'>1+ Years</p>
              <p className='text-sm text-[#424245] dark:text-[#A1A1A6] transition-colors duration-300'>Hands-on development experience</p>
            </div>
           
            <div className='bg-[#FFFFFF] dark:bg-[#1C1C1E] border border-[#D2D2D7] dark:border-[#3A3A3C] rounded-2xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.5)] transition-all duration-300'>
              <p className='text-3xl font-bold text-[#1D1D1F] dark:text-[#F5F5F7] mb-2 transition-colors duration-300'>Full Stack + Cloud</p>
              <p className='text-sm text-[#424245] dark:text-[#A1A1A6] transition-colors duration-300'>Frontend, backend, and deployment</p>
            </div>
          </div>
        </div>
      </section>
      <ShowImage />
    </>
  )
}

export default About
