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

const updateUser = catchAsync((async(req,res)=>{
    try {
        const userId = req.user.id;
        const {name,email,avatar}= req.body;
        const user = await User.findByPk(userId);
        if(!user){
            return res.status(404)
            .json({
                message:"User not found"
            })
        }
        if (name !== undefined) user.name = name;
    if (email !== undefined) user.email = email;
    if (avatar !== undefined) user.avatar = avatar;
    await user.save();
    const updatedUser = await User.findByPk(userId,{
        attributes:{exclude:['password']}
    });
    res.status(200)
    .json({
        message:"User profile updated successfully",
        user:updatedUser
    })
    } catch (error) {
       res.status(500)
       .json({
        message:"Internal Server Error"
       }) 
    }
}));

const updateAvatar = catchAsync(async (req, res) => {
     console.log("UPLOAD HIT");
  console.log("File:", req.file);
  console.log("User:", req.user);
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  const userId = req.user.id;

  const avatarPath = `/avatars/${req.file.filename}`;

  const user = await User.findByPk(userId);
  user.avatar = avatarPath;
  await user.save();

  res.status(200).json({
    message: "Avatar updated successfully",
    avatar: avatarPath,
  });
});


module.exports={
    getAllUser,
    loggedInUser,
    updateUser,
    updateAvatar

}