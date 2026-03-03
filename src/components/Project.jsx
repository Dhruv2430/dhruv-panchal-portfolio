import React from 'react'
import { projectsData } from '../assets/assets'
import Title from './Title'

const Project = () => {
  return (
    <section id='projects' className='py-24 bg-[#FBFBFD] dark:bg-[#0A0A0A] transition-colors duration-300'>
      <div className='max-w-[1152px] mx-auto px-6'>
        <Title title="Featured Projects" subtitle="Recent Work" />

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {projectsData.map((project) => (
            <article
              key={project.id}
              className='bg-[#FFFFFF] dark:bg-[#1C1C1E] border border-[#D2D2D7] dark:border-[#3A3A3C] rounded-2xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.5)] transition-all duration-300'
            >
              <div className={`h-40 bg-gradient-to-br ${project.accent} p-6 flex flex-col justify-between`}>
                <span className='w-fit text-xs font-semibold px-3 py-1 rounded-full bg-white/20 text-white border border-white/30'>
                  {project.badge}
                </span>
                <h3 className='text-2xl font-semibold text-white tracking-tight'>{project.title}</h3>
              </div>

              <div className='p-6'>
                <p className='text-sm leading-relaxed text-[#424245] dark:text-[#A1A1A6] mb-4 transition-colors duration-300'>{project.description}</p>

                <div className='flex flex-wrap gap-2 mb-6'>
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className='text-xs font-medium px-3 py-1 rounded-full bg-[#FBFBFD] dark:bg-[#2C2C2E] text-[#1D1D1F] dark:text-[#F5F5F7] transition-colors duration-300'
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className='flex gap-3'>
                  <a
                    href={project.liveLink}
                    target={project.liveLink !== '#' ? '_blank' : undefined}
                    rel={project.liveLink !== '#' ? 'noopener noreferrer' : undefined}
                    aria-disabled={project.liveLink === '#'}
                    className={`flex-1 text-center text-sm font-medium px-4 py-3 rounded-xl transition-all duration-300 ${
                      project.liveLink === '#'
                        ? 'bg-[#D2D2D7] dark:bg-[#3A3A3C] text-[#86868B] dark:text-[#636366] cursor-not-allowed pointer-events-none'
                        : 'bg-[#0071E3] dark:bg-[#0A84FF] text-white hover:bg-[#0077ED] dark:hover:bg-[#409CFF]'
                    }`}
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target={project.codeLink !== '#' ? '_blank' : undefined}
                    rel={project.codeLink !== '#' ? 'noopener noreferrer' : undefined}
                    aria-disabled={project.codeLink === '#'}
                    className={`flex-1 text-center text-sm font-medium px-4 py-3 rounded-xl border-2 transition-all duration-300 ${
                      project.codeLink === '#'
                        ? 'border-[#D2D2D7] dark:border-[#3A3A3C] text-[#86868B] dark:text-[#636366] cursor-not-allowed pointer-events-none'
                        : 'border-[#D2D2D7] dark:border-[#3A3A3C] text-[#1D1D1F] dark:text-[#F5F5F7] hover:border-[#0071E3] dark:hover:border-[#0A84FF] hover:text-[#0071E3] dark:hover:text-[#0A84FF]'
                    }`}
                  >
                    Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project
