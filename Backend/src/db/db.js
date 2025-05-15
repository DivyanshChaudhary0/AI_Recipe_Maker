
const mongoose = require("mongoose");
const config = require("../config/config");

const connectToDB = () => {
    mongoose.connect(config.MONGO_URI)
    .then(() => {
        console.log("Db connected");
    })
    .catch(() => {
        console.log("db not connected");
    })
}

module.exports = connectToDB
