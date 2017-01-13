var http = require('http');
var mustache = require('mustache');
var randomnum = require('./random_number')
requestHandler = function(req, res) {
	console.log('handler');

	if (req.url == '/') {
			result = mustache.render("Hello {{first_name}} {{last_name}}", 
						  {
						    "first_name": 'muktesh',
						    "last_name": 'deshpande'
						  }
						)
			random1 = randomnum();
			res.end("welcome home"+result+" "+random1);
	} else {
		res.end('hii');
	}
}
var server = http.createServer(requestHandler);

server.listen(3000, function() {
	console.log('started server on port 3000');
})
