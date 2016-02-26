
// module.exports = function(){

// requireAuthentication: function(req, res, next){

// 		console.log('private route hit');
// 		next();
// 	},
// 	logger:function(req, res, next){

// 		var date = new Date().toString();

// 		console.log('Request:' + req.method, +' ' + req.originalUrl + ' ' + date);
// 		next();
// 	}

// };


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

module.exports = middleware;
