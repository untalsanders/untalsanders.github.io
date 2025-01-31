const config = {
    environment: 'production',
    api: {
        baseUrl: process.env.NEXT_PUBLIC_API_URL || 'https://api.untalsanders.com/blog',
    },
    app: {
        name: 'My App',
        version: '1.0.0',
    },
}

export default config