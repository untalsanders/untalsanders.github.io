import Head from '@/partials/Head'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <Head />
            <body>{children}</body>
        </html>
    )
}
