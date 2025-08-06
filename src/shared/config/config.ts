let environment

switch (process.env.NODE_ENV) {
    case 'production':
        environment = import('./config.prod')
        break
    default:
        environment = import('./config.dev')
        break
}

export default (await environment).default
