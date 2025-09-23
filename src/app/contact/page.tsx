'use client'

import { sendEmail } from '@/app/actions'
import RootLayout from '@/components/RootLayout'
import { EmailData } from '@/shared/types/types'
import { ChangeEvent, FormEvent, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaPhone, FaXTwitter, FaYoutube } from 'react-icons/fa6'

const notify = (message: string) => toast(message, { position: 'top-center' })

export default function Page() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<EmailData>({
    name: '',
    email: '',
    subject: '',
    body: '',
  })

  const handleFormChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.body) {
      setIsSubmitting(false)
      notify('⚠️ Please fill in all fields.')
      return
    }

    setIsSubmitting(true)

    try {
      await sendEmail(formData)
      notify('✅ Message sent successfully!')
      setFormData({
        name: '',
        email: '',
        subject: '',
        body: '',
      })
    } catch (e) {
      notify('An unexpected error occurred.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <RootLayout>
      <div className="py-24">
        <div className="wrapper mx-auto py-5 text-center">
          <h2 className="text-4xl font-bold underline decoration-[#f9af16] decoration-4 underline-offset-8">
            Contact <span className="text-[#f9af16]">Me</span>
          </h2>
          <p className="mx-auto my-0 max-w-[48rem] p-4 text-[1.125rem] font-light text-[#14141499]">
            Have a project in mind or just want to chat about code? Drop me a message, and let&apos;s make things
            happen!
          </p>
        </div>

        <div className="wrapper mx-auto grid grid-cols-[repeat(auto-fit,minmax(min(20rem,100%),1fr))] gap-8">
          <form
            onSubmit={handleFormSubmit}
            className="flex flex-col gap-3 rounded-xl border-1 border-[#f9af16] bg-[floralwhite] p-[1.25rem]">
            <h2 className="flex items-center gap-4 text-2xl font-semibold">
              <FaEnvelope /> Send a Message
            </h2>
            <p>Complete the form and I will contact you as soon as possible.</p>
            <label className="mt-4">Name</label>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              onChange={handleFormChange}
              className="rounded-xl border border-[#ccc6] bg-white px-4 py-3 focus:outline-2 focus:outline-[#f9af16]"
            />
            <label className="mt-4">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              onChange={handleFormChange}
              className="rounded-xl border border-[#ccc6] bg-white px-4 py-3 focus:outline-2 focus:outline-[#f9af16]"
            />
            <label className="mt-4">Subject</label>
            <input
              name="subject"
              type="text"
              placeholder="Your Subject"
              onChange={handleFormChange}
              className="rounded-xl border border-[#ccc6] bg-white px-4 py-3 focus:outline-2 focus:outline-[#f9af16]"
            />
            <label className="mt-4">Message</label>
            <textarea
              name="body"
              placeholder="Your Message"
              rows={8}
              onChange={handleFormChange}
              className="min-h-[150px] max-w-full rounded-xl border-1 border-[#ccc6] bg-white p-4 focus:outline-2 focus:outline-[#f9af16]"></textarea>
            <button
              type="submit"
              className="mt-4 flex items-center justify-center gap-3 rounded-lg bg-[#111] px-8 py-3 font-semibold text-[#f9af16] transition duration-300 ease-in-out hover:cursor-pointer hover:bg-[#f9af16] hover:text-[#111]"
              disabled={isSubmitting}>
              <FaPaperPlane />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          <div className="flex flex-col gap-6">
            <h4 className="text-[clamp(1.5rem,2rem,8vw)] font-bold leading-[1.5lh]">Get in Touch</h4>
            <p className="text-[#141414]">
              I&apos;m currently available to take on new projects, so feel free to send me a message about anything
              that you want to run past me. You can contact anytime at 24/7.
            </p>
            <ul className="flex flex-col gap-2 px-5 py-2 border-l-[0.25rem] border-[#f9af16]">
              <li>
                <a href="tel:+5491165690846" target="_blank" className="flex items-center gap-3 text-[#111]">
                  <FaPhone />
                  +54 (11) 6569-0846
                </a>
              </li>
              <li>
                <a href="mailto:ing.sanders@gmail.com" target="_blank" className="flex items-center gap-3 text-[#111]">
                  <FaEnvelope />
                  ing.sanders@gmail.com
                </a>
              </li>
              <li>
                <a href="https://maps.app.goo.gl/e7AdznMGpiHcBEaS6" target="_blank" className="flex items-center gap-3 text-[#111]">
                  <FaMapMarkerAlt />
                  Buenos Aires, Argentina
                </a>
              </li>
            </ul>
            <h4>Connect we Me</h4>
            <ul className="flex items-center gap-5">
              <li>
                <a href="https://github.com/untalsanders" target="_blank" className="text-2xl">
                  <FaGithub className="transition duration-[0.3s] hover:text-[#b47800]" />
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/untalsanders" target="_blank" className="text-2xl">
                  <FaLinkedin className="transition duration-[0.3s] hover:text-[#b47800]" />
                </a>
              </li>
              <li>
                <a href="https://youtube.com/@untalsanders" target="_blank" className="text-2xl">
                  <FaYoutube className="transition duration-[0.3s] hover:text-[#b47800]" />
                </a>
              </li>
              <li>
                <a href="https://x.com/untalsanders" target="_blank" className="text-2xl">
                  <FaXTwitter className="transition duration-[0.3s] hover:text-[#b47800]" />
                </a>
              </li>
              <li>
                <a href="https://instagram.com/untalsanders" target="_blank" className="text-2xl">
                  <FaInstagram className="transition duration-[0.3s] hover:text-[#b47800]" />
                </a>
              </li>
            </ul>
          </div>

          <Toaster />
        </div>
      </div>
    </RootLayout>
  )
}
