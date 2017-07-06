// EXPRESS SERVER
var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var connection = mysql.createConnection({
	host: '127.0.0.1',
	user: 'x',
	password: 'x',
	database: 'todo'
})

connection.connect();

// Setup a route to handle React's first request
router.get('/getStudents', function(req, res, next) {
	res.json(
		{
			students: [
				'Marrisa',
				'Merliee',
				'Chris',
				'Stephen',
				'Chad',
				'Shane'
			]
		}
	)
});

module.exports = router;
