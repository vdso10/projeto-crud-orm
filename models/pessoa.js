const {DataTypes} = require('sequelize')
const { models } = require('.')

const PessoaModel = (sequelize, DataTypes) =>{

    const Pessoa = sequelize.define('Pessoa', {
        nome: DataTypes.STRING,
        cargo: DataTypes.STRING
    })

    Pessoa.associate = ({Usuario}) =>{
        Pessoa.hasOne(Usuario)
    }

    return Pessoa
}



module.exports = PessoaModel