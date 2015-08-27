/**
 * 
 */
global.db = require('./db');

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var users = require('./routes/users');
var projects = require('./routes/projects');
var errors = require('./routes/errors');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', bodyParser.json(), users);
app.use('/projects', bodyParser.json(), projects);
app.use('/errors', bodyParser.json(), errors);

module.exports = app;
