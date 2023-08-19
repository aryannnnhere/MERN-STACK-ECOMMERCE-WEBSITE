const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

// config
dotenv.config({path:"backend/config/config.env"});


// connecting to datbase
connectDatabase();


// changes needed here
const port =  3000 ||process.env.PORT;
app.listen(port , ()=>{
    console.log(`server is working on http://localhost:${port}`);

})