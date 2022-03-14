const productSchema = require("../models/productModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Apifeatures = require("../utils/apifeatures");

//create Product - admin
exports.createProduct = catchAsyncErrors(async (req, res, next) => {

    req.body.user = req.user.id;

    const product = await productSchema.create(req.body);
    res.status(201).json({
        success: true,
        product
    });
});

//get all products
exports.getAllProducts = catchAsyncErrors(async (req, res) => {

    const resultPerPage = 8;
    const productsCount = await productSchema.countDocuments();

    const apifeatures = new Apifeatures(productSchema.find(), req.query)
        .search()
        .filter()
        .pagination(resultPerPage);

    const products = await apifeatures.query;
    res.status(200).json({
        success: true,
        products,
        productsCount,
        resultPerPage
    });
});

// get all product (Admin)
exports.getAdminProducts = catchAsyncErrors(async (req, res, next) => {
    const products = await productSchema.find();

    res.status(200).json({
        success: true,
        products,
    });
});

//get single product
exports.getProduct = catchAsyncErrors(async (req, res, next) => {
    let product = await productSchema.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
    }
    res.status(200).json({
        success: true,
        product
    });
});

//update product - admin
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
    let product = await productSchema.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
    }

    product = await productSchema.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        product
    });
});

//delete product - admin
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
    const product = await productSchema.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
    }

    await product.remove();

    res.status(200).json({
        success: true,
        message: "product deleted"
    });
});

// Create New Review or Update the review
exports.createProductReview = catchAsyncErrors(async (req, res, next) => {
    const { rating, comment, productId } = req.body;

    const review = {
        user: req.user._id,
        name: req.user.name,
        rating: Number(rating),
        comment,
    };

    const product = await productSchema.findById(productId);

    const isReviewed = product.reviews.find(
        (rev) => rev.user.toString() === req.user._id.toString()
    );

    if (isReviewed) {
        product.reviews.forEach((rev) => {
            if (rev.user.toString() === req.user._id.toString())
                (rev.rating = rating), (rev.comment = comment);
        });
    } else {
        product.reviews.push(review);
        product.numOfReviews = product.reviews.length;
    }

    let avg = 0;

    product.reviews.forEach((rev) => {
        avg += rev.rating;
    });

    product.ratings = avg / product.reviews.length;

    await product.save({ validateBeforeSave: false });

    res.status(200).json({
        success: true,
    });
});

// Get All Reviews of a product
exports.getProductReviews = catchAsyncErrors(async (req, res, next) => {
    const product = await productSchema.findById(req.query.productId);

    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
    }

    res.status(200).json({
        success: true,
        reviews: product.reviews,
    });
});

// Delete Review
exports.deleteReview = catchAsyncErrors(async (req, res, next) => {
    const product = await productSchema.findById(req.query.productId);

    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
    }

    const reviews = product.reviews.filter(
        (rev) => rev._id.toString() !== req.query.id.toString()
    );

    let avg = 0;

    reviews.forEach((rev) => {
        avg += rev.rating;
    });

    let ratings = 0;

    if (reviews.length === 0) {
        ratings = 0;
    } else {
        ratings = avg / reviews.length;
    }

    const numOfReviews = reviews.length;

    await productSchema.findByIdAndUpdate(
        req.query.productId,
        {
            reviews,
            ratings,
            numOfReviews,
        },
        {
            new: true,
            runValidators: true,
            useFindAndModify: false,
        }
    );

    res.status(200).json({
        success: true,
    });
});
