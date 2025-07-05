'use client'

import { sendEmail } from '@/app/actions'
import { EmailData } from '@/app/types'
import styles from '@/styles/Contact.module.css'
import { ChangeEvent, FormEvent, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaPhone, FaXTwitter, FaYoutube } from 'react-icons/fa6'

const notify = (message: string) =>
    toast(message, {
        position: 'top-center',
    })

export default function Contact() {
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
        <div id="contact" className={styles.contact}>
            <div className="container">
                <div className={styles.contactHeader}>
                    <h2>
                        Contact <span>Me</span>
                    </h2>
                    <p>
                        Have a project in mind or just want to chat about code? Drop me a message, and let&apos;s make
                        things happen!
                    </p>
                </div>
                <div className={styles.contactBody}>
                    <div className={styles.contactBody__header}>
                        <h4>Get in Touch</h4>
                        <p>
                            I&apos;m currently available to take on new projects, so feel free to send me a message
                            about anything that you want to run past me. You can contact anytime at 24/7.
                        </p>
                        <ul className={styles.contactInfo}>
                            <li>
                                <a href="tel:+5491165690846" target="_blank">
                                    <FaPhone />
                                    +54 (11) 6569-0846
                                </a>
                            </li>
                            <li>
                                <a href="mailto:ing.sanders@gmail.com" target="_blank">
                                    <FaEnvelope />
                                    ing.sanders@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="https://maps.app.goo.gl/e7AdznMGpiHcBEaS6" target="_blank">
                                    <FaMapMarkerAlt />
                                    Buenos Aires, Argentina
                                </a>
                            </li>
                        </ul>
                        <h4>Connect we Me</h4>
                        <ul className={styles.connectWithMe}>
                            <li>
                                <a href="https://github.com/untalsanders" target="_blank">
                                    <FaGithub />
                                </a>
                            </li>
                            <li>
                                <a href="https://linkedin.com/in/untalsanders" target="_blank">
                                    <FaLinkedin />
                                </a>
                            </li>
                            <li>
                                <a href="https://youtube.com/@untalsanders" target="_blank">
                                    <FaYoutube />
                                </a>
                            </li>
                            <li>
                                <a href="https://x.com/untalsanders" target="_blank">
                                    <FaXTwitter />
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com/untalsanders" target="_blank">
                                    <FaInstagram />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <form onSubmit={handleFormSubmit} className={styles.contactForm}>
                        <h2>
                            <FaEnvelope /> Send a Message
                        </h2>
                        <p>Complete the form and I will contact you as soon as possible.</p>
                        <label>Name</label>
                        <input name="name" type="text" placeholder="Your Name" onChange={handleFormChange} />
                        <label>Email</label>
                        <input name="email" type="email" placeholder="Your Email" onChange={handleFormChange} />
                        <label>Subject</label>
                        <input name="subject" type="text" placeholder="Your Subject" onChange={handleFormChange} />
                        <label>Message</label>
                        <textarea
                            name="body"
                            placeholder="Your Message"
                            rows={8}
                            onChange={handleFormChange}></textarea>
                        <button type="submit" className={styles.buttonSubmit} disabled={isSubmitting}>
                            <FaPaperPlane />
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                    <Toaster />
                </div>
            </div>
        </div>
    )
}
