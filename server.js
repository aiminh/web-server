var express = require('express');

var app = express();
var PORT = 3000;

// app.get('/' , 
// 	function(req, res){
// 		res.send('hello express');
// 	} 
// );

var middleware = {

	requireAuthentication: function(req, res, next){

		console.log('private route hit');
		next();
	},
	logger:function(req, res, next){

		var date = new Date().toString();

		console.log('Request:' + req.method, +' ' + req.originalUrl + ' ' + date);
		next();
	}

};

app.use(middleware.logger);

app.get(
	'/about', 
	
	middleware.requireAuthentication,

	function(req, res){
		res.send('about page');
	} 
);

app.use( express.static(__dirname + '/public') );


app.listen(PORT, 
	function(){

		console.log('express server started on port: ' + PORT);
	}
);


