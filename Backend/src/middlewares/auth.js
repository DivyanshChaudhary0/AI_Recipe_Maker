
const userModel = require("../models/user.model");

const userAuth = async function(req,res,next){
    try{
        const token = req.cookies.token;

        if(!token){
            return res.status(400).json({
                message: "Token is empty"
            })
        }

        const decoded = userModel.verifyToken(token);
        req.user = decoded;
        next();
    }
    catch(err){
        res.status(404).json({
            message: "Unauthorized"
        })
    }
}

module.exports = {
    userAuth
}