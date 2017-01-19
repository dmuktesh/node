var http = require('http');
var math_lib = require('./md_math_lib')
requestHandler = function(req, res) {
	console.log(req.url);

	if (req.url == '/favicon.ico') {
			//res.end("welcome home"+" "+result+" "+random1+" "+math_lib.add(7,8));
	} else {
		//res.end('hii');
		var data = req.url.split('&')
		var numb1 = data[0].split('=')
		n1 = numb1[1]
console.log(data[1])
		var numb2 = data[1].split('=')
		n2 = numb2[1]
		var operation = data[2].split('=')
		o= operation[1]
		res.end(" "+n1+" "+n2+" "+o);
	}
}
var server = http.createServer(requestHandler);

server.listen(3000, function() {
	console.log('started server on port 3000');
})
