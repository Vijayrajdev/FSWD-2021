const express = require('express')
const app = express()
const Port = 3001
const route = require('./routes/route');

// Middlewares
app.use(express.json())


// Routes
app.use(route)


// listening port
app.listen(Port, () => {
    console.log(`Server is up and running in port ${Port}`);
})
