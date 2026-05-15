import { Product } from './products';

// ========================================
// ELECTRONICS — Real Audio/Tech Products
// Verified Unsplash images matched to product type
// ========================================

export const allElectronicsProducts: Product[] = [
  // --- HEADPHONES ---
  {
    id: 'e-1', slug: 'sony-wh1000xm5', name: 'Sony WH-1000XM5', brand: 'Sony',
    category: 'Electronics', subCategory: 'Headphones',
    description: 'Industry-leading noise cancellation with 30hr battery.',
    price: 24990, originalPrice: 34990, discount: 29, rating: 4.9, reviews: 15100,
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery by Tomorrow',
    labels: ['BEST SELLER', 'PREMIUM'], warranty: '1 Year Sony Warranty', isBestSeller: true,
    specifications: { Driver: '30mm', ANC: 'Yes (Auto NC Optimizer)', Battery: '30 Hours', Bluetooth: '5.3', Weight: '250g' }
  },
  {
    id: 'e-2', slug: 'airpods-pro-2', name: 'Apple AirPods Pro 2', brand: 'Apple',
    category: 'Electronics', subCategory: 'Earbuds',
    description: 'Active Noise Cancellation, Adaptive Audio, USB-C.',
    price: 24900, originalPrice: 24900, discount: 0, rating: 4.8, reviews: 12400,
    image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery in 2 hours',
    labels: ['PREMIUM', 'BEST SELLER'], warranty: '1 Year Apple Warranty', isBestSeller: true,
    specifications: { ANC: 'Active + Transparency', Battery: '6hrs (30hrs with case)', Chip: 'H2', Water: 'IPX4' }
  },
  {
    id: 'e-3', slug: 'bose-qc-ultra', name: 'Bose QuietComfort Ultra', brand: 'Bose',
    category: 'Electronics', subCategory: 'Headphones',
    description: 'Immersive spatial audio with world-class noise cancellation.',
    price: 29990, originalPrice: 34900, discount: 14, rating: 4.8, reviews: 4200,
    image: 'https://images.unsplash.com/photo-1546435770-a3e426ff472b?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery by Tomorrow',
    labels: ['PREMIUM'], warranty: '1 Year Bose Warranty',
    specifications: { ANC: 'World-Class', Audio: 'Immersive Spatial', Battery: '24 Hours', Bluetooth: '5.3' }
  },

  // --- SPEAKERS ---
  {
    id: 'e-4', slug: 'jbl-charge-5', name: 'JBL Charge 5', brand: 'JBL',
    category: 'Electronics', subCategory: 'Speakers',
    description: 'Portable Bluetooth speaker with 20hr playtime and IP67.',
    price: 14999, originalPrice: 18999, discount: 21, rating: 4.7, reviews: 8200,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery by Tomorrow',
    labels: ['BEST SELLER'], warranty: '1 Year JBL Warranty', isBestSeller: true,
    specifications: { Output: '40W', Battery: '20 Hours', Waterproof: 'IP67', Driver: '52mm x 70mm' }
  },
  {
    id: 'e-5', slug: 'marshall-stanmore-iii', name: 'Marshall Stanmore III', brand: 'Marshall',
    category: 'Electronics', subCategory: 'Speakers',
    description: 'Iconic design meets powerful room-filling sound.',
    price: 39999, originalPrice: 44999, discount: 11, rating: 4.8, reviews: 1800,
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery in 3 days',
    labels: ['PREMIUM'], warranty: '2 Year Marshall Warranty',
    specifications: { Output: '80W', Connectivity: 'Bluetooth 5.2 + 3.5mm', Design: 'Iconic Retro' }
  },

  // --- GAMING ---
  {
    id: 'e-6', slug: 'logitech-g502x', name: 'Logitech G502 X Plus', brand: 'Logitech',
    category: 'Electronics', subCategory: 'Gaming',
    description: 'Wireless gaming mouse with LIGHTFORCE hybrid switches.',
    price: 13995, originalPrice: 16495, discount: 15, rating: 4.7, reviews: 3400,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery by Tomorrow',
    labels: ['GAMING'], warranty: '2 Year Logitech Warranty',
    specifications: { Sensor: 'HERO 25K', DPI: '25,600', Battery: '130 Hours', Weight: '106g' }
  },
  {
    id: 'e-7', slug: 'logitech-mx-keys', name: 'Logitech MX Keys S', brand: 'Logitech',
    category: 'Electronics', subCategory: 'Peripherals',
    description: 'Premium wireless keyboard with smart backlighting.',
    price: 12495, originalPrice: 14995, discount: 17, rating: 4.8, reviews: 2600,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery in 2 days',
    labels: ['PREMIUM'], warranty: '2 Year Warranty',
    specifications: { Type: 'Low-profile', Connectivity: 'Bluetooth + USB', Battery: '10 Days', Backlit: 'Smart Proximity' }
  },

  // --- TABLETS ---
  {
    id: 'e-8', slug: 'ipad-air-m2', name: 'Apple iPad Air M2', brand: 'Apple',
    category: 'Electronics', subCategory: 'Tablets',
    description: 'M2 chip, 11" Liquid Retina, Apple Pencil Pro support.',
    price: 59900, originalPrice: 59900, discount: 0, rating: 4.8, reviews: 3400,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery by Tomorrow',
    labels: ['PREMIUM', 'NEW LAUNCH'], isTrending: true,
    specifications: { Chip: 'Apple M2', Display: '11" Liquid Retina', Storage: '128GB', Camera: '12MP Wide' }
  },

  // --- MONITORS ---
  {
    id: 'e-9', slug: 'samsung-odyssey-g5', name: 'Samsung Odyssey G5 27"', brand: 'Samsung',
    category: 'Electronics', subCategory: 'Monitors',
    description: '27" QHD 165Hz curved gaming monitor.',
    price: 22990, originalPrice: 29990, discount: 23, rating: 4.6, reviews: 1900,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery in 3 days',
    labels: ['GAMING'], warranty: '3 Year Samsung Warranty',
    specifications: { Resolution: '2560x1440 QHD', Refresh: '165Hz', Panel: 'VA Curved', Response: '1ms' }
  },

  // --- SMARTWATCH ---
  {
    id: 'e-10', slug: 'apple-watch-series-10', name: 'Apple Watch Series 10', brand: 'Apple',
    category: 'Electronics', subCategory: 'Smartwatch',
    description: 'Thinnest Apple Watch ever with advanced health sensors.',
    price: 46900, originalPrice: 46900, discount: 0, rating: 4.8, reviews: 2100,
    image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery by Tomorrow',
    labels: ['NEW LAUNCH', 'PREMIUM'], isTrending: true,
    specifications: { Display: '46mm Always-On OLED', Sensors: 'SpO2, ECG, Temp', Water: '50m', Chip: 'S10 SiP' }
  },
];
