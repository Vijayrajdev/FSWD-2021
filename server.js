const express = require('express');
const app = express();
const PORT = 3000;

// Get 
app.get('/', (req, res) => {
    res.send('Hi...')
})

// Listen...
app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
})