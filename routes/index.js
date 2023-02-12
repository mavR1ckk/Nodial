const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');
const userController = require('../controllers/userController');



router.get('/', homeController.home);
router.get('/user', userController.user);
router.get('/user/delete', userController.deleteUser);
router.post('/user/signIn', userController.signIn);
router.get('/user/signUpPage', userController.signUpPage);
router.post('/user/signUp', userController.signUp);

module.exports = router;
