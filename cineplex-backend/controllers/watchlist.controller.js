const {Sequelize, Op} = require("sequelize");
const catchAsync = require("../utils/catchAsync");
const models = require("../models");
const {Watchlist, Movie} = models;


const addWatchlist = catchAsync(async (req, res) => {
    try {
            const {movieId} = req.body;
            const userId = req.user.id;
            const existingWatchlist = await Watchlist.findOne({
            where:{movieId}
        });
        if(existingWatchlist){
            return res.status(400)
            .json({
                message:"Movie already exist in your watchlist"
            })
        }
        const watchlist = await Watchlist.create({
            UserId:userId,
            MovieId:movieId
        });
        res.status(201)
        .json({
            message:"Movie added to watchlist successfully",
            data:watchlist
        })
    } catch (error) {
        res.status(500)
        .json({
            message:"Internal Server Error"
        })
    }
});

const getWatchlist = catchAsync(async (req, res, next) => {
    const userId = req.user.id;
    try {
        const watchlist = await Watchlist.findAll({
            where:{UserId:userId},
            include:{
                model:Movie,
                attributes:["id","imdbId","title","poster"]
            }
        });
        res.status(200)
        .json({
            message:"Watchlist retrieved successfully",
            data:watchlist
        })
    } catch (error) {
        res.status(500)
        .json({
            message:"Internal Server Error"
        })
    }
});

const deletewatchlist = catchAsync(async (req,res)=>{
    try {
        const userId = req.user.id;
        const {movieId} = req.body;
        const watchlistItem = await Watchlist.findOne({
            where:{
                UserId:userId,
                MovieId:movieId
            }
        });
        if(!watchlistItem){
            return res.status(404)
            .json({
                message:"Movie not found in watchlist"
            })
        }
        await watchlistItem.destroy();
        res.status(200)
        .json({
            message:"Movie removed from watchlist successfully"
        })
    } catch (error) {
        res.status(500)
        .json({
            message:"Internal Server Error"
        })
    }
})

module.exports = {
    addWatchlist,
    getWatchlist,
    deletewatchlist
};