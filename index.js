const express = require('express')
const app = express() //cria uma aplicacao express
const port = 8080

//app ouça a porta =]
app.listen(port, function () {
  console.log('Ouvindo a porta: ', port)
})

app.get('/', function (req, res) {
  res.send('Minha primeira requisição')
})

app.get('/segunda-req', function (req, res) {
  res.send('Minha segunda requisição')
})

app.get('/com-parametros', function (req, res) {
  //req.query.nome
  res.send('Com parâmetros funciona! Sabadou ' + req.query.nome)
})
