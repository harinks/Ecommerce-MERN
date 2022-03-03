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