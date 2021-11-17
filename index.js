const express = require('express')
const app = express() //cria uma aplicacao express
const port = 8080

app.use(express.json())

app.get('/', function (req, res) {
  res.send('Dasa Educa - Artigos')
})

//app ouça a porta =]
app.listen(port, function () {
  console.log('Ouvindo a porta: ', port)
})
