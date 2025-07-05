import { FC } from 'react'

interface EmailTemplateProps {
    name: string
    email: string
    subject: string
    message: string
}

export const EmailTemplate: FC<Readonly<EmailTemplateProps>> = ({ name, email, subject, message }) => (
    <div>
        <h2>📨 New message from {name}</h2>
        <p>
            <strong>Email</strong>: <a href={`mailto:${email}`}>{email}</a>
            <br />
            <strong>Subject</strong>: {subject}
        </p>
        <p>{message}</p>
    </div>
)

export default EmailTemplate
