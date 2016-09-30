var db = require('../models');
var keys = require('../handshakes.js');
var googleTranslate = require('google-translate')('AIzaSyCtg4kLytJIdpBwSSDVq7tpIE4ZYROkUnU');

function test(req, res) {
    if (req.params.lang === 'en') {
        var data = {
            translatedText: req.params.text
        }
        res.send(data)
    } else {
        googleTranslate.translate(req.params.text, 'en', req.params.lang, function(err, translation) {
            res.send(translation)
        });
    };
};




module.exports = {
    test: test,
}
