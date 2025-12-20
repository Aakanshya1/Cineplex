const router = require('express').Router();
const {addWatchlist, getWatchlist} = require('../controllers/watchlist.controller');
const {loginToken} = require('../middleware/auth');

router.post('/add', loginToken, addWatchlist);
router.get('/list', loginToken, getWatchlist);
module.exports = router;