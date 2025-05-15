
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({origin: "*", credentials: true}))
app.use(cookieParser())

module.exports = app;