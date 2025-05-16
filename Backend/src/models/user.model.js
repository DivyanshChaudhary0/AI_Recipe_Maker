
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("../config/config");


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: [true, "username is already taken"],
        required: [true, "username is required"],
        minLength: 5,
        maxLength: 40
    },
    email: {
        type: String,
        unique: [true, "email is already taken"],
        required: [true, "email is required"],
    },
    password: {
        type: String,
        select: false
    }
})

userSchema.methods.generateToken = function(){
    return jwt.sign({ _id: this._id, username: this.username, email: this.email }, config.JWT_SECRET, { expiresIn: "7d" })
}

userSchema.statics.verifyToken = function(token){
    if (!token) {
        throw new Error("Token is not defined");
    }

    try {
        const decoded = jwt.verify(token, config.JWT_SECRET);
        return decoded;
    } catch (err) {
        throw new Error("Invalid or expired token");
    }
}

userSchema.statics.hashPassword = async function(password){
    const genSalt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password,genSalt);
}

userSchema.methods.comparePassword = async function(inputPassword){
    if(!inputPassword){
        throw new Error("Password is required");
    }

    return await bcrypt.compare(inputPassword, this.password)
}

const userModel = mongoose.model("user",userSchema)
module.exports = userModel;