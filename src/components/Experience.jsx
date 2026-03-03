import React from 'react'
import { Briefcase, Calendar, MapPin } from 'lucide-react'
import Title from './Title'

const Experience = () => {
  const experiences = [
    {
      role: 'Full Stack Developer Intern',
      company: 'Kaizenth Teachology LLP',
      location: 'Ahmedabad',
      period: 'sept 2025 - Dec 2025 4 mo',
      current: false,
      description: 'Building scalable web applications using MERN stack and deploying on AWS cloud infrastructure.',
      achievements: [
        'Developed 10+ responsive web applications',
        'Reduced API response time by 40%',
        'Implemented CI/CD pipelines'
      ]
    },
    {
      role: 'Tech Event Intern ',
      company: 'Laracon India',
      location: 'Ahmedabad',
      period: 'Jan 2026 - Jan 2026 1mo',
      current: false,
      description: 'As an Event Intern at Laracon India, I supported the on-ground execution of a large-scale tech conference, ensuring smooth coordination across sessions and activities. I worked closely with volunteers to manage event flow and assisted speakers with technical setup and stage requirements. In addition to operational responsibilities,',
      achievements: [
        
      ]
    }
  ]

  return (
    <section id='experience' className='py-24 bg-[#FBFBFD] dark:bg-[#0A0A0A] transition-colors duration-300'>
      <div className='max-w-[1152px] mx-auto px-6'>
        <Title title="Work Experience" subtitle="Professional Journey" />

        <div className='space-y-8'>
          {experiences.map((exp, index) => (
            <div key={index} className='bg-[#FFFFFF] dark:bg-[#1C1C1E] border border-[#D2D2D7] dark:border-[#3A3A3C] rounded-2xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.5)] transition-all duration-300'>
              <div className='flex flex-wrap items-start justify-between gap-4 mb-4'>
                <div className='flex-1'>
                  <div className='flex items-center gap-3 mb-3'>
                    <h3 className='text-2xl font-semibold text-[#1D1D1F] dark:text-[#F5F5F7] transition-colors duration-300'>{exp.role}</h3>
                    {exp.current && (
                      <span className='px-3 py-1 bg-[#0071E3]/10 dark:bg-[#0A84FF]/20 text-[#0071E3] dark:text-[#0A84FF] text-xs font-semibold rounded-full transition-colors duration-300'>Current</span>
                    )}
                  </div>
                  <div className='flex flex-wrap items-center gap-4 text-[#424245] dark:text-[#A1A1A6] transition-colors duration-300'>
                    <div className='flex items-center gap-2'>
                      <Briefcase className='w-4 h-4' />
                      <span className='font-medium'>{exp.company}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <MapPin className='w-4 h-4' />
                      <span className='text-sm'>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <div className='flex items-center gap-2 px-4 py-2 bg-[#FBFBFD] dark:bg-[#2C2C2E] rounded-xl transition-colors duration-300'>
                  <Calendar className='w-4 h-4 text-[#424245] dark:text-[#A1A1A6] transition-colors duration-300' />
                  <span className='text-sm font-medium text-[#1D1D1F] dark:text-[#F5F5F7] transition-colors duration-300'>{exp.period}</span>
                </div>
              </div>

              <p className='text-[#424245] dark:text-[#A1A1A6] leading-relaxed mb-6 transition-colors duration-300'>{exp.description}</p>

              <div className='space-y-3'>
                {exp.achievements.map((achievement, idx) => (
                  <div key={idx} className='flex items-start gap-3'>
                    <div className='w-6 h-6 rounded-full bg-[#0071E3]/10 dark:bg-[#0A84FF]/20 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-300'>
                      <div className='w-2 h-2 rounded-full bg-[#0071E3] dark:bg-[#0A84FF] transition-colors duration-300' />
                    </div>
                    <span className='text-[#1D1D1F] dark:text-[#F5F5F7] leading-relaxed transition-colors duration-300'>{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
