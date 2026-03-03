import React, { useState } from 'react'
import Title from './Title'

const Contact = () => {
  const contactEmail = 'dhruvpanchal.dev@gmail.com'

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const subject = encodeURIComponent(formData.subject || 'Portfolio Contact')
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`
  }

  return (
    <section id='contact' className='py-24 bg-[#FBFBFD] dark:bg-[#0A0A0A] transition-colors duration-300'>
      <div className='max-w-[1152px] mx-auto px-6'>
        <Title title="Let's Work Together" subtitle="Get In Touch" />
        
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          <div>
            <p className='text-lg leading-relaxed text-[#424245] dark:text-[#A1A1A6] mb-8 transition-colors duration-300'>
              Have a project idea or want to collaborate? Share your details and I will get back to you soon.
            </p>

            <div className='space-y-6'>
              <div className='bg-[#FFFFFF] dark:bg-[#1C1C1E] border border-[#D2D2D7] dark:border-[#3A3A3C] rounded-2xl p-6 transition-all duration-300'>
                <p className='text-xs font-semibold tracking-[0.15em] uppercase text-[#86868B] dark:text-[#98989D] mb-2 transition-colors duration-300'>Email</p>
                <a
                  href={`mailto:${contactEmail}`}
                  className='text-[#1D1D1F] dark:text-[#F5F5F7] font-medium hover:text-[#0071E3] dark:hover:text-[#0A84FF] transition-colors duration-300'
                >
                  {contactEmail}
                </a>
              </div>
              <div className='bg-[#FFFFFF] dark:bg-[#1C1C1E] border border-[#D2D2D7] dark:border-[#3A3A3C] rounded-2xl p-6 transition-all duration-300'>
                <p className='text-xs font-semibold tracking-[0.15em] uppercase text-[#86868B] dark:text-[#98989D] mb-2 transition-colors duration-300'>Phone</p>
                <a
                  href='tel:+919000000000'
                  className='text-[#1D1D1F] dark:text-[#F5F5F7] font-medium hover:text-[#0071E3] dark:hover:text-[#0A84FF] transition-colors duration-300'
                >
                  +91 90000 00000
                </a>
              </div>
              <div className='bg-[#FFFFFF] dark:bg-[#1C1C1E] border border-[#D2D2D7] dark:border-[#3A3A3C] rounded-2xl p-6 transition-all duration-300'>
                <p className='text-xs font-semibold tracking-[0.15em] uppercase text-[#86868B] dark:text-[#98989D] mb-2 transition-colors duration-300'>Location</p>
                <p className='text-[#1D1D1F] dark:text-[#F5F5F7] font-medium transition-colors duration-300'>Ahmedabad, India</p>
              </div>
            </div>
          </div>

          <form className='space-y-6' onSubmit={handleSubmit}>
            <div>
              <label htmlFor='name' className='block text-sm font-medium text-[#1D1D1F] dark:text-[#F5F5F7] mb-2 transition-colors duration-300'>
                Full Name
              </label>
              <input
                id='name'
                name='name'
                type='text'
                value={formData.name}
                onChange={handleChange}
                placeholder='Enter your name'
                required
                className='w-full px-4 py-3 border border-[#D2D2D7] dark:border-[#3A3A3C] rounded-xl text-[#1D1D1F] dark:text-[#F5F5F7] bg-white dark:bg-[#1C1C1E] outline-none focus:border-[#0071E3] dark:focus:border-[#0A84FF] transition-all duration-300 placeholder:text-[#86868B] dark:placeholder:text-[#636366]'
              />
            </div>

            <div>
              <label htmlFor='email' className='block text-sm font-medium text-[#1D1D1F] dark:text-[#F5F5F7] mb-2 transition-colors duration-300'>
                Email Address
              </label>
              <input
                id='email'
                name='email'
                type='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='Enter your email'
                required
                className='w-full px-4 py-3 border border-[#D2D2D7] dark:border-[#3A3A3C] rounded-xl text-[#1D1D1F] dark:text-[#F5F5F7] bg-white dark:bg-[#1C1C1E] outline-none focus:border-[#0071E3] dark:focus:border-[#0A84FF] transition-all duration-300 placeholder:text-[#86868B] dark:placeholder:text-[#636366]'
              />
            </div>

            <div>
              <label htmlFor='subject' className='block text-sm font-medium text-[#1D1D1F] dark:text-[#F5F5F7] mb-2 transition-colors duration-300'>
                Subject
              </label>
              <input
                id='subject'
                name='subject'
                type='text'
                value={formData.subject}
                onChange={handleChange}
                placeholder='Project or collaboration'
                required
                className='w-full px-4 py-3 border border-[#D2D2D7] dark:border-[#3A3A3C] rounded-xl text-[#1D1D1F] dark:text-[#F5F5F7] bg-white dark:bg-[#1C1C1E] outline-none focus:border-[#0071E3] dark:focus:border-[#0A84FF] transition-all duration-300 placeholder:text-[#86868B] dark:placeholder:text-[#636366]'
              />
            </div>

            <div>
              <label htmlFor='message' className='block text-sm font-medium text-[#1D1D1F] dark:text-[#F5F5F7] mb-2 transition-colors duration-300'>
                Message
              </label>
              <textarea
                id='message'
                name='message'
                rows='6'
                value={formData.message}
                onChange={handleChange}
                placeholder='Write your message here...'
                required
                className='w-full px-4 py-3 border border-[#D2D2D7] dark:border-[#3A3A3C] rounded-xl text-[#1D1D1F] dark:text-[#F5F5F7] bg-white dark:bg-[#1C1C1E] outline-none resize-none focus:border-[#0071E3] dark:focus:border-[#0A84FF] transition-all duration-300 placeholder:text-[#86868B] dark:placeholder:text-[#636366]'
              />
            </div>

            <button
              type='submit'
              className='w-full px-6 py-3 bg-[#0071E3] dark:bg-[#0A84FF] text-white rounded-xl font-medium hover:bg-[#0077ED] dark:hover:bg-[#409CFF] transition-all duration-300'
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
