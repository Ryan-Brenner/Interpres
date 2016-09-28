var db = require('../models');
var keys = require('../handshakes.js');



function markerIndex (req, res) {

	    db.Job.find({}, function(err, allJobs) {
        console.log(allJobs);
        res.json(locations);
    });
};


var locations = {"locations" : [
    [
        { "geometry": { "coordinates": [-122.45, 37.77] }},
        { "properties": { "title": "General Assembly, San Francisco, CA" }}
    ],  
    [
        { "geometry": { "coordinates": [-77.036871, 38.907192] }},
        { "properties": { "title": "General Assembly, Washington, DC" }}
    ],
    [
        { "geometry": { "coordinates": [-122.45, 37.77] }},
        { "properties": { "title": "General Assembly, Boston, MA" }}
    ],
    [
        { "geometry": { "coordinates": [-74.005941, 40.712784] }},
        { "properties": { "title": "General Assembly, New York, NY" }}
    ],
    [
        { "geometry": { "coordinates": [-87.629798, 41.878114] }},
        { "properties": { "title": "General Assembly, Chicago, IL" }}
    ],
    [
        { "geometry": { "coordinates": [-122.332071, 47.606209] }},
        { "properties": { "title": "General Assembly, Seattle, WA" }}
    ],
    [
        { "geometry": { "coordinates": [-118.243685, 34.052234] }},
        { "properties": { "title": "General Assembly, Los Angeles, CA" }}
    ],
    [
        { "geometry": { "coordinates": [114.109497, 22.396428] }},
        { "properties": { "title": "General Assembly, Hong Kong, China" }}
    ],
    [
        { "geometry": { "coordinates": [144.963280, -37.81] }},
        { "properties": { "title": "General Assembly, Melbourne, AU" }}
    ],
    [
        { "geometry": { "coordinates": [151.206990, -33.867487] }},
        { "properties": { "title": "General Assembly, Sydney, AU" }}
    ],
    [
        { "geometry": { "coordinates": [103.819836, 1.352083] }},
        { "properties": { "title": "General Assembly, Singapore" }}
    ],
    [
        { "geometry": { "coordinates": [-0.127758, 51.507351] }},
        { "properties": { "title": "General Assembly, London, UK" }}
    ]
]}

module.exports = {
    markerIndex: markerIndex,
}
