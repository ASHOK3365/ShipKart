import { Product } from './products';

export interface Smartphone extends Product {
  modelName: string;
  launchYear: number;
  processor: string;
  ram: string;
  storage: string;
  displaySize: string;
  refreshRate: string;
  cameraSpecs: string;
  battery: string;
  chargingSpeed: string;
  os: string;
  colors: string[];
  variants: { ram: string; storage: string; price: number }[];
  exchangeOffer?: string;
  emiAvailable: boolean;
}

export const mobileProducts: Smartphone[] = [
  // 1. APPLE
  {
    id: 'm-apple-1',
    slug: 'iphone-16-pro-max',
    name: 'Apple iPhone 16 Pro Max',
    modelName: 'iPhone 16 Pro Max',
    brand: 'Apple',
    category: 'Mobile',
    description: 'The ultimate iPhone with Titanium design and A18 Pro chip.',
    longDescription: 'The iPhone 16 Pro Max features a stunning Grade 5 Titanium design with a new refined micro-blasted finish. Powered by the A18 Pro chip, it delivers unprecedented performance and efficiency. The new 48MP Fusion camera with a second-generation quad-pixel sensor enables 4K 120fps Dolby Vision recording.',
    price: 159900,
    originalPrice: 159900,
    discount: 0,
    rating: 4.9,
    reviews: 2450,
    image: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&w=800&q=80',
    availability: 'in-stock',
    deliveryDate: 'Delivery by Tomorrow',
    labels: ['NEW LAUNCH', 'FLAGSHIP', 'PREMIUM PICK'],
    launchYear: 2024,
    processor: 'A18 Pro Chip',
    ram: '8GB',
    storage: '256GB',
    displaySize: '6.9-inch Super Retina XDR',
    refreshRate: '120Hz ProMotion',
    cameraSpecs: '48MP + 48MP + 12MP Triple Camera',
    battery: '4676 mAh',
    chargingSpeed: '45W Wired',
    os: 'iOS 18',
    colors: ['Desert Titanium', 'Natural Titanium', 'White Titanium', 'Black Titanium'],
    variants: [
      { ram: '8GB', storage: '256GB', price: 159900 },
      { ram: '8GB', storage: '512GB', price: 179900 },
      { ram: '8GB', storage: '1TB', price: 199900 }
    ],
    emiAvailable: true,
    exchangeOffer: 'Up to ₹60,000 off'
  },
  {
    id: 'm-apple-2',
    slug: 'iphone-16-pro',
    name: 'Apple iPhone 16 Pro',
    modelName: 'iPhone 16 Pro',
    brand: 'Apple',
    category: 'Mobile',
    description: 'Pro performance in a compact titanium design.',
    price: 119900,
    originalPrice: 119900,
    discount: 0,
    rating: 4.8,
    reviews: 1800,
    image: 'https://images.unsplash.com/photo-1592890288564-76628a30a657?auto=format&fit=crop&w=800&q=80',
    availability: 'in-stock',
    deliveryDate: 'Delivery by Tomorrow',
    labels: ['NEW LAUNCH', 'FLAGSHIP'],
    launchYear: 2024,
    processor: 'A18 Pro Chip',
    ram: '8GB',
    storage: '128GB',
    displaySize: '6.3-inch Super Retina XDR',
    refreshRate: '120Hz ProMotion',
    cameraSpecs: '48MP + 48MP + 12MP Triple Camera',
    battery: '3582 mAh',
    chargingSpeed: '45W Wired',
    os: 'iOS 18',
    colors: ['Desert Titanium', 'Natural Titanium', 'White Titanium', 'Black Titanium'],
    variants: [
      { ram: '8GB', storage: '128GB', price: 119900 },
      { ram: '8GB', storage: '256GB', price: 129900 }
    ],
    emiAvailable: true
  },
  {
    id: 'm-apple-3',
    slug: 'iphone-16',
    name: 'Apple iPhone 16',
    modelName: 'iPhone 16',
    brand: 'Apple',
    category: 'Mobile',
    description: 'The standard for smartphones with Apple Intelligence.',
    price: 79900,
    originalPrice: 79900,
    discount: 0,
    rating: 4.7,
    reviews: 3200,
    image: 'https://images.unsplash.com/photo-1556656793-062ff98782ee?auto=format&fit=crop&w=800&q=80',
    availability: 'in-stock',
    deliveryDate: 'Delivery in 2 hours',
    labels: ['NEW LAUNCH', 'BEST SELLER'],
    launchYear: 2024,
    processor: 'A18 Chip',
    ram: '8GB',
    storage: '128GB',
    displaySize: '6.1-inch Super Retina XDR',
    refreshRate: '60Hz',
    cameraSpecs: '48MP + 12MP Dual Camera',
    battery: '3561 mAh',
    chargingSpeed: '25W Wired',
    os: 'iOS 18',
    colors: ['Ultramarine', 'Teal', 'Pink', 'White', 'Black'],
    variants: [
      { ram: '8GB', storage: '128GB', price: 79900 },
      { ram: '8GB', storage: '256GB', price: 89900 }
    ],
    emiAvailable: true
  },

  // 2. SAMSUNG
  {
    id: 'm-samsung-1',
    slug: 'galaxy-s25-ultra',
    name: 'Samsung Galaxy S25 Ultra',
    modelName: 'Galaxy S25 Ultra',
    brand: 'Samsung',
    category: 'Mobile',
    description: 'The peak of Android innovation with 200MP Camera & S Pen.',
    longDescription: 'Samsung Galaxy S25 Ultra redefines the smartphone experience with its Snapdragon 8 Elite for Galaxy chip. The 200MP Quad Telephoto camera system captures breathtaking detail even in low light. The integrated S Pen continues to provide precision for work and play.',
    price: 129999,
    originalPrice: 144999,
    discount: 10,
    rating: 4.9,
    reviews: 1560,
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80',
    availability: 'in-stock',
    deliveryDate: 'Delivery by Tomorrow',
    labels: ['FLAGSHIP', 'AI CAMERA', 'PREMIUM PICK'],
    launchYear: 2025,
    processor: 'Snapdragon 8 Elite',
    ram: '12GB',
    storage: '256GB',
    displaySize: '6.8-inch Dynamic AMOLED 2X',
    refreshRate: '120Hz LTPO',
    cameraSpecs: '200MP + 50MP + 12MP + 10MP Quad Camera',
    battery: '5000 mAh',
    chargingSpeed: '45W Wired',
    os: 'Android 15 (One UI 7)',
    colors: ['Titanium Black', 'Titanium Gray', 'Titanium Violet'],
    variants: [
      { ram: '12GB', storage: '256GB', price: 129999 },
      { ram: '16GB', storage: '512GB', price: 139999 }
    ],
    emiAvailable: true,
    exchangeOffer: 'Up to ₹55,000 off'
  },
  {
    id: 'm-samsung-2',
    slug: 'galaxy-z-fold-6',
    name: 'Samsung Galaxy Z Fold 6',
    modelName: 'Galaxy Z Fold 6',
    brand: 'Samsung',
    category: 'Mobile',
    description: 'The ultimate foldable for multitasking and productivity.',
    price: 164999,
    originalPrice: 174999,
    discount: 6,
    rating: 4.8,
    reviews: 780,
    image: 'https://images.unsplash.com/photo-1610629737134-2e9a59336829?auto=format&fit=crop&w=800&q=80',
    availability: 'in-stock',
    deliveryDate: 'Delivery by Today',
    labels: ['FLAGSHIP', 'FOLDABLE'],
    launchYear: 2024,
    processor: 'Snapdragon 8 Gen 3',
    ram: '12GB',
    storage: '256GB',
    displaySize: '7.6-inch Main, 6.3-inch Cover',
    refreshRate: '120Hz',
    cameraSpecs: '50MP + 12MP + 10MP Triple Camera',
    battery: '4400 mAh',
    chargingSpeed: '25W Wired',
    os: 'Android 14',
    colors: ['Silver Shadow', 'Pink', 'Navy'],
    variants: [
      { ram: '12GB', storage: '256GB', price: 164999 },
      { ram: '12GB', storage: '512GB', price: 176999 }
    ],
    emiAvailable: true
  },

  // 3. ONEPLUS
  {
    id: 'm-oneplus-1',
    slug: 'oneplus-13',
    name: 'OnePlus 13',
    modelName: 'OnePlus 13',
    brand: 'OnePlus',
    category: 'Mobile',
    description: 'Never Settle with Hasselblad Camera and 100W Charging.',
    price: 69999,
    originalPrice: 74999,
    discount: 7,
    rating: 4.7,
    reviews: 1200,
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=800&q=80',
    availability: 'in-stock',
    deliveryDate: 'Delivery in 2 hours',
    labels: ['FAST CHARGING', 'BEST SELLER'],
    launchYear: 2025,
    processor: 'Snapdragon 8 Elite',
    ram: '12GB',
    storage: '256GB',
    displaySize: '6.82-inch 2K AMOLED',
    refreshRate: '120Hz',
    cameraSpecs: '50MP + 50MP + 50MP Hasselblad',
    battery: '6000 mAh',
    chargingSpeed: '100W Wired',
    os: 'OxygenOS 15',
    colors: ['Obsidian', 'Blue', 'White'],
    variants: [
      { ram: '12GB', storage: '256GB', price: 69999 },
      { ram: '16GB', storage: '512GB', price: 79999 }
    ],
    emiAvailable: true
  },

  // 4. GOOGLE PIXEL
  {
    id: 'm-google-1',
    slug: 'pixel-9-pro-xl',
    name: 'Google Pixel 9 Pro XL',
    modelName: 'Pixel 9 Pro XL',
    brand: 'Google',
    category: 'Mobile',
    description: 'The best of Google AI with Gemini and Pro Camera.',
    price: 124999,
    originalPrice: 124999,
    discount: 0,
    rating: 4.8,
    reviews: 950,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80',
    availability: 'in-stock',
    deliveryDate: 'Delivery by Tomorrow',
    labels: ['AI CAMERA', 'FLAGSHIP'],
    launchYear: 2024,
    processor: 'Google Tensor G4',
    ram: '16GB',
    storage: '128GB',
    displaySize: '6.8-inch Super Actua Display',
    refreshRate: '120Hz',
    cameraSpecs: '50MP + 48MP + 48MP Triple Camera',
    battery: '5060 mAh',
    chargingSpeed: '37W Wired',
    os: 'Android 15',
    colors: ['Obsidian', 'Porcelain', 'Hazel', 'Rose Quartz'],
    variants: [
      { ram: '16GB', storage: '128GB', price: 124999 },
      { ram: '16GB', storage: '256GB', price: 134999 }
    ],
    emiAvailable: true
  },

  // 5. NOTHING
  {
    id: 'm-nothing-1',
    slug: 'nothing-phone-3',
    name: 'Nothing Phone (3)',
    modelName: 'Nothing Phone 3',
    brand: 'Nothing',
    category: 'Mobile',
    description: 'The next evolution of the iconic Glyph design.',
    price: 44999,
    originalPrice: 49999,
    discount: 10,
    rating: 4.6,
    reviews: 540,
    image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80',
    availability: 'in-stock',
    deliveryDate: 'Delivery in 3 hours',
    labels: ['PREMIUM PICK', 'NEW LAUNCH'],
    launchYear: 2025,
    processor: 'Snapdragon 8s Gen 3',
    ram: '12GB',
    storage: '256GB',
    displaySize: '6.7-inch Flexible OLED',
    refreshRate: '120Hz',
    cameraSpecs: '50MP + 50MP Dual Camera',
    battery: '5000 mAh',
    chargingSpeed: '65W Wired',
    os: 'Nothing OS 3.0',
    colors: ['Black', 'White'],
    variants: [
      { ram: '12GB', storage: '256GB', price: 44999 },
      { ram: '12GB', storage: '512GB', price: 49999 }
    ],
    emiAvailable: true
  },
  {

    id: 'm-apple-4',
    slug: 'iphone-15-pro-max',
    name: 'Apple iPhone 15 Pro Max',
    modelName: 'iPhone 15 Pro Max',
    brand: 'Apple',
    category: 'Mobile',
    description: 'The first iPhone with an aerospace‑grade titanium design.',
    price: 139900,
    originalPrice: 159900,
    discount: 13,
    rating: 4.8,
    reviews: 5600,
    image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&w=800&q=80',
    availability: 'in-stock',
    deliveryDate: 'Delivery by Today',
    labels: ['BEST SELLER', 'FLAGSHIP'],
    launchYear: 2023,
    processor: 'A17 Pro Chip',
    ram: '8GB',
    storage: '256GB',
    displaySize: '6.7-inch Super Retina XDR',
    refreshRate: '120Hz ProMotion',
    cameraSpecs: '48MP + 12MP + 12MP Triple Camera',
    battery: '4441 mAh',
    chargingSpeed: '27W Wired',
    os: 'iOS 17',
    colors: ['Natural Titanium', 'Blue Titanium', 'White Titanium', 'Black Titanium'],
    variants: [
      { ram: '8GB', storage: '256GB', price: 139900 },
      { ram: '8GB', storage: '512GB', price: 159900 }
    ],
    emiAvailable: true
  },
  {
    id: 'm-apple-5',
    slug: 'iphone-15',
    name: 'Apple iPhone 15',
    modelName: 'iPhone 15',
    brand: 'Apple',
    category: 'Mobile',
    description: 'Dynamic Island comes to iPhone 15.',
    price: 69900,
    originalPrice: 79900,
    discount: 13,
    rating: 4.7,
    reviews: 8900,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80',
    availability: 'in-stock',
    deliveryDate: 'Delivery in 2 hours',
    labels: ['BEST SELLER'],
    launchYear: 2023,
    processor: 'A16 Bionic',
    ram: '6GB',
    storage: '128GB',
    displaySize: '6.1-inch Super Retina XDR',
    refreshRate: '60Hz',
    cameraSpecs: '48MP + 12MP Dual Camera',
    battery: '3349 mAh',
    chargingSpeed: '20W Wired',
    os: 'iOS 17',
    colors: ['Pink', 'Yellow', 'Green', 'Blue', 'Black'],
    variants: [
      { ram: '6GB', storage: '128GB', price: 69900 },
      { ram: '6GB', storage: '256GB', price: 79900 }
    ],
    emiAvailable: true
  },
  {
    id: 'm-apple-6',
    slug: 'iphone-se-2022',
    name: 'Apple iPhone SE (3rd Gen)',
    modelName: 'iPhone SE',
    brand: 'Apple',
    category: 'Mobile',
    description: 'Serious power in a compact design.',
    price: 47900,
    originalPrice: 49900,
    discount: 4,
    rating: 4.5,
    reviews: 4200,
    image: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&w=800&q=80',
    availability: 'in-stock',
    deliveryDate: 'Delivery in 1 hour',
    labels: ['VALUE PICK'],
    launchYear: 2022,
    processor: 'A15 Bionic',
    ram: '4GB',
    storage: '64GB',
    displaySize: '4.7-inch Retina HD',
    refreshRate: '60Hz',
    cameraSpecs: '12MP Main Camera',
    battery: '2018 mAh',
    chargingSpeed: '20W Wired',
    os: 'iOS 15',
    colors: ['Midnight', 'Starlight', '(PRODUCT)RED'],
    variants: [
      { ram: '4GB', storage: '64GB', price: 47900 },
      { ram: '4GB', storage: '128GB', price: 52900 }
    ],
    emiAvailable: true
  }
];

