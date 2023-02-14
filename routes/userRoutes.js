const express = require('express');
const passport = require('passport');
const router = express.Router();
const auth = require('../config/passport');

const userController = require('../controllers/userController');

router.get('/delete', userController.deleteUser);
router.post('/signIn', passport.authenticate(
    'local',
    {
        failureRedirect: '/user/signIn',
        successRedirect: '/user/profile'
    }

), userController.errorPage);
router.get('/signIn', userController.signInPage)
router.get('/signUpPage', userController.signUpPage);
router.post('/signUp',  userController.signUp);
router.get('/logOut',  userController.logOut);
router.get('/profile', auth.checkAuthentication, userController.profilePage);
router.get('/error', userController.errorPage);

module.exports = router;
