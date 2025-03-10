const { handler } = require('../proxyCore')

exports.handler = async (event) => {
    return handler({
        ...event,
        path: event.path.replace('/.netlify/functions/proxy/', '/proxy/')
    })
}