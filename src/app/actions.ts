'use server'

import { Resend } from 'resend'
import { EmailData } from '../shared/types/types'
import { ReactElement } from 'react'
import EmailTemplate from '@/components/EmailTemplate'

const resend = new Resend(process.env.RESEND_API_KEY)
const toEmail = process.env.TO_EMAIL as string | undefined

export async function sendEmail(emailData: EmailData) {
    const { name, email, subject, body } = emailData

    if (!toEmail) {
        throw new Error('TO_EMAIL is not defined in environment variables.')
    }

    const message = {
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: toEmail,
        subject: subject ? `📨 ${subject}` : `📨 New message from ${name}`,
        react: EmailTemplate({
            name,
            email,
            subject,
            body,
        }) as ReactElement,
    }
    const { data, error } = await resend.emails.send(message)

    if (error) {
        throw new Error(`Failed to send email: ${error.message}`)
    }

    return {
        success: true,
        data,
    }
}
