// SERVER-SIDE JAVASCRIPT

//require express in our app
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var controllers = require('./controllers');
var mongoose = require('mongoose');
var ejs = require('ejs');

// serve static files from public folder
// app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

// need to add this so that we can accept request payloads
app.use(bodyParser.json());

// We'll serve jQuery and bootstrap from a local bower cache avoiding CDNs
// We're placing these under /vendor to differentiate them from our own assets
app.use('/vendor', express.static(__dirname + '/bower_components'));
app.use('/public', express.static(__dirname + '/public'));

// set 'html' as the engine, using ejs's renderFile function
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

/**********
 * ROUTES *
 **********/

app.get('/', function homepage (req, res) {
	res.sendFile(__dirname+'/index.html')
});

app.get('/api/jobs/locations', controllers.maps.markerIndex);

app.get('/translatedHome/:lang/:text', controllers.translations.test)

app.get('/api', controllers.api.index);
app.get('/api/users', controllers.users.index);
app.post('/api/users', controllers.users.create);
app.get('/api/users/:userId', controllers.users.show);
app.put('/api/users/:userId/update', controllers.users.update);
app.delete('/api/users/:userId', controllers.users.destroy);

app.get('/api/jobs', controllers.jobs.index);
app.post('/api/jobs', controllers.jobs.create);
app.get('/api/jobs/:id', controllers.jobs.show);
app.put('/api/jobs/:id/update', controllers.jobs.update);
// app.delete('/api/jobs/:jobId', controllers.jobs.destroy);

app.get('/api/reviews', controllers.reviews.index);
app.post('/api/reviews', controllers.reviews.create);
// app.get('/api/reviews/:reviewId', controllers.reviews.show);
// app.put('/api/reviews/:reviewId/update', controllers.reviews.update);
// app.delete('/api/reviews/:reviewId', controllers.reviews.destroy);

app.post('/login/submit', controllers.users.credCheck)

app.get('/templates/:name', controllers.api.templates);



/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
