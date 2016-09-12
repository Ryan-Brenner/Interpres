var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/polyglot-loc");

module.exports.User = require('./user');




