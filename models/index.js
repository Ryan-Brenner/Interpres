var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/polyglot-loc_test");

var User = require('./user');

module.exports.User = User;




