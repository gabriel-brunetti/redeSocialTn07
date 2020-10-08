var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController')

/* GET users listing. */
router.get('/create', usersController.create);
router.post('/create', usersController.store);
router.get('/', usersController.index);
router.get('/edit/?:id', usersController.edit);
router.put('/edit/?:id', usersController.update);

module.exports = router;
