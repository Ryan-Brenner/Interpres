var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var JobSchema = new Schema({

    customer: {type:Number, required: true},
    translator: {type:Number, required: true},
    review: {type:Number, required: true},
    required_proficiency: { type: Array, default: []},
    required_languages: { type: Array, default: [{ from: "English" }, { to: "French" }] },
    potential_translator_IDs: { type: Array, default: []}, /// need a function to auto populate
    location: { type: Array, default: [{ latitude: 37.7749 }, { longitude: -122.4194 }] },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    completed: { type: Boolean, default: Date.now }
});


var Job = mongoose.model('Job', JobSchema);
module.exports = Job;
