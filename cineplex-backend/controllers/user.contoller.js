require("dotenv").config();
const {Sequelize, Op} = require("sequelize");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const models = require("../models");
const catchAsync = require("../utils/catchAsync");
const {User }= models;

const getAllUser = catchAsync(async(req,res)=>{
    try{
        const alluser = await User.findAll();
        if(!alluser){
            return res.status(404)
            .json({
                message:"No user available"
            })
        }
        res.status(200)
        .json({
            message:"All users Retrived successfully",
            alluser:alluser
        })
    }catch(error){
        return res.status(400)
        .json({
            message:"internal server Error"
        })
    }
})
const loggedInUser = catchAsync(async(req,res)=>{
    const userId = req.user.id;
    const user = await User.findByPk(userId,{
        attributes:{exclude:['password']}
    });
    if(!user){
        return res.status(404)
        .json({
            message:"User not found"
        })
    }
    res.status(200)
    .json({
        message:"User profile retrieved successfully",
        user:user
    })
})

module.exports={
    getAllUser,
    loggedInUser
}