const express = require('express');
const router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/bctc')
/* GET api listing. */
router.get('/', (req, res) => {
		db.comments.find((err, comments)=> {
			if (err) {
				res.send(err);
			}
			var commentsData = comments
			res.send(commentsData)
		})
});

module.exports = router;