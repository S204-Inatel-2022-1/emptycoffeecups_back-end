const express = require('express');

const app = express();
app.use(express.json());

// Endpoints
require('../port/client_api')(app);
// require('../port/adm_api')(app);

module.exports = app;
