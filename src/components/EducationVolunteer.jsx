import React from 'react'
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react'
import Title from './Title'

const logoModules = import.meta.glob('../assets/logo/*', {
  eager: true,
  import: 'default'
})

const EducationVolunteer = () => {
  const education = [
    {
      degree: 'Computer Engineering',
      institution: 'Silver Oak University',
      location: 'Ahmedabad, Gujarat',
      period: '2023 - 2027',
      gpa: '8.15',
      achievements: [
        
      ]
    },
    {
      degree: 'H.S.C 12 Science Board',
      institution: 'M.Y. High School ',
      location: 'Dahod, Gujarat',
      period: '2021 - 2023',
      gpa: 'A',
      achievements: [
      
      ]
    }
  ]

  const contributions = Object.entries(logoModules)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, logo]) => ({
      logo
    }))



  return (
    <section id='education' className='py-24 bg-[#FBFBFD] dark:bg-[#0A0A0A] transition-colors duration-300'>
      <div className='max-w-[1152px] mx-auto px-6'>
        <Title title="Education & Contributions" subtitle="Academic Background & Community Impact" />

        <div className='space-y-6 mb-12'>
          {education.map((edu, index) => (
            <div key={index} className='bg-[#FFFFFF] dark:bg-[#1C1C1E] border border-[#D2D2D7] dark:border-[#3A3A3C] rounded-2xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.5)] transition-all duration-300'>
              <div className='flex items-start gap-4 mb-4'>
                <div className='w-12 h-12 bg-[#0071E3]/10 dark:bg-[#0A84FF]/20 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300'>
                  <GraduationCap className='w-6 h-6 text-[#0071E3] dark:text-[#0A84FF] transition-colors duration-300' />
                </div>
                <div className='flex-1'>
                  <div className='flex items-start justify-between gap-4 mb-2'>
                    <h3 className='text-2xl font-semibold text-[#1D1D1F] dark:text-[#F5F5F7] transition-colors duration-300'>{edu.degree}</h3>
                    <span className='px-3 py-1 bg-[#FBFBFD] dark:bg-[#2C2C2E] text-[#1D1D1F] dark:text-[#F5F5F7] text-sm font-medium rounded-full transition-colors duration-300'>{edu.gpa}</span>
                  </div>
                  <p className='text-lg text-[#424245] dark:text-[#A1A1A6] font-medium mb-3 transition-colors duration-300'>{edu.institution}</p>
                  <div className='flex flex-wrap gap-4 text-sm text-[#424245] dark:text-[#A1A1A6] transition-colors duration-300'>
                    <div className='flex items-center gap-2'>
                      <MapPin className='w-4 h-4' />
                      <span>{edu.location}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Calendar className='w-4 h-4' />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='ml-16 space-y-2'>
                {edu.achievements.map((achievement, idx) => (
                  <div key={idx} className='flex items-start gap-3'>
                    <Award className='w-4 h-4 text-[#0071E3] dark:text-[#0A84FF] mt-0.5 flex-shrink-0 transition-colors duration-300' />
                    <span className='text-[#1D1D1F] dark:text-[#F5F5F7] text-sm transition-colors duration-300'>{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Title title="Volunteer & Contributions" subtitle="Community Impact" />
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {contributions.map((item, index) => (
            <div key={index} className='bg-[#FFFFFF] dark:bg-[#1C1C1E] border border-[#D2D2D7] dark:border-[#3A3A3C] rounded-2xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.5)] transition-all duration-300 flex items-center justify-center'>
              <div className='w-28 h-28 bg-white rounded-2xl flex items-center justify-center p-3 shadow-[0_8px_24px_rgba(0,0,0,0.14)] ring-1 ring-[#0071E3]/20 transition-all duration-300'>
                <img src={item.logo} alt={`Contribution logo ${index + 1}`} className='w-full h-full object-contain rounded-lg' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EducationVolunteer
