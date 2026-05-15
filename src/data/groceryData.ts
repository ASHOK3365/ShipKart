import { Product } from './products';

// ========================================
// GROCERY — Realistic Indian Quick-Commerce Data
// Verified Unsplash images matched to product type
// ========================================

export const allGroceryProducts: Product[] = [
  // --- FRUITS ---
  {
    id: 'g-1', slug: 'organic-banana-pack', name: 'Organic Robusta Banana', brand: 'FreshNest',
    category: 'Grocery', subCategory: 'Fruits',
    description: 'Naturally ripened, chemical-free bananas from certified organic farms.',
    price: 45, originalPrice: 60, discount: 25, rating: 4.8, reviews: 1240,
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery in 15 mins',
    labels: ['ORGANIC', 'FARM FRESH'], weight: '500g',
    nutritionInfo: { Calories: '89 kcal', Potassium: '358 mg', Carbs: '23g', Fiber: '2.6g' }
  },
  {
    id: 'g-2', slug: 'alphonso-mango', name: 'Ratnagiri Alphonso Mango', brand: 'Nature Basket',
    category: 'Grocery', subCategory: 'Fruits',
    description: 'The King of Mangoes — handpicked from Ratnagiri orchards.',
    price: 899, originalPrice: 1200, discount: 25, rating: 4.9, reviews: 850,
    image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery by Tomorrow',
    labels: ['PREMIUM', 'BEST SELLER'], weight: '1.5kg (6 pcs)', isTrending: true
  },
  {
    id: 'g-3', slug: 'red-apple-washington', name: 'Washington Red Apples', brand: 'Daily Fresh',
    category: 'Grocery', subCategory: 'Fruits',
    description: 'Crisp, sweet and juicy imported Washington apples.',
    price: 249, originalPrice: 299, discount: 16, rating: 4.7, reviews: 2100,
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd07c405d?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery in 15 mins',
    labels: ['IMPORTED'], weight: '1kg'
  },
  {
    id: 'g-4', slug: 'avocado-hass', name: 'Imported Hass Avocado', brand: 'Urban Harvest',
    category: 'Grocery', subCategory: 'Fruits',
    description: 'Creamy Hass avocados, perfect for toast and guacamole.',
    price: 399, originalPrice: 499, discount: 20, rating: 4.6, reviews: 420,
    image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d80b77?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery in 30 mins',
    labels: ['HEALTHY', 'PREMIUM'], weight: '2 pcs'
  },

  // --- VEGETABLES ---
  {
    id: 'g-5', slug: 'fresh-tomatoes', name: 'Farm Fresh Tomatoes', brand: 'FarmRoot',
    category: 'Grocery', subCategory: 'Vegetables',
    description: 'Firm and juicy tomatoes for daily cooking.',
    price: 32, originalPrice: 45, discount: 28, rating: 4.6, reviews: 3400,
    image: 'https://images.unsplash.com/photo-1546470427-0d4db154ceb8?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery in 10 mins',
    labels: ['FARM FRESH'], weight: '1kg'
  },
  {
    id: 'g-6', slug: 'organic-spinach', name: 'Organic Baby Spinach', brand: 'Organic Hub',
    category: 'Grocery', subCategory: 'Vegetables',
    description: 'Fresh organic leafy greens, rich in iron and vitamins.',
    price: 55, originalPrice: 75, discount: 26, rating: 4.7, reviews: 1800,
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery in 15 mins',
    labels: ['ORGANIC', 'HEALTHY'], weight: '250g'
  },
  {
    id: 'g-7', slug: 'broccoli-premium', name: 'Premium Broccoli', brand: 'Green Valley',
    category: 'Grocery', subCategory: 'Vegetables',
    description: 'Nutrient-rich, compact green broccoli heads.',
    price: 120, originalPrice: 150, discount: 20, rating: 4.8, reviews: 540,
    image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery in 20 mins',
    labels: ['PREMIUM', 'HEALTHY'], weight: '300g'
  },

  // --- DAIRY ---
  {
    id: 'g-8', slug: 'amul-milk', name: 'Amul Gold Full Cream Milk', brand: 'Amul',
    category: 'Grocery', subCategory: 'Dairy',
    description: 'Fresh and creamy full cream milk — India\'s favourite.',
    price: 68, originalPrice: 70, discount: 3, rating: 4.9, reviews: 12000,
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery in 10 mins',
    labels: ['BEST SELLER'], weight: '1L', isBestSeller: true
  },
  {
    id: 'g-9', slug: 'greek-yogurt', name: 'Epigamia Greek Yogurt', brand: 'Epigamia',
    category: 'Grocery', subCategory: 'Dairy',
    description: 'High protein, low fat natural Greek yogurt.',
    price: 60, originalPrice: 75, discount: 20, rating: 4.7, reviews: 3200,
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery in 15 mins',
    labels: ['HEALTHY', 'PREMIUM'], weight: '90g'
  },
  {
    id: 'g-10', slug: 'organic-eggs', name: 'Free Range Organic Eggs', brand: 'Organic Hub',
    category: 'Grocery', subCategory: 'Dairy',
    description: 'Hormone-free, farm-fresh organic eggs.',
    price: 95, originalPrice: 120, discount: 21, rating: 4.8, reviews: 2300,
    image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery by Tomorrow',
    labels: ['ORGANIC'], weight: 'Pack of 6'
  },

  // --- BAKERY & SNACKS ---
  {
    id: 'g-11', slug: 'sourdough-bread', name: 'Artisan Sourdough Bread', brand: 'Baker Street',
    category: 'Grocery', subCategory: 'Bakery',
    description: 'Hand-crafted sourdough with a perfect crust.',
    price: 189, originalPrice: 249, discount: 24, rating: 4.7, reviews: 780,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery in 30 mins',
    labels: ['ARTISAN', 'FRESH TODAY'], weight: '400g'
  },
  {
    id: 'g-12', slug: 'california-almonds', name: 'Premium California Almonds', brand: 'Happilo',
    category: 'Grocery', subCategory: 'Snacks',
    description: 'Slow roasted, lightly salted California almonds.',
    price: 299, originalPrice: 399, discount: 25, rating: 4.9, reviews: 4500,
    image: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery in 15 mins',
    labels: ['PREMIUM', 'BEST SELLER'], weight: '250g', isBestSeller: true
  },

  // --- BEVERAGES ---
  {
    id: 'g-13', slug: 'cold-brew-coffee', name: 'Sleepy Owl Cold Brew', brand: 'Sleepy Owl',
    category: 'Grocery', subCategory: 'Beverages',
    description: '12-hour steeped smooth cold brew from Arabica beans.',
    price: 199, originalPrice: 250, discount: 20, rating: 4.7, reviews: 920,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery in 20 mins',
    labels: ['PREMIUM'], weight: '200ml'
  },
  {
    id: 'g-14', slug: 'green-tea', name: 'Organic Green Tea', brand: 'Organic India',
    category: 'Grocery', subCategory: 'Beverages',
    description: 'Pure Tulsi Green Tea with natural antioxidants.',
    price: 210, originalPrice: 275, discount: 23, rating: 4.6, reviews: 5600,
    image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery in 15 mins',
    labels: ['ORGANIC', 'HEALTHY'], weight: '25 bags'
  },

  // --- PANTRY ---
  {
    id: 'g-15', slug: 'organic-honey', name: 'Wild Forest Organic Honey', brand: 'Dabur',
    category: 'Grocery', subCategory: 'Pantry',
    description: 'Unprocessed, raw forest honey — 100% pure.',
    price: 350, originalPrice: 450, discount: 22, rating: 4.8, reviews: 3200,
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery by Tomorrow',
    labels: ['ORGANIC', 'PREMIUM'], weight: '500g'
  },
  {
    id: 'g-16', slug: 'peanut-butter', name: 'Alpino Natural Peanut Butter', brand: 'Alpino',
    category: 'Grocery', subCategory: 'Pantry',
    description: '100% roasted peanuts, no added oil or sugar.',
    price: 349, originalPrice: 449, discount: 22, rating: 4.7, reviews: 6800,
    image: 'https://images.unsplash.com/photo-1612187256592-a93824e5f0e4?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery in 30 mins',
    labels: ['HEALTHY', 'BEST SELLER'], weight: '1kg', isBestSeller: true
  },
];
