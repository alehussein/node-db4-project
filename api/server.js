const express = require('express')
const recipiesRouter = require('./recipes/recipes-router')
const server = express()
server.use(express.json())

server.use('/api/recipes', recipiesRouter )

module.exports = server