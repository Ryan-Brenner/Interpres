
var db = require('../models');
var keys = require('../handshakes.js');
var googleTranslate = require('google-translate')(keys.translateKey);
var home = '/Users/ryanbrenner/WDI/Final_Project/PolyglotL-c/index.html'

function test(req, res){
	console.log(req.params.text);
	if(req.params.lang === 'en') {
		var data = {
			translatedText: req.params.text
		}
		res.send(data)
	}
 googleTranslate.translate( req.params.text,'en', req.params.lang, function(err, translation) {
   res.send(translation)
        });
};


module.exports = {
	test: test
}