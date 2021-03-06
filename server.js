const express = require('express')
const app = express()
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000
const host = process.env.HOST ? process.env.HOST : '0.0.0.0'

app.get('/*', (req, res) => {
    res.json({
        headers: req.headers,
        path: req.path,
        query: req.query,
        originalUrl: req.originalUrl,
        env: process.env,
    })
})

app.listen(port, host, () => {
    console.log(`Echoserver app listening at http://${host}:${port}`)
})
