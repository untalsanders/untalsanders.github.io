import { NextResponse } from 'next/server'
import config from '@/config/config'

export async function GET() {
    const res = await fetch(`${config.api.baseUrl}/posts`, {
        headers: {
            'Content-Type': 'application/json',
        },
    })

    return NextResponse.json(await res.json())
}