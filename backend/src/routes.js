const express = require('express');
const CharacterController = require('./controllers/CharacterController');
const TitanController = require('./controllers/TitanController');

const routes = express.Router();

routes.get('/', (req, res) => {
  return res.json({ Hello: 'World!' });
});

routes.get('/characters', CharacterController.getAll);

routes.get('/titans', TitanController.getAll);


module.exports = routes;