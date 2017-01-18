var http = require('http');
var mustache = require('mustache');
var randomnum = require('./random_number')
var math_lib = require('./md_math_lib')
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
			res.end("welcome home"+" "+result+" "+random1+" "+math_lib.add(7,8));
	} else {
		res.end('hii');
	}
}
var server = http.createServer(requestHandler);

server.listen(3000, function() {
	console.log('started server on port 3000');
})
