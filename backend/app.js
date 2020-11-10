const cron = require("node-cron");
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var twitterRouter = require('./routes/twitter');
var bancoRouter = require('./routes/banco');

const { get } = require('http');

var app = express();

const cors = require('cors');
const configCors = require("./configCors");

// Ativa requisição preflight para todas as rotas
app.options('*', cors(configCors.corsOptions));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', twitterRouter);
app.use('/', bancoRouter);



/* app.use(function (req, res, next) {
  // Para facilitar desenvolvimento e testes, libera a API para requisição de qualquer origem
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
 */


// Captura dos erros acima de 404
app.use(function (req, res, next) {
  next(createError(404));
});

// Captura de erros
app.use(function (err, req, res, next) {
  // Seta os locais, provendo os erros apenas no development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Renderiza a página de erro
  res.status(err.status || 500);
  res.render('error');
});

// Inicialização do web server
app.listen(3000, () => {
  console.log('Web Server inicializado -> Ouvindo a porta 3000');
});

module.exports = app;
