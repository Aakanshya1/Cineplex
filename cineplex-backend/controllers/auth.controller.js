require("dotenv").config();
const {Sequelize, Op, Model} = require("sequelize");
const catchAsync = require("../utils/catchAsync");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const models = require("../models");
const {User } = models; 



const register = catchAsync(async (req, res, next) => {
    const {name,email, password, role}= req.body;
    if(!name || !password || !email){
        return res.status(400)
        .json({
            message:"Please provide name, email and password"
        })
    }
    try{
        const existinguser = await User.findOne({
            where:{email}
        });
        if(existinguser){
            return res.status(400)
            .json({
                message:"user already exists with this email"
            })
        }
        const hashedPassword = bcrypt.hashSync(password,10);
        const user = await User.create({
            name,
            email,
            role,
            password:hashedPassword,
        })
        res.status(201).json({
            message:"User registered successfully",
            data:user
        })
    }catch(err){
        res.status(500).json({
            message:"Internal Server Error"
        })
    }
});


const login = catchAsync(async (req, res, next) => {
    try {
        const {email, password}=req.body;
    const existinguser= await User.findOne({
        where:{email}
    });
    if(!existinguser){
        return res.status(404)
        .json({
            message:"User not found"
        })
    }
    const isMatch = await bcrypt.compare(password, existinguser.password);
    if(!isMatch){
        return res.status(400)
        .json({
            message:"Invalid credentials"
        })
    }
    const token = jwt.sign(
        {
            id:existinguser.id,
            role:existinguser.role  
        },
        process.env.PRIVATE_KEY,
        {
            expiresIn:"1h"
        }
    )
    res.status(200).json({
       message: "Login successful",
      success: true,
      jwtToken: token,
      _id: existinguser._id,
      name: existinguser.name,
      role: existinguser.role
    })
    } catch (error) {
        console.log("Error during login:",error)
    }
});
const getprofile = catchAsync(async(req, res, next) => {
    try {
        const user = await User.findByPk(req.user.id);
        if(!user){
            return res.status(404)
            .json({
                message:"User not found"
            })
        }
    } catch (error){
        return res.status(400)
        .json({
            success:false,
            message: error.message
        })
    }
});
module.exports ={
    register,
    login,
    getprofile
}