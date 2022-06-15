// const http = require('http')

// let server = http.createServer((request, response)=> {
//     response.writeHead(200);
//     response.end('Serik Kamidolla')
// })
// server.listen(7878, () => {
//     console.log('server listens on port 7878')
// })

const { response } = require('express')
const { request } = require('express')
const express = require('express')
const randomizer = require('./randomizer')

const app = new express()
app.use(express.json())

app.post('/user', (request, response)=> {
    let randomNumber = randomizer();
    if(+request.body.userNumber === randomNumber){
        console.log(`User number: ${request.body.userNumber}, random number: ${randomNumber} YOU WON`)
    }else{
        console.log(`User number: ${request.body.userNumber}, random number: ${randomNumber} YOU LOST LOSER`)
    }
})

app.use(express.static('static')).listen(5000, () => {
    console.log('Express Server POST 5000')
})