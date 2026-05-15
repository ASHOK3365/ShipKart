const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a product title'],
    trim: true,
    maxlength: [100, 'Name can not be more than 100 characters']
  },
  slug: {
    type: String,
    unique: true,
    required: true
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxlength: [1000, 'Description can not be more than 1000 characters']
  },
  longDescription: String,
  category: {
    type: String,
    required: [true, 'Please add a category'],
    enum: ['Grocery', 'Mobiles', 'Electronics', 'Appliances', 'Fashion', 'Beauty', 'Two Wheeler']
  },
  subCategory: String,
  brand: {
    type: String,
    required: [true, 'Please add a brand']
  },
  price: {
    type: Number,
    required: [true, 'Please add a price'],
    min: [0, 'Price must be positive']
  },
  originalPrice: {
    type: Number,
    required: true
  },
  discount: {
    type: Number,
    default: 0
  },
  inventory: {
    type: Number,
    required: [true, 'Please add inventory count'],
    min: 0,
    default: 0
  },
  images: [{
    type: String, // Cloudinary URLs
    required: true
  }],
  variants: [{
    name: String,
    value: String,
    priceAdjustment: { type: Number, default: 0 },
    inventory: { type: Number, default: 0 }
  }],
  specifications: {
    type: Map,
    of: String
  },
  ratings: {
    type: Number,
    min: 0,
    max: 5,
    default: 0
  },
  reviewsCount: {
    type: Number,
    default: 0
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Product', ProductSchema);
