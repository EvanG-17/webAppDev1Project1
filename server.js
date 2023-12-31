
// use javascript in strict mode
'use strict';

// import all required modules
const logger = require('./utils/logger');
const express = require("express");
const exphbs = require('express-handlebars');

// initialise project
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false, }));

// static files output to public folder
app.use(express.static("public"));
app.engine('.hbs', exphbs({
  extname: '.hbs',
  defaultLayout: 'main',
}));
app.set('view engine', '.hbs');

// http://expressjs.com/en/starter/basic-routing.html
const routes = require('./routes');
app.use('/', routes);

const listener = app.listen(process.env.PORT || 4000, function () {
  logger.info('The movie collection app is listening on port ' + listener.address().port);
});

