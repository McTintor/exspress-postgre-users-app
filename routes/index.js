const express = require('express');

const indexController = require('../controllers/index');

const router = express.Router();
  
router.get('/', indexController.getUsers);

router.get('/new', indexController.getForm);

router.post('/new', indexController.postSaveUser);

module.exports = router;