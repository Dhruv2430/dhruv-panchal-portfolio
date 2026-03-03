import React from 'react'
import { Code2, Server, Database, Cloud, Palette, Terminal, Boxes, Cpu, GitBranch, FileCode, Figma, Image, Send, FileText, CheckSquare } from 'lucide-react'
import Title from './Title'

const Skills = () => {
  const skills = [
    { name: 'React', icon: Code2 },
    { name: 'JavaScript', icon: Code2 },
    { name: 'TypeScript', icon: FileCode },
    { name: 'Next.js', icon: Code2 },
    { name: 'Tailwind CSS', icon: Palette },
    { name: 'Node.js', icon: Server },
    { name: 'MongoDB', icon: Database },
    { name: 'PostgreSQL', icon: Database },
    { name: 'Express', icon: Server },
    { name: 'Git', icon: GitBranch },
    { name: 'Docker', icon: Boxes },
    { name: 'AWS', icon: Cloud },
    { name: 'Python', icon: Terminal },
    { name: 'C', icon: Terminal },
    { name: 'Linux', icon: Cpu },
    { name: 'Figma', icon: Figma },
    { name: 'Canva', icon: Image },
    { name: 'Postman', icon: Send },
    { name: 'Notion', icon: FileText },
    { name: 'Jira', icon: CheckSquare },
  ]

  return (
    <section id='skills' className='py-24 bg-[#FBFBFD] dark:bg-[#0A0A0A] transition-colors duration-300'>
      <div className='max-w-[1152px] mx-auto px-6'>
        <Title title="Skills & Technologies" subtitle="Tools I Work With" />
        
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6'>
          {skills.map((skill) => {
            const Icon = skill.icon
            return (
              <div 
                key={skill.name} 
                className='bg-[#FFFFFF] dark:bg-[#1C1C1E] border border-[#D2D2D7] dark:border-[#3A3A3C] rounded-2xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.5)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center'
              >
                <Icon className='w-8 h-8 text-[#0071E3] dark:text-[#0A84FF] mb-3 transition-colors duration-300' />
                <span className='text-sm font-medium text-[#1D1D1F] dark:text-[#F5F5F7] text-center transition-colors duration-300'>{skill.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
