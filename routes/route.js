const database = require('../database/db')
const express = require('express')
const { v4: uuidv4 } = require('uuid');
const route = express.Router()

route.get('/all', (req, res) => {
    try {
        res.status(200).json({
            categories: database.categories,
            message: `Sucessfully fetched categories`,
            status: `SUCCESS`
        })
    } catch (error) {
        res.status(404).send(error.message)
    }
})

route.post('/add', (req, res) => {
    try {
        const { name } = req.body
        let newCategory = {
            name,
            id: uuidv4()
        }
        database.categories.push(newCategory)
        res.json({
            categories: database.categories,
            message: `Sucessfully fetched categories`,
            status: `SUCCESS`
        })
    } catch (error) {
        res.status(404).send(error.message)
    }
})

module.exports = route