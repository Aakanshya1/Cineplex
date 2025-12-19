const joi = require('joi');
const  catchAsync = require('../../utils/catchAsync')
const signupvalidation = catchAsync(async (req, res, next) => {
    const schema = joi.object({
        name: joi.string().min(3).max(30).required(),
        email: joi.string().email().required(),
        password: joi.string().min(6).required(),
        role: joi.string().valid("user", "admin").optional()
        
    })
    const { error } = schema.validate(req.body);        
    if (error) {
        return res.status(400).json({
            message: error.details[0].message
        });
    }
    next();
});
const loginvalidation= catchAsync(async (req, res, next) => {
    const schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(6).required()
    });
    const { error } = schema.validate(req.body);        
    if (error) {
        return res.status(400).json({
            message: error.details[0].message
        });
    }   
    next();
});

module.exports = {
    signupvalidation,
    loginvalidation
}