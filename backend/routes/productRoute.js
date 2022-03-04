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

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


router.route('/products').get(getAllProducts);
router.route('/product/:id').get(getProduct);

router.route('/admin/products').get(isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts);
router.route('/admin/product/new').post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);
router.route('/admin/product/:id')
.get(isAuthenticatedUser, authorizeRoles("admin"), getProduct)
.put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct)
.delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);

module.exports = router