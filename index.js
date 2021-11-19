const express = require('express')
const app = express() //cria uma aplicacao express
const port = 8080

app.use(express.json())

app.get('/', function (request, response) {
  response.send('Dasa Educa - Artigos')
})

const database = require('./models')
database.sequelizeDatabase.sync()

//força sincronização, exclui dados da tabela
//database.sequelizeDatabase.sync({ force: true }).then(() => {
// console.log('Drop and re-sync db.')
//})

const router = require('./routes/artigos.routes')
router(app)

//app ouça a porta =]
app.listen(port, function () {
  console.log('Ouvindo a porta: ', port)
})
