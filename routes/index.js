const express = require('express');
const router = express.Router();
const auth = require('../config/passport');
const passport = require('passport');

const homeController = require('../controllers/homeController');

router.get('/', homeController.home);
router.use('/user', require('./userRoutes'));
router.use('/post', auth.checkAuthentication, require('./postRoutes'));

module.exports = router;
