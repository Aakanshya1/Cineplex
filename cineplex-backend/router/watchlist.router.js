const router = require('express').Router();
const {addWatchlist, getWatchlist,deletewatchlist} = require('../controllers/watchlist.controller');
const {loginToken} = require('../middleware/auth');

router.post('/add', loginToken, addWatchlist);
router.get('/getlist', loginToken, getWatchlist);
router.delete('/deletelist', loginToken, deletewatchlist);
module.exports = router;