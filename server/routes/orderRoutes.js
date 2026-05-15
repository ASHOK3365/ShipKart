const express = require('express');
const { 
  addOrderItems, 
  getOrderById, 
  updateOrderToPaid, 
  getMyOrders 
} = require('../controllers/orderController');
const { protect, authorize } = require('../middlewares/authMiddleware');

const router = express.Router();

router.route('/')
  .post(protect, addOrderItems)
  .get(protect, authorize('admin'), (req, res) => {
    // Admin list all orders placeholder
    res.send('Admin order list');
  });

router.route('/myorders').get(protect, getMyOrders);
router.route('/:id').get(protect, getOrderById);
router.route('/:id/pay').put(protect, updateOrderToPaid);

module.exports = router;
