const express = require('express');
const routes = require('./routes');

require('./db');

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333, () => console.log('server running on port 3333'));