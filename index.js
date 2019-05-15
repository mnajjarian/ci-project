const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('<html><body><h1>Hello World</h1></body></html>')
})


const port = 3001
app.listen(port, () => {
    console.log('server running on port' + port)
})