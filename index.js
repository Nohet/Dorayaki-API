const express = require("express")
const functions = require("./functions")
require('dotenv').config({path: "config.env"})

app = express()

const PORT = process.env.PORT || 635780
const HOST = process.env.HOST || "127.0.0.1"

app.get("/", (req, res) => {
    res.send({"monetize": "/api/monetize"})
})

app.get("/api/monetize/", (req, res) => {
    let id = req.header('User-ID')
    let url = req.header('URL')
    if (!id || !url) {
        res.send({"Error": "ID or URL cannot be empty!", "Headers": "User-ID: (userid), URL: (url)", "Example Request": "requests.get('http://127.0.0.1/api/monetize/', headers={'User-ID': '12345', 'URL': 'google.com'}) .json()"})
    } else {
        res.send({"url": functions.linkvertise(id, url)})
    }
    
})


app.listen(PORT, HOST, () => console.log(`Running server on ${HOST}:${PORT}`))