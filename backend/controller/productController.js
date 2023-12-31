const Product = require("../models/productModel");


// create Product -- Admin
// changes needed in error handling
exports.createProduct = async (req, res)=>{
    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product
    })
}
// get All products 
exports.getAllProducts = async (req, res)=>{

    const products = await Product.find();
    res.status(200).json({
        success: true,
        products
       });
}

// get product details
exports.getProductDetails = async (req, res)=>{
    const product = await Product.findById(req.params.id)

    if(!product){
    return res.status(500).json({
           success:false,
           message:"product Not found"
    })}
    res.status(200).json({
        success:true,
        product
    });


} 

// update product - ADMIN
exports.updateProduct = async (req,res)=>{
    let product = await Product.findById(req.params.id);
    if(!product){
        return res.status(500).json({
            success:false,
            message:"product Not found"
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id , req.body , {
        new: true,
        runValidators:true, 
        useFindAndModify: false
     });
     res.status(200).json({
        success:true,
        product
     })
}

// delete product 
 exports.deleteProduct = async (req, res, next)=>{
    const product = await Product.findById(req.params.id)

    if(!product){return res.status(500).json({
        success:false,
        message:"product Not found"
    })}

    await product.deleteOne();
    res.status(200).json({
        success:true,
        message:"product Deleted Successfully"
    })

 }