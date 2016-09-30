var db = require('../models');

function index(req, res) {
    console.log(' Going to the dashboard for user: ');
    console.log(req.user);
    db.Job.find({}, function(err, allJobs) {
        console.log(allJobs);
        res.json(allJobs);
    });
}

function create(req, res) {
    var data = req.body;
    console.log(data)

    var newJob = {};
    newJob.title = data.title;
    newJob.customer = data.customer;
    newJob.translator = data.translator;
    newJob.review = data.review;
    newJob.requiredProficiency = data.requiredProficiency;
    newJob.requiredLanguages = data.requiredLanguages;
    newJob.potentialTranslators = data.potential_translator_IDs
    newJob.location = data.location;
    newJob.scheduled = data.scheduled;
    newJob.appointment = data.appointment;
    newJob.completed = data.completed



    db.Job.create(newJob, function(err, result) {
        if (err) { console.log(err) };
        console.log(result)
        res.status(200).send(result);
    })
};


function show(req, res) {
    db.Job.findOne( {_id: req.params.id}, function(err, foundJob) {
        if (err) { console.log('usersController.show error', err); }
        console.log('usersController.show responding with', foundJob);
        res.send(foundJob);
    });
}



function destroy(req, res) {
    db.Job.findOneAndRemove({_id: req.params.id }, function(err, foundJob) {
      
        res.json(foundJob);
    });
}

function update(req, res) {
    console.log('updating with data', req.body);
    db.Job.findById(req.body._id, function(err, foundJob) {
        if (err) { console.log('usersController.update error', err); }
        foundJob.translator = req.body.translator;
        console.log(foundJob)
        foundJob.save(function(err, savedJob) {
            if (err) { console.log('saving altered user failed'); }
            res.send(foundJob);
        });
    });

}

// export public methods here
module.exports = {
    index: index,
    create: create,
    show: show,
    update: update,
    destroy: destroy
};

    
    // destroy: destroy,
   
