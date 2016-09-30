var db = require('../models');
var keys = require('../handshakes.js');



function markerIndex (req, res) {

	    db.Job.find({}, function(err, allJobs) {
        console.log(allJobs);
        res.json(allJobs);
    });
};


module.exports = {
    markerIndex: markerIndex,
}
