import { Product } from './products';

// ========================================
// TWO WHEELERS — Real Indian Two-Wheeler Brands
// Verified Unsplash images matched to vehicle type
// ========================================

export const allTwoWheelerProducts: Product[] = [
  // --- ELECTRIC ---
  {
    id: 'tw-1', slug: 'ather-450x', name: 'Ather 450X Gen 3', brand: 'Ather Energy',
    category: 'Two Wheeler', subCategory: 'Electric',
    description: 'India\'s quickest electric scooter with touchscreen dashboard.',
    price: 155000, originalPrice: 155000, discount: 0, rating: 4.8, reviews: 2400,
    image: 'https://images.unsplash.com/photo-1558980664-769d59546b3d?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery in 5-7 days',
    labels: ['ELECTRIC', 'BEST SELLER'], isBestSeller: true,
    specifications: { Battery: '3.7 kWh', Range: '105 km', TopSpeed: '90 km/h', Weight: '111.6 kg', Charging: '5.5 hrs (Portable)' }
  },
  {
    id: 'tw-2', slug: 'ola-s1-pro', name: 'Ola S1 Pro', brand: 'Ola Electric',
    category: 'Two Wheeler', subCategory: 'Electric',
    description: 'MoveOS powered smart scooter with 195km range.',
    price: 129999, originalPrice: 139999, discount: 7, rating: 4.3, reviews: 5600,
    image: 'https://images.unsplash.com/photo-1558980664-769d59546b3d?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery in 7-10 days',
    labels: ['ELECTRIC', 'VALUE PICK'],
    specifications: { Battery: '4 kWh', Range: '195 km (Eco)', TopSpeed: '120 km/h', Weight: '125 kg', Charging: '6.5 hrs' }
  },

  // --- CRUISER ---
  {
    id: 'tw-3', slug: 'royal-enfield-classic-350', name: 'Royal Enfield Classic 350', brand: 'Royal Enfield',
    category: 'Two Wheeler', subCategory: 'Cruiser',
    description: 'The timeless classic cruiser reborn with the J-series engine.',
    price: 196000, originalPrice: 196000, discount: 0, rating: 4.9, reviews: 15000,
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery in 10-15 days',
    labels: ['LEGENDARY', 'BEST SELLER'], isBestSeller: true,
    specifications: { Engine: '349 cc', Mileage: '35 kmpl', TopSpeed: '114 km/h', Weight: '195 kg', Fuel: '13L Tank' }
  },
  {
    id: 'tw-4', slug: 'royal-enfield-himalayan-450', name: 'Royal Enfield Himalayan 450', brand: 'Royal Enfield',
    category: 'Two Wheeler', subCategory: 'Adventure',
    description: 'All-new Sherpa 450 engine built for serious adventure touring.',
    price: 285000, originalPrice: 285000, discount: 0, rating: 4.7, reviews: 2100,
    image: 'https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery in 15-20 days',
    labels: ['NEW LAUNCH', 'ADVENTURE'], isTrending: true,
    specifications: { Engine: '452 cc', Mileage: '30 kmpl', TopSpeed: '145 km/h', Weight: '196 kg', Fuel: '17L Tank' }
  },

  // --- SPORTS ---
  {
    id: 'tw-5', slug: 'ktm-duke-390', name: 'KTM 390 Duke', brand: 'KTM',
    category: 'Two Wheeler', subCategory: 'Sports',
    description: 'The corner rocket — aggressive street naked with TFT display.',
    price: 310000, originalPrice: 310000, discount: 0, rating: 4.7, reviews: 4500,
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery in 10-15 days',
    labels: ['SPORTS', 'PERFORMANCE'],
    specifications: { Engine: '373 cc', Power: '43 HP', TopSpeed: '165 km/h', Weight: '171 kg', Fuel: '13.5L Tank' }
  },
  {
    id: 'tw-6', slug: 'yamaha-r15-v4', name: 'Yamaha YZF R15 V4', brand: 'Yamaha',
    category: 'Two Wheeler', subCategory: 'Sports',
    description: 'Track-inspired supersport with variable valve actuation.',
    price: 187000, originalPrice: 187000, discount: 0, rating: 4.6, reviews: 6800,
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery in 7-10 days',
    labels: ['SPORTS', 'BEST SELLER'], isBestSeller: true,
    specifications: { Engine: '155 cc', Power: '18.4 HP', TopSpeed: '136 km/h', Weight: '141 kg', Fuel: '11L Tank' }
  },

  // --- COMMUTER ---
  {
    id: 'tw-7', slug: 'honda-activa-6g', name: 'Honda Activa 6G', brand: 'Honda',
    category: 'Two Wheeler', subCategory: 'Scooter',
    description: 'India\'s best-selling scooter — reliable and fuel efficient.',
    price: 76000, originalPrice: 76000, discount: 0, rating: 4.5, reviews: 25000,
    image: 'https://images.unsplash.com/photo-1558980664-769d59546b3d?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery in 3-5 days',
    labels: ['BEST SELLER', 'COMMUTER'], isBestSeller: true,
    specifications: { Engine: '109.51 cc', Mileage: '60 kmpl', TopSpeed: '83 km/h', Weight: '107 kg', Fuel: '5.3L Tank' }
  },
  {
    id: 'tw-8', slug: 'hero-splendor-plus', name: 'Hero Splendor Plus', brand: 'Hero',
    category: 'Two Wheeler', subCategory: 'Commuter',
    description: 'India\'s most trusted commuter motorcycle — superb mileage.',
    price: 73000, originalPrice: 73000, discount: 0, rating: 4.4, reviews: 32000,
    image: 'https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery in 3-5 days',
    labels: ['VALUE PICK', 'COMMUTER'],
    specifications: { Engine: '97.2 cc', Mileage: '70 kmpl', TopSpeed: '90 km/h', Weight: '112 kg', Fuel: '9.6L Tank' }
  },

  // --- PREMIUM ---
  {
    id: 'tw-9', slug: 'bajaj-pulsar-ns200', name: 'Bajaj Pulsar NS200', brand: 'Bajaj',
    category: 'Two Wheeler', subCategory: 'Sports',
    description: 'Liquid-cooled performance with perimeter frame.',
    price: 142000, originalPrice: 142000, discount: 0, rating: 4.5, reviews: 8200,
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery in 5-7 days',
    labels: ['PERFORMANCE'],
    specifications: { Engine: '199.5 cc', Power: '24.5 HP', TopSpeed: '136 km/h', Weight: '156 kg', Fuel: '12L Tank' }
  },
  {
    id: 'tw-10', slug: 'tvs-jupiter-125', name: 'TVS Jupiter 125', brand: 'TVS',
    category: 'Two Wheeler', subCategory: 'Scooter',
    description: 'Feature-rich family scooter with SmartXonnect tech.',
    price: 82000, originalPrice: 82000, discount: 0, rating: 4.4, reviews: 6400,
    image: 'https://images.unsplash.com/photo-1558980664-769d59546b3d?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery in 3-5 days',
    labels: ['FAMILY SCOOTER'],
    specifications: { Engine: '124.8 cc', Mileage: '52 kmpl', TopSpeed: '95 km/h', Weight: '108 kg', Fuel: '5.8L Tank' }
  },
];
