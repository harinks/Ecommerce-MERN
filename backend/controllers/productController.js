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
exports.getAllProducts = (req,res)=>{
    res.status(200).json({message:"sample route"})
}