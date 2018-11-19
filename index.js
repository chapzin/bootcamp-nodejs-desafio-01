const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')
const app = express()

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
})

app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'njk')
app.use(routes)

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000')
})
