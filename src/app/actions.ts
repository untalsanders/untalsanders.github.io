'use server'

import { Resend } from 'resend'
import { EmailData } from './types'
import { ReactElement } from 'react'
import EmailTemplate from '@/components/EmailTemplate'

const resend = new Resend(process.env.RESEND_API_KEY)
const toEmail = process.env.TO_EMAIL as string | undefined

export async function sendEmail(data: EmailData) {
    const { name, email, subject, message } = data

    if (!toEmail) {
        console.error('TO_EMAIL is not defined in environment variables.')
        return {
            error: 'TO_EMAIL is not defined in environment variables.',
        }
    }

    try {
        const { data, error } = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: toEmail,
            subject: subject || `📩 New Message from ${name}`,
            react: EmailTemplate({
                name,
                email,
                subject,
                message,
            }) as ReactElement,
        })

        if (error) {
            console.error(`sendEmail function error: ${error}`)
            return {
                error: error.message,
            }
        }

        return {
            success: true,
            data,
        }
    } catch (error) {
        console.error(`sendEmail function caught an error: ${error}`)
        return {
            error: (error as Error).message || 'An unexpected error occurred.',
        }
    }
}
