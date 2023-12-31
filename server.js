// @flow
const http = require('https')
const app = require('./app')
const fs = require('fs')

const port = 3002

const server = http.createServer(
    {
        key:   fs.readFileSync('keys/localhost-key.pem'),
        cert:  fs.readFileSync('keys/localhost.pem')
    },app);

    server.listen(port)