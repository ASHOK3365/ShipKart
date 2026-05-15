const express = require('express');
const { 
  getProducts, 
  getProductBySlug, 
  getProductsByCategory, 
  createProduct 
} = require('../controllers/productController');

const { protect, authorize } = require('../middlewares/authMiddleware');

const router = express.Router();

router.route('/')
  .get(getProducts)
  .post(protect, authorize('seller', 'admin'), createProduct);

router.route('/:slug')
  .get(getProductBySlug);

router.route('/category/:category')
  .get(getProductsByCategory);

module.exports = router;
