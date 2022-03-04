const express = require("express");
const router = express.Router();

const { 
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    getProduct, 
    getAdminProducts
} = require("../controllers/productController");

const { isAuthenticatedUser } = require("../middleware/auth");


router.route('/products').get(getAllProducts);
router.route('/product/:id').get(getProduct);

router.route('/admin/products').get(isAuthenticatedUser, getAdminProducts);
router.route('/admin/product/new').post(createProduct);
router.route('/admin/product/:id').put(updateProduct).delete(deleteProduct);

module.exports = router