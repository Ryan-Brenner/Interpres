var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var ReviewSchema = new Schema({
  job: {type:String, required: true}, // ref jobID
  customer: {type: String, required: true}, // ref userID
  translator: {type: String, required: true}, // ref userID
  customerReview: {type: Boolean, required: true},
  overall: {type: Number, default: 5},
  body: {type: String, required: true},
  updatedBy: {type: Array, default: []},
  created_at: {type: Date, default: Date.now},
  updated_at: {type: Date, default: Date.now}
});


var Review = mongoose.model('Review', ReviewSchema);
module.exports = Review;