import { Product } from './products';

// ========================================
// CLOTHING — Real Fashion Brands
// Verified Unsplash images matched to clothing type
// ========================================

export const allClothingProducts: Product[] = [
  // --- T-SHIRTS ---
  {
    id: 'cl-1', slug: 'nike-dri-fit-tee', name: 'Nike Dri-FIT Training Tee', brand: 'Nike',
    category: 'Clothing', subCategory: 'T-Shirts',
    description: 'Moisture-wicking Dri-FIT fabric for intense workouts.',
    price: 1795, originalPrice: 2495, discount: 28, rating: 4.6, reviews: 3200,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery in 3 days',
    labels: ['BEST SELLER'], colors: ['#000000', '#FFFFFF', '#1a1a2e'],
    specifications: { Material: '100% Recycled Polyester', Fit: 'Standard', Care: 'Machine Wash' }, isBestSeller: true
  },
  {
    id: 'cl-2', slug: 'adidas-trefoil-tee', name: 'Adidas Originals Trefoil Tee', brand: 'Adidas',
    category: 'Clothing', subCategory: 'T-Shirts',
    description: 'Classic cotton tee with the iconic Trefoil logo.',
    price: 1999, originalPrice: 2799, discount: 29, rating: 4.5, reviews: 2800,
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery in 2 days',
    labels: ['ICONIC'], colors: ['#000000', '#FFFFFF', '#1a5276'],
    specifications: { Material: '100% Cotton', Fit: 'Regular', Care: 'Machine Wash' }
  },

  // --- SNEAKERS ---
  {
    id: 'cl-3', slug: 'nike-air-max-270', name: 'Nike Air Max 270', brand: 'Nike',
    category: 'Clothing', subCategory: 'Sneakers',
    description: 'Iconic Air Max with the tallest Air unit for all-day comfort.',
    price: 12995, originalPrice: 14995, discount: 13, rating: 4.8, reviews: 8200,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery in 3 days',
    labels: ['ICONIC', 'BEST SELLER'], colors: ['#c0392b', '#2c3e50', '#ecf0f1'], isBestSeller: true,
    specifications: { Sole: 'Air Max Unit', Upper: 'Mesh + Synthetic', Closure: 'Lace-up' }
  },
  {
    id: 'cl-4', slug: 'adidas-ultraboost', name: 'Adidas Ultraboost Light', brand: 'Adidas',
    category: 'Clothing', subCategory: 'Sneakers',
    description: 'Lightest Ultraboost ever with BOOST midsole.',
    price: 16999, originalPrice: 19999, discount: 15, rating: 4.7, reviews: 5400,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery in 4 days',
    labels: ['PREMIUM'], colors: ['#000000', '#FFFFFF'],
    specifications: { Sole: 'BOOST + LEP', Upper: 'Primeknit+', Weight: '280g' }
  },
  {
    id: 'cl-5', slug: 'puma-rs-x', name: 'Puma RS-X Reinvention', brand: 'Puma',
    category: 'Clothing', subCategory: 'Sneakers',
    description: 'Retro-futuristic chunky sneaker with RS cushioning.',
    price: 8999, originalPrice: 10999, discount: 18, rating: 4.5, reviews: 3100,
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery in 3 days',
    labels: ['TRENDING'], colors: ['#FFFFFF', '#3498db', '#e74c3c'], isTrending: true,
    specifications: { Sole: 'RS Cushioning', Upper: 'Mesh + Leather', Style: 'Retro Runner' }
  },

  // --- JEANS ---
  {
    id: 'cl-6', slug: 'levis-511-slim', name: "Levi's 511 Slim Fit Jeans", brand: "Levi's",
    category: 'Clothing', subCategory: 'Jeans',
    description: 'Classic slim fit jeans with stretch comfort.',
    price: 2799, originalPrice: 3999, discount: 30, rating: 4.6, reviews: 6700,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery in 3 days',
    labels: ['CLASSIC', 'BEST SELLER'], colors: ['#1a1a2e', '#2c3e50', '#34495e'], isBestSeller: true,
    specifications: { Material: '99% Cotton, 1% Elastane', Fit: 'Slim', Rise: 'Mid-Rise', Wash: 'Medium Indigo' }
  },

  // --- HOODIES ---
  {
    id: 'cl-7', slug: 'nike-tech-fleece', name: 'Nike Tech Fleece Hoodie', brand: 'Nike',
    category: 'Clothing', subCategory: 'Hoodies',
    description: 'Lightweight warmth with a sleek, modern silhouette.',
    price: 7495, originalPrice: 9995, discount: 25, rating: 4.7, reviews: 4300,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery in 4 days',
    labels: ['PREMIUM'], colors: ['#2c3e50', '#7f8c8d', '#000000'],
    specifications: { Material: 'Nike Tech Fleece', Fit: 'Slim', Hood: 'Adjustable Drawcord' }
  },
  {
    id: 'cl-8', slug: 'hm-oversized-hoodie', name: 'H&M Oversized Cotton Hoodie', brand: 'H&M',
    category: 'Clothing', subCategory: 'Hoodies',
    description: 'Relaxed oversized hoodie in soft organic cotton.',
    price: 1499, originalPrice: 1999, discount: 25, rating: 4.4, reviews: 5600,
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery in 3 days',
    labels: ['VALUE PICK'], colors: ['#bdc3c7', '#2c3e50', '#8e44ad'],
    specifications: { Material: 'Organic Cotton', Fit: 'Oversized', Care: 'Machine Wash 40°' }
  },

  // --- JACKETS ---
  {
    id: 'cl-9', slug: 'zara-leather-jacket', name: 'Zara Faux Leather Biker Jacket', brand: 'Zara',
    category: 'Clothing', subCategory: 'Jackets',
    description: 'Premium faux leather jacket with asymmetric zip.',
    price: 5990, originalPrice: 7990, discount: 25, rating: 4.6, reviews: 1900,
    image: 'https://images.unsplash.com/photo-1551028150-64b9f398f678?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery in 5 days',
    labels: ['PREMIUM'], colors: ['#000000', '#8B4513'],
    specifications: { Material: 'Faux Leather', Fit: 'Slim', Closure: 'Asymmetric Zip' }
  },

  // --- FORMAL ---
  {
    id: 'cl-10', slug: 'levis-trucker-jacket', name: "Levi's Trucker Jacket", brand: "Levi's",
    category: 'Clothing', subCategory: 'Jackets',
    description: 'The original denim jacket — an American icon since 1967.',
    price: 4999, originalPrice: 6999, discount: 29, rating: 4.7, reviews: 3800,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery in 4 days',
    labels: ['ICONIC', 'CLASSIC'], colors: ['#2c3e50', '#5dade2'],
    specifications: { Material: '100% Cotton Denim', Fit: 'Classic', Pockets: '4 Pockets' }
  },
];
