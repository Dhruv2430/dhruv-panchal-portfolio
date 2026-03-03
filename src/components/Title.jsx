import React from 'react'

const Title = ({title, subtitle}) => {
  return (
    <div className='mb-16'>
      <p className='text-sm font-semibold tracking-[0.15em] uppercase text-[#86868B] dark:text-[#98989D] mb-3 transition-colors duration-300'>{subtitle}</p>
      <h2 className='text-4xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] leading-[1.2] transition-colors duration-300'>{title}</h2>
    </div>
  )
}

export default Title
