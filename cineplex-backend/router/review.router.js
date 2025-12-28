const router = require('express').Router();
const express = require('express');

const {addReview, deleteReview, getReviews, updateReview} = require('../controllers/review.controller');
const { loginToken } = require('../middleware/auth');


router.post('/', loginToken, addReview);
router.get('/:movieId', getReviews);
router.put('/:id', loginToken, updateReview);
router.delete('/:id', loginToken, deleteReview);

module.exports = router;