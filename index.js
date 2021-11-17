const express = require('express')
const app = express() //cria uma aplicacao express
const port = 8080

// GET - Obter -  costuma usar query string
// POST - Criar
// PUT - Atualizar - costuma usar params para passar identificador
// DELETE  - Deletar

app.use(express.json())

app.get('/', function (req, res) {
  res.send('Minha primeira requisição')
})

app.get('/segunda-req', function (req, res) {
  res.send('Minha segunda requisição')
})

app.get('/com-parametros', function (req, res) {
  if (req.query.nome === 'Mariana') {
    res.send('Mariana chamou a requisição')
  }
  //req.query.nome
  res.send(
    'Com parâmetros funciona! Sabadou ' + req.query.nome + req.query.sobrenome
  )
})

app.post('/meu-primeiro-post', function (req, res) {
  console.log(req.body)
  res.send('Meu post funciona')
})

app.put('/meu-primeiro-put/:id', function (req, res) {
  console.log(req.body, req.params.id)
  res.send('Meu put funciona')
})

app.delete('/meu-primeiro-delete/:id', function (req, res) {
  console.log(req.params.id)
  res.send('Meu delete funciona ' + req.params.id)
})

//app ouça a porta =]
app.listen(port, function () {
  console.log('Ouvindo a porta: ', port)
})
