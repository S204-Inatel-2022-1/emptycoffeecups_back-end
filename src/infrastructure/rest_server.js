const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

// Endpoints
require('../port/client_api')(app);
// require('../port/adm_api')(app);

module.exports = app;
