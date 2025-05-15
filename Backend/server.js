
const app = require("./src/app");

let port = 3000

app.listen(port, function(){
    console.log("app is running on port" + port);
})