// Dynamically generate the remaining products to reach 100+
// NOTE: We remove Apple from the brands pool to ensure only original models are shown
const brands = ['Samsung', 'OnePlus', 'Google', 'Nothing', 'Xiaomi', 'Vivo', 'Oppo', 'Realme', 'Motorola', 'iQOO'];
const series = {
  'Samsung': ['Galaxy S Series', 'Galaxy Z Series', 'Galaxy A Series', 'Galaxy M Series'],
  'OnePlus': ['Number Series', 'Nord Series', 'R Series'],
  'Google': ['Pixel Pro', 'Pixel Standard', 'Pixel a-Series'],
  'Nothing': ['Phone Series', 'a-Series'],
  'Vivo': ['X Series', 'V Series', 'T Series'],
  'Oppo': ['Find X', 'Reno', 'F Series'],
  'Xiaomi': ['Xiaomi Ultra', 'Redmi Note', 'POCO'],
  'Realme': ['GT Series', 'Number Series', 'C Series'],
  'Motorola': ['Edge', 'Razr', 'G Series'],
  'iQOO': ['Number Series', 'Neo', 'Z Series']
};

const processors = ['Snapdragon 8 Elite', 'Snapdragon 8 Gen 3', 'MediaTek Dimensity 9400', 'Google Tensor G4'];

