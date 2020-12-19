const app = require('express')(),
    PORT = 8084,
    bodyParser = require('body-parser'),
    routes = require('./routes'),
    mongoose = require('mongoose');

// Definição do body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configuração de rotas
routes(app);

// Configuração do banco de dados
mongoose.Promise = global.Promise;
mongoose.connect('localhost:4200', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}, console.debug('Banco de dados conectado'));


app.listen(PORT, () => {
    console.debug(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;