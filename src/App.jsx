import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Skills from './components/Skills'
import Experience from './components/Experience'
import EducationVolunteer from './components/EducationVolunteer'
import DockNav from './components/DockNav'
import LoadingScreen from './components/LoadingScreen'
import { ThemeProvider } from './context/ThemeContext'

const App = () => {
  return (
    <ThemeProvider>
    <div className='min-h-screen bg-[#FBFBFD] dark:bg-[#0A0A0A] text-[#1D1D1F] dark:text-[#F5F5F7] transition-colors duration-300'>
      <div className='pointer-events-none fixed top-0 bottom-0 left-8 xl:left-24 w-px bg-[#121212] dark:bg-[#2C2C2E] hidden lg:block transition-colors duration-300' />
      <div className='pointer-events-none fixed top-0 bottom-0 right-8 xl:right-24 w-px bg-[#121212] dark:bg-[#2C2C2E] hidden lg:block transition-colors duration-300' />
      <main>
        <LoadingScreen/>
        <Hero />
        <About />
        <Experience />
        <EducationVolunteer />
        <Skills />
        <Project />
        <Contact />
      </main>
      <Footer />
      <DockNav/>
    </div>
    </ThemeProvider>
  )
}

export default App