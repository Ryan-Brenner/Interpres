// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require("./models");

var userList =[];
userList.push({
              name: 'The Downward Spiral'
            });
userList.push({
              name: 'Metallica'           
            });
userList.push({
              name: 'Music for the Jilted Generation'
            });
userList.push({
              name: 'Unchained'
            });

// populate each users song list
userList.forEach(function(user) {
  user.songs = sampleSongs;
});


db.User.remove({}, function(err, users){

  db.User.create(userList, function(err, users){
    if (err) { return console.log('ERROR', err); }
    console.log("all users:", users);
    console.log("created", users.length, "users");
    process.exit();
  });

});
