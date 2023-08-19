const mongoose = require("mongoose");

const connectDatabase= ()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/Ecommerce",{useNewURLParser:true , useUnifiedTopology:true}).then((data)=>{ 
    console.log(`mongoDb connected with server: ${data.connection.host}`);
    }).catch((err)=>{
    console.log(err);
    })
}

module.exports = connectDatabase;