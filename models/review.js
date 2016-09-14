var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var ReviewSchema = new Schema({
  title: {type: String, required: true},
  job: {type: Schema.Types.ObjectId, ref: 'Jobs'}, // ref jobID
  customer: {type: Schema.Types.ObjectId, ref: 'Users'}, // ref userID
  translator: {type: Schema.Types.ObjectId, ref: 'Users'}, // ref userID
  customerReview: {type: Boolean, required: true}, // false = review about a customer
  overall: {type: Number, default: 5},
  body: {type: String, required: true},
  updatedBy: {type: Array, default: []},
  created_at: {type: Date, default: Date.now},
  updated_at: {type: Date, default: Date.now}
});


var Review = mongoose.model('Review', ReviewSchema);
module.exports = Review;