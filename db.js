/**
 * Author : EunHwan Park
 */

var mongoose = require('mongoose'),
    db = mongoose.connect('mongodb://localhost/crashreport');

var UserSchema = mongoose.Schema({
    email: String,
    password: String,
});

var ProjectSchema = mongoose.Schema({
    id: String,
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
db.model('Project', ProjectSchema, 'projects');
db.model('Error', ErrorSchema, 'errors');

module.exports = db;
