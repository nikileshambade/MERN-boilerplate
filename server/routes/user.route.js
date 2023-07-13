const express = require('express');
const userRouter = express.Router();
const { getUser, authenticate, registerUser } = require('../controllers/user.controller');

userRouter.route('')
    .get(getUser)
    .post(registerUser)

userRouter.route('/auth')
    .post(authenticate)

module.exports = userRouter;