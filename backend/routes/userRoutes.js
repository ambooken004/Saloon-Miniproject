const express = require('express');
const { registerUser, authUser } = require('../controllers/userControllers');

const router = express.Router();

router.route('/').post(registerUser) //this the an API endpoint creates a user
router.route('/login').post(authUser) //login route

module.exports = router;