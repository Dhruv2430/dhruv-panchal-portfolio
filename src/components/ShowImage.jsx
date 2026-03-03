import React from 'react'
import { assets } from '../assets/assets'

const ShowImage = () => {
  const images = [
    {
      src: assets.mi,
      title: 'Portrait',
      cardClass: 'lg:col-span-4 lg:row-span-4',
      objectClass: 'object-center',
    },
    {
      src: assets.mi3,
      title: 'Event Stage',
      cardClass: 'lg:col-span-8 lg:row-span-4',
      objectClass: 'object-center',
    },
    {
      src: assets.mi5,
      title: 'Speaking Session',
      cardClass: 'lg:col-span-4 lg:row-span-3',
      objectClass: 'object-center',
    },
    {
      src: assets.mi4,
      title: 'Conference Frame',
      cardClass: 'lg:col-span-4 lg:row-span-3',
      objectClass: 'object-center',
    },
    {
      src: assets.mi1,
      title: 'Street Night',
      cardClass: 'lg:col-span-4 lg:row-span-3',
      objectClass: 'object-top',
    },
  ]

  return (
    <div className='pb-16 sm:pb-20 lg:pb-24 bg-[#FBFBFD] dark:bg-neutral-900 transition-colors duration-300'>
      <div className='max-w-6xl mx-auto px-5 sm:px-6 lg:px-8'>
        <div className='rounded-[1.75rem] border border-[#D2D2D7] dark:border-neutral-700 bg-[#FFFFFF] dark:bg-neutral-800 p-4 sm:p-6 transition-colors duration-300'>
          <div className='mb-5 sm:mb-6 flex items-end justify-between gap-4'>
            <h2 className='text-3xl font-medium tracking-tight text-[#1D1D1F] dark:text-white transition-colors duration-300'>Gallery</h2>
            <p className='text-sm text-[#86868B] dark:text-neutral-400 transition-colors duration-300'>Selected moments</p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 lg:auto-rows-[70px] gap-4 sm:gap-5'>
            {images.map((image, index) => (
              <div
                key={index}
                className={`${image.cardClass} group relative h-64 sm:h-72 lg:h-auto overflow-hidden rounded-2xl border border-[#D2D2D7] dark:border-neutral-700 bg-[#FFFFFF] dark:bg-neutral-700 shadow-[0_10px_24px_rgba(15,23,42,0.10)] dark:shadow-[0_10px_24px_rgba(0,0,0,0.3)] transition-colors duration-300`}
              >
                <img
                  className={`h-full w-full object-cover ${image.objectClass} transition-transform duration-500 group-hover:scale-[1.04]`}
                  src={image.src}
                  alt={image.title}
                />
                <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-transparent opacity-80' />
                <p className='absolute left-4 bottom-3 text-xs font-medium tracking-[0.12em] text-white/95 uppercase'>
                  {image.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowImage
