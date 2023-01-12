const express = require('express');
const CharacterController = require('./controllers/CharacterController');
const TitanController = require('./controllers/TitanController');

const routes = express.Router();


routes.get('/', (req, res) => {
  return res.json({ Hello: 'World!' });
});

routes.get('/characters', CharacterController.getAll);

routes.get('/characters/:id', CharacterController.getById);

routes.get('/titans', TitanController.getAll);

routes.get('/titans/:id', TitanController.getById);



module.exports = routes;