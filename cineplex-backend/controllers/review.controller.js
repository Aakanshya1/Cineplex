const {Sequelize,Op}= require("sequelize")
const  models = require('../models/review')
const catchAsync = require('../utils/catchAsync')
const { Review, Movie, User}= models;

const addReview = catchAsync(async(req, res )=>{
    try {
        const {imdbId, rating, comment}= req.body;

        let movie= await Movie.findOne({imdbId});
        if(!movie) movie = await Movie.create({imdbId});

        const review = await Review.create({
            UserId: req.user.id,
            MovieId: movie.req.id,
            rating,
            comment
        });

        res.status(201)
        .json({
            message:"Review Created succesfully",
            review:review
        })
    } catch (error) {
        res.status(500)
        .json({
            success:false,
            error:error.message 
        })
    }
})

const getReviews = catchAsync(async(req,res)=>{
    try {
        const reviews = await Review.findAll({
        where:{MovieId : req.params.movieId},
        include:["User"]
    })
    res.status(200)
    .json({
        message: "reviews retrived successfully",
        data:reviews
    })
    } catch (error) {
         res.status(500)
        .json({
            message:"Internal Server Error"
        })
    }
    
})
const updateReview = catchAsync(async(req,res)=>{
    const  review = await Review.findbyPk(req.params.id);
  
  if (!review || review.UserId !== req.user.id) {
    return res.status(403).json({ message: "Not allowed" });
  }

  await review.update(req.body);
  res.json(review);
})

const deleteReview = catchAsync(async (req,res)=>{
    const review = await Review.findByPk(req.params.id);

  if (!review || review.UserId !== req.user.id) {
    return res.status(403).json({ message: "Not allowed" });
  }

  await review.destroy();
  res.json({ message: "Review deleted" });
})

module.exports={
    addReview, getReviews, updateReview,deleteReview
}