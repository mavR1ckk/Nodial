const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/delete', userController.deleteUser);
router.post('/signIn', userController.signIn);
router.get('/signUpPage', userController.signUpPage);
router.post('/signUp', userController.signUp);

module.exports = router;
