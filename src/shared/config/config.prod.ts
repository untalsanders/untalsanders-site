const config = {
    environment: 'production',
    api: {
        baseUrl: process.env.API_URL || 'https://jsonplaceholder.typicode.com',
    },
    app: {
        name: process.env.APP_NAME || 'Sanders Gutiérrez',
        version: '1.0.0',
    },
}

export default config
