var mongoose = require("mongoose"),
    Schema = mongoose.Schema;


var UserSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    fName: { type: String, required: true },
    lName: { type: String, required: true },
    languages: { type: Array }, // [{language: "French", proficiency: "Conversationalist"}, {language: German, proficiency: "Instructional"}, {language: "English", proficiency: "Native"}]
    role: { type: Number, required: true }, // Translator(0) , Customer(1), Admin(9)
    location: { type: Array }, // [Long, Lat] obtained through Geoloc
    pois: { type: Array },
    jobReqs: { type: Schema.Types.ObjectId, ref: 'Jobs' },
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date, default: Date.now() },
    ellapsed_time: {
        type: Number,
        ellapased() {
            var ellapsedTime = Date.now() - this.created_at

            console.log(ellapsedTime);
        }
    }

});



var User = mongoose.model('User', UserSchema);
module.exports = User;
