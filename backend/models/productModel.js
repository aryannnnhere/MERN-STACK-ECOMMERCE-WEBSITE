const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: {
        type:String,
        required: [true ,"Please Enter product Name"],
        trim:true
    },
    description:{
        type:String,
        required: [true ,"Please Enter product Description"]
    },
    price:{
        type:Number,
        required: [true ,"Please Enter product price"],
        maxLength: [true , "Price cannot exceed 8 figures"]
    }, 
    rating:{
        type:Number,
        default:0
    },
    images:[
        {
            public_id:{
                type:String, 
                required:true
            },
            url:{
                type:String, 
                required:true
            }
        }
    ],
    category:{ 
        type: String,
        required: [true , "please enter product category"]
    },
    stock: {
        type: String,
        required: [true , "please enter product stock"],
        maxLength: [4 , "stock caant exceed 4 characters"],
        default:1
    },
    numOfreviews: {
        type:Number,
        default:0
    },
    reviews: [ 
        {
            name: { 
                type:String,
                required: true 
            }, 
            rating: {
                type: Number,
                required:true
            },
            Comment: {
                type: Number,
                required:true
            }
        }
    ], 
    createdAt: {
        type:Date, 
        default: Date.now
    }
})

module.exports = mongoose.model("Product" , productSchema);