/**
 * This is an example about how to get data from an specific URL
 * using pure nodejs http module.
 * 
 * This get method uses the http.globalAgent. Try `console.log(req.agent)` for more information
 */
// const client = require('https'); // * HTTPS protocol *
const client = require('http');

// Returns an Event Emitter type http.ClientRequest
// req: http.ClientRequest
const req = client.get(
    // * A little more simpler than request.js and requires the protocol (http||https) *
    'http://www.google.com',
    (res) => {
        // res: http.IncomingMessage

        // console.log(res);
        console.log('statusCode: ', res.statusCode);
        console.log('headers: ', res.headers);

        res.on('data', data => {
            console.log(data.toString());
        });
    }
);

req.on('error', err => console.log(err));

// If method=POST
//req.write(...);

// For GET method we don't need to end the request
// req.end();

// console.log(req.agent) // agent: http.Agent