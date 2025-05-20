import app from "./src/app.js";
import dotenv from "dotenv";
import "./src/services/google.service.js";
import connectToDB from "./src/db/db.js";
import config from "./src/config/config.js";

dotenv.config();
connectToDB();

const port = config.PORT;

app.listen(port, function () {
    console.log("app is running on port " + port);
});
