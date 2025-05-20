
import mongoose from "mongoose";
import config from "../config/config.js";

const connectToDB = () => {
    mongoose.connect(config.MONGO_URI)
    .then(() => {
        console.log("Db connected");
    })
    .catch(() => {
        console.log("db not connected");
    })
}

export default connectToDB
