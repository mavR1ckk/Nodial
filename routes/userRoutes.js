const express = require('express');
const router = express.Router();
const passport = require('passport');

const userController = require('../controllers/userController');

router.get('/delete', userController.deleteUser);
// router.post('/signIn', userController.signIn);
router.get('/signUpPage', userController.signUpPage);
router.post('/signUp', userController.signUp);
router.get('/dashboard',passport.checkAuthentication, userController.profilePage);


//Use passport as middleware to authenticate
router.post('/signIn', userController.createSession);

module.exports = router;
