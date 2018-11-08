/**
 * This is an example about how to pull or request something from an specific URL
 * using pure nodejs http module
 */
const client = require('http');

// Returns an Event Emitter type 
const req = client.request(
    { hostname: 'www.google.com', method: 'GET' },
    (res) => {
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

req.end();