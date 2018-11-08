# NodeJS Web

Pure NodeJS (without frameworks).

## Getting started

### Requirements

- [NodeJS](https://nodejs.org/en/) already installed
- [OpenSSL](https://www.openssl.org/) Try using something like [Homebrew](https://brew.sh/) (`brew install openssl`)
    - How to generate certificates? Command: `openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -nodes`

### Running the application
- > `git clone https://github.com/cazuba/nodejs-web.git`
- > `cd nodejs-web`

#### Hello World! (http.js) 

1. > `node http.js` this will start the server 
2. Hit that URL (It could be using the browser or the terminal `curl localhost:8000` or `curl -i localhost:8000` to display the headers)

#### Hello World! (https.js)
1. Create a https certificate
    1.1. `openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -nodes`
2. Run the application `sudo node https.js`
3. Test it via browser `https://localhost` or terminal `curl --insecure https://localhost`

#### Requesting Data (request.js | get.js)
This is an example of how http module can request data using some methods like `request`, `get`, `post`, etc...

1. `node request.js` || `node get.js`

### Helpful Commands
- `npm search {package_name}`
- `node`
    - `http.STATUS_CODES`
    - `url.parse('https://app.pluralsight.com/library/search?q=nodejs')` This will retrieve all the URL parts ([see more here](https://nodejs.org/api/url.html#url_url_strings_and_url_objects))
- `brew install {package_name}`
- `curl -i http://www.google.com`
