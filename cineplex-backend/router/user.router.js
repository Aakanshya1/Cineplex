const {register, login ,getprofile} = require('../controllers/auth.controller');
const {loginvalidation, signupvalidation} = require('../middleware/validation/validation');
const {loginToken} = require('../middleware/auth');
const router = require('express').Router();
const express = require('express');

router.post('/register', signupvalidation, register);
router.post('/login', loginvalidation, login);
router.get('/profile', loginToken, getprofile);

module.exports = router;