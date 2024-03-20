const fetch = require('node-fetch');

exports.handler = async function(event, context) {
    const { url } = JSON.parse(event.body);

    try {
        const response = await fetch(url);
        const data = await response.text();
        
        return {
            statusCode: 200,
            body: data,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to fetch data' }),
        };
    }
};
