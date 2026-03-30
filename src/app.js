const express = require  ('express')
const cors = require('cors');
const app = express()

app.use(express.json());
app.use(cors());

//importação de rotas de modulos 
const postsRoutes = require('./routes/post.routes');

//inclusão de rotas de modulos de aplicação
app.use(postsRoutes);

module.exports = app;