require('dotenv').config()
const express = require('express')

const app = express()

app.get("/", (req,res) => {
    res.send("<h1> Server is working as expected </h1>")
} )

app.get("/tab2", (req,res) => {
    res.send("<h1> This is tab2 </h1>")
} )



module.exports = app
