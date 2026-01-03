const {register, login ,getprofile} = require('../controllers/auth.controller');
const {loginvalidation, signupvalidation} = require('../middleware/validation/validation');
const {loginToken} = require('../middleware/auth');
const router = require('express').Router();
const express = require('express');
const { getAllUser,loggedInUser,updateUser,updateAvatar } = require('../controllers/user.contoller');
const avatarUpload = require('../middleware/uploadAvatar');
router.post('/register', signupvalidation, register);
router.post('/login', loginvalidation, login);
router.get('/profile', loginToken, getprofile);

router.get('/allusers',loginToken,getAllUser )
router.get('/getuser',loginToken,loggedInUser)
router.put('/update',loginToken,updateUser)
router.put('/uploadavatar',loginToken,avatarUpload.single('avatar'),updateAvatar)
module.exports = router;