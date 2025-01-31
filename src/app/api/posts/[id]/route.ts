import { NextRequest, NextResponse } from 'next/server'
import config from '@/config/config'

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: number }> }) {
    const { id } = (await params)
    const res = await fetch(`${config.api.baseUrl}/posts/${id}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    })

    return NextResponse.json(await res.json())
}