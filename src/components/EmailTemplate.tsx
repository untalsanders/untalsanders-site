import { EmailData } from '@/app/types'
import { FC } from 'react'

interface EmailTemplateProps extends EmailData {}

export const EmailTemplate: FC<Readonly<EmailTemplateProps>> = ({ name, email, subject, body }) => (
    <div>
        <h2>📨 New message from {name}</h2>
        <p>
            <strong>Email</strong>: <a href={`mailto:${email}`}>{email}</a>
            <br />
            <strong>Subject</strong>: {subject}
        </p>
        <p>{body}</p>
    </div>
)

export default EmailTemplate
