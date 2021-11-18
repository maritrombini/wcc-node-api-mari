const express = require('express')
const app = express() //cria uma aplicacao express
const port = 8080

app.use(express.json())

app.get('/', function (request, response) {
  console.log('EEE')
  response.send('Dasa Educa - Artigos')
})

const router = require('./routes/artigos.routes')
router(app)

//app ouça a porta =]
app.listen(port, function () {
  console.log('Ouvindo a porta: ', port)
})
