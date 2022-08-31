const sequelize = require('sequelize');

const database = require('../db');

const schema = "";

class Disciplina extends sequelize.Model {}

Disciplina.init(
    {
        Nome: {
            type: sequelize.STRING,
            allowNull: false,
        },
        Local: {
            type: sequelize.STRING,
            allowNull: false,
        },
        Criterios: {
            type: sequelize.STRING,
            allowNull: false,
        },
        Conteudo: {
            type: sequelize.STRING,
            allowNull: false,
        },
        CargaHoraria: {
            type: sequelize.STRING,
            allowNull: false,
        },
        Professor: {
            type: sequelize.STRING,
            allowNull: false,
        },
        ProfessorEmail: {
            type: sequelize.STRING,
            allowNull: false,
        },
    },
    {
        sequelize: database, modelName: 'disciplinas', schema
    }
)

module.exports = Disciplina;