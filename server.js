// const http = require('http')
// const fs = require('fs')
// const path = require('path')

// const server = http.createServer((request, response) => {

//     const { url } = request
//     if (url == '/login') {
//         response.write(`<h1>Login</h1>`)
//         response.end()
//     }
//     else if (url == '/signup') {
//         response.write(`<h1>signup</h1>`)
//         response.end()
//     }
//     else {
//         response.write(`<h1>Error</h1>
//       <button><a href="http://localhost:3000/login">Click</a></button>`)
//         response.end()
//     }
// })

// const port = 3000;
// server.listen(port, () => {
//     console.log(`server is up and running in port ${port} ...`)
// })

const express = require('express')
const app = express()

app.get('/login', (req, res) => {
    res.send(`<h1>Login</h1>`)
})

app.get('/signup', (req, res) => {
    res.send(`<h1>signup</h1>`)
})

app.get('/', (req, res) => {
    res.send(`<h1>Error</h1>
       <button><a href="http://localhost:3000/login">Click</a></button>`)
})

const port = 3000;
app.listen(port, () => {
    console.log(`Server is up and running in port ${port}`)
})