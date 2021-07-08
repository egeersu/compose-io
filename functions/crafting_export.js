const formattedReturn = require('./formattedReturn')
const createAttempt = require('./createAttempt')

exports.handler = async (event) => {
    return formattedReturn(200, 'Hello World')
    if (event.httpMethod === 'GET') {
        return await createAttempt(event)
    }
    else {
        return formattedReturn(405, {});
    }
}