//Regras do negócio

const { response } = require('express')
const res = require('express/lib/response')
const { artigos } = require('../models')
const database = require('../models')
const tabelaArtigos = database.artigos

// Cria um novo artigo
exports.create = (request, response) => {
  const { titulo } = request.body
  const artigo = {
    titulo,
    // titulo: titulo,
    descricao: request.body.descricao,
    publicado: request.body.publicado
  }

  //object destructuring
  //const titulo = request.body.titulo
  //const {titulo} = request.body

  if (!artigo.titulo) {
    return response
      .status(400)
      .send('O artigo precisa conter o título definido')
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

exports.findAll = (request, response) => {
  tabelaArtigos
    .findAll()
    .then(function (data) {
      response.send(data)
    })
    .catch(function () {
      response.status(500).send('Ocorreu um erro ao buscar todos os artigos')
    })
}

exports.findById = (req, res) => {
  const { id } = req.query

  if (!id) {
    res
      .status(400)
      .send('Não foi possível buscar um artigo pois o Id não foi informado')
  }

  tabelaArtigos
    .findByPk(id)
    .then(data => {
      if (data) {
        res.send(data)
      } else {
        res
          .status(404)
          .send(`Não foi possível encontrar nenhum artigo com o id ${id} `)
      }
    })
    .catch(() =>
      res.status(500).send(`Ocorreu um erro ao buscar o artigo com o id ${id}`)
    )
}

exports.findByTitulo = (request, response) => {
  const { titulo } = request.query

  if (!titulo) {
    response
      .status(400)
      .send('Não foi possível buscar um artigo pois o título não foi informado')
  }

  tabelaArtigos
    .findOne({ where: { titulo } })
    .then(data => {
      if (data) {
        response.send(data)
      } else {
        response
          .status(404)
          .send(
            `Não foi possível encontrar nenhum artigo com o título ${titulo} `
          )
      }
    })
    .catch(() =>
      response
        .status(500)
        .send(`Ocorreu um erro ao buscar o artigo com o título ${titulo}`)
    )
}

//PUBLICADOS
exports.findAllPublished = (request, response) => {
  tabelaArtigos
    .findAll({ where: { publicado: true } })
    .then(function (data) {
      response.send(data)
    })
    .catch(function (error) {
      response
        .status(500)
        .send('Não foi possível buscar os artigos publicados.')
    })
}

//UPDATE

exports.update = (request, response) => {
  const { body: updates } = request
  const { id: idArtigo } = request.params
  const query = { where: { id: idArtigo }, returning: true }

  if (!idArtigo) {
    return response
      .status(400)
      .send('Não foi possível atualizar pois o id não foi informado')
  }

  tabelaArtigos
    .update(updates, query)
    .then(function (data) {
      const linhasAtualizadas = data[0]

      if (linhasAtualizadas === 0) {
        response
          .status(404)
          .send(
            'Não foi encontrado nenhum registro para ser atualizado a partir do id: ' +
              idArtigo
          )
      } else {
        const artigosAtualizados = data[1]
        response.send(artigosAtualizados)
      }
    })
    .catch(function (error) {
      console.log(error)
      response.status(500).send('Ocorreu um erro ao atualizar')
    })
}

//DELETE

exports.delete = (request, response) => {
  const { id: idArtigo } = request.params
  tabelaArtigos
    .destroy({ where: { id: idArtigo } })
    .then(function (itemsDeletados) {
      if (itemsDeletados === 0) {
        response.send('O item com ID ' + idArtigo + 'não foi encontrado')
      } else {
        response.send('Artigo ' + idArtigo + ' deletado com sucesso')
      }
    })
    .catch(function (error) {
      response
        .status(500)
        .send('Ocorreu um erro ao tentar deletar o artigo ' + idArtigo)
    })
}

//DELETE ALL

exports.deleteAll = (req, res) => {
  tabelaArtigos
    .destroy({ where: {}, truncate: false })
    .then(function (itensDeletados) {
      response.send('Foram deletados ' + itensDeletados + ' artigos')
    })
    .catch(function (error) {
      response.status(500).send('Ocorreu um erro ao deletar')
    })
}
