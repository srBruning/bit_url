require("dotenv-safe").config();
const cors = require('cors')

const express = require('express');
const app = express();
require('./app/database');
const routes = require('./routes');


app.use(express.json());
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
  credentials: true,
  allowedHeaders: "*",
}
app.use(cors(corsOptions));
app.options('/api/*', cors(corsOptions)) // include before other routes


app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization, x-access-token');
    next();
  });

app.use(routes);


app.listen(3737);