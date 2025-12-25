const {register, login ,getprofile} = require('../controllers/auth.controller');
const {loginvalidation, signupvalidation} = require('../middleware/validation/validation');
const {loginToken} = require('../middleware/auth');
const router = require('express').Router();
const express = require('express');
const { getAllUser } = require('../controllers/user.contoller');

router.post('/register', signupvalidation, register);
router.post('/login', loginvalidation, login);
router.get('/profile', loginToken, getprofile);

router.get('/allusers',loginToken,getAllUser )

module.exports = router;