const express = require('express');
const controllerDisciplinas = require('./controllers/DisciplinaController');

const routes = express.Router();

routes.get('/disciplinas', controllerDisciplinas.List);
routes.get('/disciplinas/:id', controllerDisciplinas.FindById);
routes.post('/disciplinas/create', controllerDisciplinas.Create);
routes.post('/disciplinas/delete', controllerDisciplinas.Delete);

module.exports = routes;