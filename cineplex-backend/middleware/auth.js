const jwt = require("jsonwebtoken");

const {ratelimit} = require("express-rate-limit");
const catchAsync = require("../utils/catchAsync");

const loginToken = catchAsync(async(req, res, next) => {
    const token = req.headers.authorization;
    if(!token){
        return res.status(403)
        .json({
            message:"Access denied. No token provided."
        })
    }
    const accessToken = token.split(" ")[1];
    jwt.verify(accessToken,process.env.PRIVATE_KEY,(err,decodeToken)=>{
        if (err) {
            return res.status(401)
            .json(({
                message:"Invalid token."
            }))
        } else {
            req.user = decodeToken;
            next();
        }
    })
});

const refreshToken = catchAsync(async (req, res, next) => {
  const refresh_token = req.cookies.refreshToken;

  if (!refresh_token) {
    return res.status(401).json({
      message: "Refresh token missing"
    });
  }

  const decoded = jwt.verify(
    refresh_token,
    process.env.REFRESH_SECRET
  );

  req.user = decoded;
  next();
});

module.exports = {
    loginToken,
    refreshToken
}