const additionalMobiles: Smartphone[] = [];

for (let i = 1; i <= 94; i++) {

  const brand = brands[i % brands.length];
  const brandSeries = series[brand as keyof typeof series] || ['Standard'];
  const currentSeries = brandSeries[i % brandSeries.length];
  const price = 15000 + (Math.random() * 100000);
  
  additionalMobiles.push({
    id: `m-extra-${i}`,
    slug: `${brand.toLowerCase()}-${currentSeries.toLowerCase().replace(' ', '-')}-${i}`,
    name: `${brand} ${currentSeries} ${i}`,
    modelName: `${currentSeries} ${i}`,
    brand,
    category: 'Mobile',
    description: `Experience the power of ${brand} with the all-new ${currentSeries}.`,
    longDescription: `A premium smartphone from ${brand} featuring cutting-edge technology and beautiful design. Built for high performance and exceptional photography.`,
    price: Math.round(price),
    originalPrice: Math.round(price * 1.2),
    discount: 16,
    rating: 4.0 + (Math.random() * 0.9),
    reviews: 100 + (i * 45),
    image: `https://images.unsplash.com/photo-${i % 3 === 0 ? '1511707171634-5f897ff02aa9' : i % 2 === 0 ? '1580910051074-3eb694886505' : '1592890288564-76628a30a657'}?auto=format&fit=crop&w=800&q=80`,
    availability: 'in-stock',
    deliveryDate: 'Delivery in 1-2 days',
    labels: price > 80000 ? ['FLAGSHIP', 'PREMIUM PICK'] : ['BEST SELLER', 'VALUE FOR MONEY'],
    launchYear: 2024,
    processor: processors[i % processors.length],
    ram: i % 2 === 0 ? '8GB' : '12GB',
    storage: i % 3 === 0 ? '128GB' : '256GB',
    displaySize: '6.7-inch AMOLED',
    refreshRate: '120Hz',
    cameraSpecs: '50MP Main + UltraWide',
    battery: '5000 mAh',
    chargingSpeed: '65W Wired',
    os: brand === 'Apple' ? 'iOS 18' : 'Android 15',
    colors: ['Silver', 'Black', 'Blue'],
    variants: [
      { ram: '8GB', storage: '128GB', price: Math.round(price) },
      { ram: '12GB', storage: '256GB', price: Math.round(price * 1.15) }
    ],
    emiAvailable: true
  });
}

export const allMobileProducts = [...mobileProducts, ...additionalMobiles];
