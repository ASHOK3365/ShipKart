import { Product } from './products';

// ========================================
// APPLIANCES — Real Home Appliance Brands
// Verified Unsplash images matched to product type
// ========================================

export const allApplianceProducts: Product[] = [
  // --- REFRIGERATORS ---
  {
    id: 'a-1', slug: 'samsung-french-door', name: 'Samsung 670L French Door Refrigerator', brand: 'Samsung',
    category: 'Appliances', subCategory: 'Refrigerators',
    description: 'Spacious French door with Twin Cooling Plus technology.',
    price: 184999, originalPrice: 209999, discount: 12, rating: 4.7, reviews: 2400,
    image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery in 5-7 days',
    labels: ['PREMIUM'], warranty: '10 Year Compressor Warranty', energyRating: 3,
    specifications: { Capacity: '670L', Type: 'French Door', Cooling: 'Twin Cooling Plus', Inverter: 'Digital Inverter' }
  },
  {
    id: 'a-2', slug: 'lg-double-door', name: 'LG 340L Frost Free Double Door', brand: 'LG',
    category: 'Appliances', subCategory: 'Refrigerators',
    description: 'Smart Inverter compressor with Door Cooling+.',
    price: 38990, originalPrice: 46990, discount: 17, rating: 4.6, reviews: 8900,
    image: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery in 3-5 days',
    labels: ['BEST SELLER'], warranty: '10 Year Compressor Warranty', energyRating: 4, isBestSeller: true,
    specifications: { Capacity: '340L', Type: 'Double Door', Cooling: 'Door Cooling+', Inverter: 'Smart Inverter' }
  },

  // --- WASHING MACHINES ---
  {
    id: 'a-3', slug: 'lg-front-load-washer', name: 'LG 8kg Front Load Washer', brand: 'LG',
    category: 'Appliances', subCategory: 'Washing Machines',
    description: 'AI DD motor detects fabric and optimizes wash cycles.',
    price: 42990, originalPrice: 54990, discount: 22, rating: 4.7, reviews: 5600,
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery in 5-7 days',
    labels: ['AI POWERED'], warranty: '2 Year + 10 Year Motor', energyRating: 5,
    specifications: { Capacity: '8kg', Type: 'Front Load', Motor: 'AI DD Inverter', Speed: '1400 RPM' }
  },
  {
    id: 'a-4', slug: 'samsung-top-load', name: 'Samsung 7kg Top Load Washer', brand: 'Samsung',
    category: 'Appliances', subCategory: 'Washing Machines',
    description: 'Wobble technology for gentle yet powerful cleaning.',
    price: 18990, originalPrice: 24990, discount: 24, rating: 4.5, reviews: 7200,
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery in 3-5 days',
    labels: ['VALUE PICK', 'BEST SELLER'], warranty: '2 Year + 5 Year Motor', energyRating: 4, isBestSeller: true,
    specifications: { Capacity: '7kg', Type: 'Top Load', Motor: 'Digital Inverter', Pulsator: 'Wobble' }
  },

  // --- AIR CONDITIONERS ---
  {
    id: 'a-5', slug: 'daikin-1-5ton-inverter', name: 'Daikin 1.5 Ton 5-Star Inverter AC', brand: 'Daikin',
    category: 'Appliances', subCategory: 'Air Conditioners',
    description: 'Premium 5-star inverter split AC with Coanda airflow.',
    price: 46990, originalPrice: 56990, discount: 18, rating: 4.8, reviews: 4100,
    image: 'https://images.unsplash.com/photo-1631545806609-45df03ace523?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery + Installation in 5-7 days',
    labels: ['5 STAR', 'PREMIUM'], warranty: '10 Year Compressor Warranty', energyRating: 5,
    specifications: { Capacity: '1.5 Ton', Rating: '5 Star', Refrigerant: 'R-32', Compressor: 'Swing Inverter' }
  },
  {
    id: 'a-6', slug: 'voltas-1-5ton-ac', name: 'Voltas 1.5 Ton 3-Star Split AC', brand: 'Voltas',
    category: 'Appliances', subCategory: 'Air Conditioners',
    description: 'Affordable cooling with copper condenser and anti-dust filter.',
    price: 32999, originalPrice: 42999, discount: 23, rating: 4.4, reviews: 9800,
    image: 'https://images.unsplash.com/photo-1631545806609-45df03ace523?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery + Installation in 3-5 days',
    labels: ['VALUE PICK', 'BEST SELLER'], warranty: '5 Year Compressor Warranty', energyRating: 3, isBestSeller: true,
    specifications: { Capacity: '1.5 Ton', Rating: '3 Star', Condenser: 'Copper', Filter: 'Anti-Dust' }
  },

  // --- KITCHEN ---
  {
    id: 'a-7', slug: 'philips-air-fryer', name: 'Philips Air Fryer HD9270', brand: 'Philips',
    category: 'Appliances', subCategory: 'Kitchen',
    description: 'Rapid Air technology — crispy frying with up to 90% less fat.',
    price: 7999, originalPrice: 9999, discount: 20, rating: 4.6, reviews: 6200,
    image: 'https://images.unsplash.com/photo-1585515320310-259814833e62?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery by Tomorrow',
    labels: ['BEST SELLER'], warranty: '2 Year Philips Warranty', isBestSeller: true,
    specifications: { Capacity: '4.1L', Technology: 'Rapid Air', Power: '1400W', Temp: 'Up to 200°C' }
  },
  {
    id: 'a-8', slug: 'instant-pot-duo', name: 'Instant Pot Duo 7-in-1', brand: 'Instant Pot',
    category: 'Appliances', subCategory: 'Kitchen',
    description: 'Pressure cooker, slow cooker, rice cooker, steamer & more.',
    price: 8499, originalPrice: 11999, discount: 29, rating: 4.7, reviews: 4500,
    image: 'https://images.unsplash.com/photo-1585515320310-259814833e62?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery in 2 days',
    labels: ['MULTI-USE'], warranty: '1 Year Warranty',
    specifications: { Capacity: '6L', Functions: '7-in-1', Programs: '13 Smart Programs', Power: '1000W' }
  },

  // --- VACUUM ---
  {
    id: 'a-9', slug: 'dyson-v15', name: 'Dyson V15 Detect Absolute', brand: 'Dyson',
    category: 'Appliances', subCategory: 'Vacuum Cleaners',
    description: 'Laser reveals invisible dust. Most powerful suction.',
    price: 62900, originalPrice: 62900, discount: 0, rating: 4.9, reviews: 1800,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery in 5 days',
    labels: ['LUXURY', 'PREMIUM'],  warranty: '2 Year Dyson Warranty',
    specifications: { Suction: '230 AW', Runtime: '60 min', Filtration: 'Whole-machine HEPA', Display: 'LCD Piezo Sensor' }
  },

  // --- TV ---
  {
    id: 'a-10', slug: 'sony-bravia-55', name: 'Sony Bravia 55" 4K OLED', brand: 'Sony',
    category: 'Appliances', subCategory: 'Televisions',
    description: 'Cognitive Processor XR with perfect blacks and 120Hz.',
    price: 129990, originalPrice: 149990, discount: 13, rating: 4.8, reviews: 2400,
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery in 5-7 days',
    labels: ['PREMIUM'], warranty: '3 Year Sony Warranty',
    specifications: { Size: '55"', Panel: '4K OLED', Refresh: '120Hz', Processor: 'Cognitive XR', HDR: 'Dolby Vision + Atmos' }
  },
];
