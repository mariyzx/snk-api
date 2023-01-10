const Sequelize = require('sequelize');
const dbConfig = require('../config/db');

const Character = require('./models/Character');
const Titan = require('./models/Titan');

const connection = new Sequelize(dbConfig);

Character.init(connection);
Titan.init(connection);

module.exports = connection;