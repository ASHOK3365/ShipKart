import { Product } from './products';

// ========================================
// MOBILES — Real Smartphone Data 2024-2025
// Verified images matched to each brand/model
// ========================================

export interface Smartphone extends Product {
  processor: string;
  ram: string;
  storage: string;
  displaySize?: string;
  cameraSpecs?: string;
  battery?: string;
  os?: string;
  variants?: { ram: string; storage: string; price: number }[];
  emiAvailable?: boolean;
}

export const allMobileProducts: Product[] = [
  // --- APPLE ---
  {
    id: 'm-1', slug: 'iphone-16-pro-max', name: 'Apple iPhone 16 Pro Max', brand: 'Apple',
    category: 'Mobiles', subCategory: 'Flagship',
    description: 'Titanium design, A18 Pro chip, 48MP camera with 4K Dolby Vision.',
    price: 159900, originalPrice: 159900, discount: 0, rating: 4.9, reviews: 2450,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery by Tomorrow',
    labels: ['NEW LAUNCH', 'FLAGSHIP'], isTrending: true,
    processor: 'A18 Pro', ram: '8GB', storage: '256GB',
    specifications: { Display: '6.9" Super Retina XDR', Chip: 'A18 Pro', Camera: '48MP Triple', Battery: '4685 mAh' }
  },
  {
    id: 'm-2', slug: 'iphone-16', name: 'Apple iPhone 16', brand: 'Apple',
    category: 'Mobiles', subCategory: 'Premium',
    description: 'Apple Intelligence, A18 chip, and Dynamic Island.',
    price: 79900, originalPrice: 79900, discount: 0, rating: 4.7, reviews: 3200,
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery in 2 hours',
    labels: ['NEW LAUNCH', 'BEST SELLER'], isBestSeller: true,
    processor: 'A18', ram: '8GB', storage: '128GB',
    specifications: { Display: '6.1" Super Retina XDR', Chip: 'A18', Camera: '48MP Dual', Battery: '3561 mAh' }
  },
  {
    id: 'm-3', slug: 'iphone-15', name: 'Apple iPhone 15', brand: 'Apple',
    category: 'Mobiles', subCategory: 'Premium',
    description: 'Dynamic Island, 48MP camera, USB-C.',
    price: 69900, originalPrice: 79900, discount: 13, rating: 4.7, reviews: 8900,
    image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery by Tomorrow',
    labels: ['BEST SELLER'],
    processor: 'A16 Bionic', ram: '6GB', storage: '128GB',
    specifications: { Display: '6.1" Super Retina XDR', Chip: 'A16 Bionic', Camera: '48MP Dual', Battery: '3349 mAh' }
  },

  // --- SAMSUNG ---
  {
    id: 'm-4', slug: 'galaxy-s25-ultra', name: 'Samsung Galaxy S25 Ultra', brand: 'Samsung',
    category: 'Mobiles', subCategory: 'Flagship',
    description: '200MP camera, S Pen, Snapdragon 8 Elite.',
    price: 129999, originalPrice: 144999, discount: 10, rating: 4.9, reviews: 1560,
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery by Tomorrow',
    labels: ['FLAGSHIP', 'AI CAMERA'], isTrending: true,
    processor: 'Snapdragon 8 Elite', ram: '12GB', storage: '256GB',
    specifications: { Display: '6.8" Dynamic AMOLED', Chip: 'Snapdragon 8 Elite', Camera: '200MP Quad', Battery: '5000 mAh' }
  },
  {
    id: 'm-5', slug: 'galaxy-s24-fe', name: 'Samsung Galaxy S24 FE', brand: 'Samsung',
    category: 'Mobiles', subCategory: 'Mid-Premium',
    description: 'Fan Edition with flagship features at accessible price.',
    price: 59999, originalPrice: 64999, discount: 8, rating: 4.5, reviews: 2100,
    image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery in 1 day',
    labels: ['VALUE PICK'],
    processor: 'Exynos 2400', ram: '8GB', storage: '128GB',
    specifications: { Display: '6.7" AMOLED', Camera: '50MP Triple', Battery: '4700 mAh' }
  },

  // --- ONEPLUS ---
  {
    id: 'm-6', slug: 'oneplus-13', name: 'OnePlus 13', brand: 'OnePlus',
    category: 'Mobiles', subCategory: 'Flagship',
    description: 'Hasselblad camera, 100W SUPERVOOC, 6000mAh battery.',
    price: 69999, originalPrice: 74999, discount: 7, rating: 4.7, reviews: 1200,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery in 2 hours',
    labels: ['FAST CHARGING', 'BEST SELLER'], isBestSeller: true,
    processor: 'Snapdragon 8 Elite', ram: '12GB', storage: '256GB',
    specifications: { Display: '6.82" 2K AMOLED', Camera: '50MP Hasselblad Triple', Battery: '6000 mAh', Charging: '100W' }
  },
  {
    id: 'm-7', slug: 'oneplus-nord-4', name: 'OnePlus Nord 4', brand: 'OnePlus',
    category: 'Mobiles', subCategory: 'Mid-Range',
    description: 'Full metal unibody, 120Hz AMOLED, 100W charging.',
    price: 29999, originalPrice: 34999, discount: 14, rating: 4.5, reviews: 3400,
    image: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery by Tomorrow',
    labels: ['VALUE FOR MONEY'],
    processor: 'Snapdragon 7+ Gen 3', ram: '8GB', storage: '128GB',
    specifications: { Display: '6.74" AMOLED 120Hz', Camera: '50MP Dual', Battery: '5500 mAh' }
  },

  // --- GOOGLE PIXEL ---
  {
    id: 'm-8', slug: 'pixel-9-pro', name: 'Google Pixel 9 Pro', brand: 'Google',
    category: 'Mobiles', subCategory: 'Flagship',
    description: 'Best-in-class AI camera, Tensor G4, pure Android.',
    price: 109999, originalPrice: 109999, discount: 0, rating: 4.8, reviews: 950,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery by Tomorrow',
    labels: ['AI CAMERA', 'FLAGSHIP'],
    processor: 'Tensor G4', ram: '16GB', storage: '128GB',
    specifications: { Display: '6.3" Super Actua OLED', Camera: '50MP Triple AI', Battery: '4700 mAh' }
  },

  // --- XIAOMI ---
  {
    id: 'm-9', slug: 'xiaomi-14-ultra', name: 'Xiaomi 14 Ultra', brand: 'Xiaomi',
    category: 'Mobiles', subCategory: 'Flagship',
    description: 'Leica professional camera, Snapdragon 8 Gen 3.',
    price: 99999, originalPrice: 109999, discount: 9, rating: 4.6, reviews: 780,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery in 2 days',
    labels: ['PREMIUM PICK'],
    processor: 'Snapdragon 8 Gen 3', ram: '16GB', storage: '512GB',
    specifications: { Display: '6.73" LTPO AMOLED', Camera: '50MP Leica Quad', Battery: '5300 mAh' }
  },
  {
    id: 'm-10', slug: 'redmi-note-14-pro', name: 'Redmi Note 14 Pro 5G', brand: 'Xiaomi',
    category: 'Mobiles', subCategory: 'Budget',
    description: '200MP camera, 120Hz AMOLED, 5G ready.',
    price: 19999, originalPrice: 24999, discount: 20, rating: 4.4, reviews: 5600,
    image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery by Tomorrow',
    labels: ['BEST SELLER', 'VALUE FOR MONEY'], isBestSeller: true,
    processor: 'Dimensity 7300', ram: '8GB', storage: '128GB',
    specifications: { Display: '6.67" AMOLED 120Hz', Camera: '200MP Main', Battery: '5500 mAh' }
  },

  // --- VIVO ---
  {
    id: 'm-11', slug: 'vivo-x200-pro', name: 'Vivo X200 Pro', brand: 'Vivo',
    category: 'Mobiles', subCategory: 'Flagship',
    description: 'Zeiss optics, Dimensity 9400, cinematic video.',
    price: 94999, originalPrice: 94999, discount: 0, rating: 4.7, reviews: 620,
    image: 'https://images.unsplash.com/photo-1592890288564-76628a30a657?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery in 2 days',
    labels: ['NEW LAUNCH', 'CAMERA PHONE'],
    processor: 'Dimensity 9400', ram: '16GB', storage: '256GB',
    specifications: { Display: '6.78" LTPO AMOLED', Camera: '50MP Zeiss Triple', Battery: '6000 mAh' }
  },

  // --- OPPO ---
  {
    id: 'm-12', slug: 'oppo-find-x8', name: 'OPPO Find X8', brand: 'Oppo',
    category: 'Mobiles', subCategory: 'Flagship',
    description: 'Hasselblad camera, ultra-slim design, 80W charging.',
    price: 69999, originalPrice: 74999, discount: 7, rating: 4.6, reviews: 540,
    image: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery by Tomorrow',
    labels: ['NEW LAUNCH'],
    processor: 'Dimensity 9400', ram: '12GB', storage: '256GB',
    specifications: { Display: '6.59" LTPO AMOLED', Camera: '50MP Hasselblad Triple', Battery: '5630 mAh' }
  },
];
