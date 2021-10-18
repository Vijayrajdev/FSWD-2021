const express = require('express')
const route = express.Router()

route.get('/product', (req, res) => {
    try {
        res.send('Hi...')
    } catch (error) {
        console.log(error);
    }
})

route.get('/category', (req, res) => {
    try {
        res.send('bye...')
    } catch (error) {
        console.log(error);
    }
})

module.exports = route