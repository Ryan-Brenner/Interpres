var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/polyglot-loc");

module.exports.User = require('./user');
module.exports.Job = require('./job');
module.exports.Review = require('./review');




