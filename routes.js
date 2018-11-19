const express = require('express')
const controller = require('./controllers')
const middleware = require('./middlewares')
const routes = express.Router()

routes.get('/', controller.index)
routes.post('/check', controller.check)
routes.get('/major', middleware.checkAge, controller.major)
routes.get('/minor', middleware.checkAge, controller.minor)

module.exports = routes
