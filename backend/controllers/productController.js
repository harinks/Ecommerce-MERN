const productSchema = require("../models/productModel")

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
        return res.status(404).json({
            success:false,
            message:"Product not found"
        })
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
        return res.status(404).json({
            success:false,
            message:"Product not found"
        })
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
        return res.status(404).json({
            success:false,
            message:"Product not found"
        })
    }

    await product.remove();

    res.status(200).json({
        success:true,
        message: "product deleted"
    })
}