// const http = require('http')

// let server = http.createServer((request, response)=> {
//     response.writeHead(200);
//     response.end('Serik Kamidolla')
// })
// server.listen(7878, () => {
//     console.log('server listens on port 7878')
// })

const express = require('express')

const app = new express()

app.use(express.static('static')).listen(5000, () => {
    console.log('Express Server POSRT 5000')
})