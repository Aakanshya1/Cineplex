const router = require('express').Router();
const {addWatchlist, getWatchlist,deletewatchlist,updateWatchlist} = require('../controllers/watchlist.controller');
const {loginToken} = require('../middleware/auth');

router.post('/add', loginToken, addWatchlist);
router.get('/getlist', loginToken, getWatchlist);
router.delete('/deletelist/:id', loginToken, deletewatchlist);
router.put('/updatelist/:id', loginToken, updateWatchlist);
module.exports = router;