const errors = "Opps! Something went wrong. Please try again later.";

const success=(res,data , status= 200)=>{
    return res.status(status).json({
        status: 'success',
        data
    }); 
}

const validation =(res, message)=>{
     return res.status(400).json({
        status: 'fail',
        message
    }); 
}
module.exports={
    errors:errors,
    success,
    validation
}