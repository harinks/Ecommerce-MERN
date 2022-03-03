const productSchema = require("../models/productModel")
const ErrorHandler = require("../utils/errorhandler");
//create Product - admin
exports.createProduct = async(req,res,next)=>{

    const product = await productSchema.create(req.body);
    res.status(201).json({
        success:true,
        product
    })
}

//get all products
exports.getAllProducts = async(req,res)=>{

    const products = await productSchema.find()
    res.status(200).json({
        success:true,
        products
    })
}

//get single product
exports.getProduct = async(req,res,next)=>{
    let product = await productSchema.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler("Product not found", 404));
    }
    res.status(200).json({
        success:true,
        product
    })
}

//update product - admin
exports.updateProduct = async(req,res,next)=>{
    let product = await productSchema.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler("Product not found", 404));
    }

    product = await productSchema.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    });

    res.status(200).json({
        success:true,
        product
    })
}

//delete product - admin
exports.deleteProduct = async(req,res,next)=>{
    const product = await productSchema.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler("Product not found", 404));
    }

    await product.remove();

    res.status(200).json({
        success:true,
        message: "product deleted"
    })
}