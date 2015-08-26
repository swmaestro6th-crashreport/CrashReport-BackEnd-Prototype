/**
 * Author : EunHwan Park
 */

var mongoose = require('mongoose'),
    db = mongoose.connect();

var UserSchema = mongoose.Schema({
    email: String,
    password: String,
    project: [ ProjectSchema ]
});

var ProjectSchema = mongoose.Schema({
    name: String,
    appVersion: String,
    apiKey: String
});

var ErrorSchema = mongoose.Schema({
    errorMessage: String,
    className: String,
    methodName: String,
    fileName: String,
    errorLine: String,
    errorStack: String,
    osVersion: String,
    osArch: String,
    appMemTotal: String,
    appMemFree: String,
    tag: [ String ]
});

db.model('User', UserSchema, 'users');
db.model('Project', ProjectShcema, 'projects');
db.model('Error', ErrorSchema, 'errors');

module.exports = db;
