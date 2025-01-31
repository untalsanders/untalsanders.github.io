const config = {
    environment: 'development',
    api: {
        baseUrl: process.env.API_URL || 'http://localhost:8080/api',
        nextApi: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
    },
    app: {
        name: process.env.APP_NAME || 'My App',
        version: '1.0.0',
    },
}

export default config