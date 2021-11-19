//Regras do negócio

const database = require('../models')
const tabelaArtigos = database.artigos

// Cria um novo artigo
exports.create = (request, response) => {
  const artigo = {
    titulo: request.body.titulo,
    descricao: request.body.descricao,
    publicado: request.body.publicado
  }

  // a promise pode ser resolvida .then()
  // ou rejeitada (ex: ocorreu um erro ao salvar)

  tabelaArtigos
    .create(artigo)
    //.then(function()) .catch(function(error))
    .then(() => response.send('Artigo criado com sucesso'))
    .catch(error => {
      console.log(error)
      response.status(500).send('Ocorreu um erro ao salvar o artigo')
    })
}
