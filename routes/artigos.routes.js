//Rotas do sistema de artigos

/*
  GET 
  - Obter todos os artigos
  - Obter um artigo específico
  - Obter todos os artigos publicados

  POST
  - Criar um novo artigo
  
  PUT
  - Publicar meu artigo
  
  DELETE
  - Deletar um artigo

*/

module.exports = app => {
  const artigosController = require('../controllers/artigos.controller')
  let router = require('express').Router()

  router.post('/', artigosController.create)

  /**
   *
   * app.post('/', function(req,res) {
   * console.log(req)
   * res.send("minha request")})
   *
   * implementação equivalente
   * router.pos('/', function (request,response) {
   * artigosController.create(request,response)}
   *
   * ) */

  app.use('/artigos', router)
}
