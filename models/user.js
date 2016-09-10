var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {type:String, required: true},
  languages: {type:Array, required: true}, // [{language: "French", proficiency: "Conversationalist"}, {language: German, proficiency: "Instructional"}, {language: "English", proficiency: "Native"}]
  type: {Number , required: true}, // Translator(0) , Customer(1), Admin(9)
  location: {type: Array, required: true}, // [Long, Lat] obtained through Geoloc
  poIs: {Array, required: true},
  jobReqs: {type:Schema.Types.ObjectId, ref: 'Jobs'},
  created_at: {type: Date, default: Date.now},
  updated_at: {type: Date, default: Date.now}
});

var User = mongoose.model('User', UserSchema);

module.exports = User;