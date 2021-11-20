//Model da tabela de artigos

//titulo, descricao, publicado

module.exports = (sequelizeDatabase, Sequelize) => {
  const Artigo = sequelizeDatabase.define('artigos', {
    titulo: {
      type: Sequelize.STRING
    },
    descricao: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'Construindo artigo'
    },
    publicado: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  })

  return Artigo
}
