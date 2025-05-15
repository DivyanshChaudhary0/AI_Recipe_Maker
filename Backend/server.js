
const app = require("./src/app");
const dotenv = require("dotenv")
dotenv.config();

const config = require("./src/config/config");

let port = config.PORT

app.listen(port, function(){
    console.log("app is running on port " + port);
})
