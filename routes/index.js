const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');
const useeController = require('../controllers/userController');


router.get('/', homeController.home);
router.get('/user', useeController.user);
router.get('/user/delete', useeController.deleteUser);

module.exports = router;
