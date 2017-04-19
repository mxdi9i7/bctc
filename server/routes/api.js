const express = require('express');
const router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/bctc')
/* GET api listing. */
router.get('/blog', (req, res) => {
		db.comments.find((err, comments)=> {
			if (err) {
				res.send(err);
			}
			var commentsData = comments
			res.json(commentsData)
		})
});
router.post('/post-blog', (req, res, next) => {
	var comment = req.body;
	db.comments.save(comment, function(err, comment) {
		if (err) {
			res.send(err)
		} 
		res.json(comment)
	})
})
router.delete('/delete-blog/:id', (req, res, next) => {
	db.comments.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, comment) {
		if (err) {
			res.send(err)
		} 
		res.json(comment)
	})
})
module.exports = router;