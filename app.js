require('dotenv').config()
const express = require('express')

const app = express()

app.get("/", (req,res) => {
    res.send("<h1> Server is working as expected </h1>")
} )

module.exports = app
