/************
 * DATABASE *
 ************/

var db = require('../models');
var bcrypt = require('bcrypt');


// GET /api/Users
function index(req, res) {
  db.User.find({}, function(err, allUsers) {
    res.json(allUsers);
  });
}

function create(req, res) {
  var data = req.body;
  console.log(data)
  var password = data.passTxt;
  var saltRounds = 10;
  var salt = bcrypt.genSaltSync(saltRounds);
  var hash = bcrypt.hashSync(password,10);
  var newUser = {};
    newUser.username = data.username;
    newUser.email = data.email;
    newUser.password = hash
    newUser.fName = data.fName;
    newUser.lName = data.lName;
    newUser.languages = data.languages;
    newUser.role = data.role;
    newUser.location = data.consent;
    newUser.pois = data.pois

  db.User.create(newUser, function(err, result) {
    if(err) {console.log(err)};
    res.status(200).send(result);
  })};


function show(req, res) {
  db.User.findById(req.params.userId, function(err, foundUser) {
    if(err) { console.log('usersController.show error', err); }
    console.log('usersController.show responding with', foundUser);
    res.json(foundUser);
  });
}

function destroy(req, res) {
  db.User.findOneAndRemove({ _id: req.params.userId }, function(err, foundUser){
    // note you could send just send 204, but we're sending 200 and the deleted entity
    res.json(foundUser);
  });
}

function update(req, res) {
  console.log('updating with data', req.body);
  db.User.findById(req.params.userId, function(err, foundUser) {
    if(err) { console.log('usersController.update error', err); }
    foundUser.name = req.body.name;
    foundUser.save(function(err, savedUser) {
      if(err) { console.log('saving altered user failed'); }
      res.json(savedUser);
    });
  });

}


// export public methods here
module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};

