const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('../swagger.json');

require('./db');

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.use(
  '/docs',
  swaggerUi.serve, 
  swaggerUi.setup(swaggerDocument)
);

app.listen(3333, () => console.log('server running on port 3333'));