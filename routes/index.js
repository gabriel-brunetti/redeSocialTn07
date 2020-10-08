var express = require('express');
var router = express.Router();
const postController = require('../controllers/postController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/post/create', postController.create);
router.post('/post/create', postController.store);

module.exports = router;
