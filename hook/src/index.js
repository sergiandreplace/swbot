const express = require('express')
// will use this later to send requests
const http = require('http')
// import env variables
const fulfillment = require('./swbot.js')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/', (req, res) => {
	res.status(200).send(fulfillment(req,res))
})

app.listen(port, () => {
	console.log(`🌏 Server is running at http://localhost:${port}`)
})
