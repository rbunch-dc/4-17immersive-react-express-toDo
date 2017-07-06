var express = require('express');
var router = express.Router();

router.get('/getStudents', function(req, res, next) {
	res.json(
		{
			msg:"Success!"
		}
	)
});

module.exports = router;
