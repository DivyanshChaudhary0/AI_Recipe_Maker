
const userModel = require("../models/user.model");

const registerUser = async function(req,res){
    try{
        const {username,email,password} = req.body;

        if(!username || !email || !password){
            return res.status(400).json({
                message: "Please fill all data"
            })
        }

        const isAlredayExist = await userModel.findOne({
            $or: [{username},{email}]
        })

        if(isAlredayExist){
            return res.status(400).json({
                message: "User already exist"
            })
        }

        const hashedPassword = await userModel.hashPassword(password);

        const user = await userModel.create({
            username,
            email,
            password: hashedPassword
        })

        const token = user.generateToken();

        res.cookie("token", token, {
            httpOnly: true,       
            secure: true,         
            sameSite: "None", 
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        delete user._doc.password;

        res.status(201).json({
            message: "User created successfully",
            user
        })

    }
    catch(err){
        return res.status(500).json({
            error: err.message,
            message: "Internal server error"
        })
    }
}

const loginUser = async function(req,res){
    try{
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(400).json({
                message: "Please fill all data"
            })
        }

        const user = await userModel.findOne({email}).select("+password");

        if(!user){
            return res.status(404).json({
                message: "Invalid email or password"
            })
        }

        const isMatched = user.comparePassword(password);

        if(!isMatched){
            return res.status(404).json({
                message: "Invalid email or password"
            })
        }

        delete user._doc.password;

        res.status(200).json({
            user,
            message: "User logged in"
        })

    }
    catch(err){
        res.status(500).json({
            error: err.message,
            message: "Internal server error"
        })
    }
}

const getUser = async function(req,res){
    try{

    }
    catch(err){
        res.status(500).json({
            error: err.message,
            message: "Internal server error"
        })
    }
}

module.exports = {
    registerUser,
    loginUser,
    getUser
}
