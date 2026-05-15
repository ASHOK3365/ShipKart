import { Product } from './products';

// ========================================
// BEAUTY — Real Cosmetics & Skincare Brands
// Verified Unsplash images matched to product type
// ========================================

export const allBeautyProducts: Product[] = [
  // --- SKINCARE ---
  {
    id: 'b-1', slug: 'cetaphil-moisturizer', name: 'Cetaphil Moisturizing Cream', brand: 'Cetaphil',
    category: 'Beauty', subCategory: 'Moisturizer',
    description: 'Clinically proven moisturizer for dry, sensitive skin.',
    price: 389, originalPrice: 499, discount: 22, rating: 4.7, reviews: 12400,
    image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery by Tomorrow',
    labels: ['BEST SELLER', 'DERMA TESTED'], isBestSeller: true,
    specifications: { Type: 'Moisturizer', Skin: 'Dry & Sensitive', Volume: '250ml', Fragrance: 'Fragrance-Free' }
  },
  {
    id: 'b-2', slug: 'minimalist-niacinamide', name: 'Minimalist 10% Niacinamide Serum', brand: 'Minimalist',
    category: 'Beauty', subCategory: 'Serum',
    description: 'Controls oil, minimizes pores, and reduces acne marks.',
    price: 549, originalPrice: 649, discount: 15, rating: 4.6, reviews: 18200,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery by Tomorrow',
    labels: ['TRENDING', 'BEST SELLER'], isTrending: true, isBestSeller: true,
    specifications: { Active: '10% Niacinamide + 1% Zinc', Skin: 'Oily & Acne-Prone', Volume: '30ml' }
  },
  {
    id: 'b-3', slug: 'cetaphil-cleanser', name: 'Cetaphil Gentle Skin Cleanser', brand: 'Cetaphil',
    category: 'Beauty', subCategory: 'Cleanser',
    description: 'Soap-free, non-foaming face wash for all skin types.',
    price: 350, originalPrice: 449, discount: 22, rating: 4.8, reviews: 9800,
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery in 2 hours',
    labels: ['DERMA TESTED'], isBestSeller: true,
    specifications: { Type: 'Cleanser', Skin: 'All Types', Volume: '250ml', pH: 'Balanced' }
  },

  // --- MAKEUP ---
  {
    id: 'b-4', slug: 'mac-ruby-woo', name: 'MAC Ruby Woo Lipstick', brand: 'MAC',
    category: 'Beauty', subCategory: 'Lipstick',
    description: 'Iconic retro matte vivid red lipstick.',
    price: 1950, originalPrice: 1950, discount: 0, rating: 4.9, reviews: 24500,
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery by Tomorrow',
    labels: ['ICONIC', 'BEST SELLER'], isBestSeller: true,
    colors: ['#8B0000', '#C71585', '#D2691E', '#FF69B4'],
    specifications: { Finish: 'Retro Matte', Shade: 'Ruby Woo', Weight: '3g' }
  },
  {
    id: 'b-5', slug: 'huda-beauty-palette', name: 'Huda Beauty Rose Gold Palette', brand: 'Huda Beauty',
    category: 'Beauty', subCategory: 'Eyeshadow',
    description: '18 shades of rose gold, mattes, shimmers, and glitters.',
    price: 4950, originalPrice: 5500, discount: 10, rating: 4.7, reviews: 6200,
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery in 3 days',
    labels: ['PREMIUM', 'TRENDING'], isTrending: true,
    specifications: { Shades: '18 (Matte, Shimmer, Glitter)', Type: 'Pressed Powder', Brand: 'Huda Beauty' }
  },
  {
    id: 'b-6', slug: 'dior-lip-glow', name: 'Dior Addict Lip Glow', brand: 'Dior',
    category: 'Beauty', subCategory: 'Lip Care',
    description: 'Color-reviving lip balm with 97% natural origin.',
    price: 3600, originalPrice: 3600, discount: 0, rating: 4.8, reviews: 4100,
    image: 'https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery in 2 days',
    labels: ['LUXURY', 'PREMIUM'],
    colors: ['#FFB6C1', '#FF69B4', '#DC143C'],
    specifications: { Finish: 'Glossy Balm', Origin: '97% Natural', SPF: '10' }
  },

  // --- FRAGRANCE ---
  {
    id: 'b-7', slug: 'dior-sauvage', name: 'Dior Sauvage EDT', brand: 'Dior',
    category: 'Beauty', subCategory: 'Fragrance',
    description: 'Bold, fresh, and powerful — the world\'s #1 men\'s fragrance.',
    price: 8500, originalPrice: 9500, discount: 11, rating: 4.9, reviews: 15600,
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery by Tomorrow',
    labels: ['LUXURY', 'BEST SELLER'], isBestSeller: true,
    specifications: { Type: 'Eau de Toilette', Top: 'Bergamot, Pepper', Heart: 'Lavender, Sichuan', Base: 'Ambroxan, Cedar', Volume: '100ml' }
  },

  // --- HAIR CARE ---
  {
    id: 'b-8', slug: 'loreal-serum', name: "L'Oréal Extraordinary Oil Serum", brand: "L'Oréal",
    category: 'Beauty', subCategory: 'Hair Care',
    description: '6 micro-oils for frizz-free, glossy hair.',
    price: 499, originalPrice: 650, discount: 23, rating: 4.5, reviews: 7800,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery in 2 hours',
    labels: ['BEST SELLER'],
    specifications: { Type: 'Hair Serum', Benefit: 'Frizz Control + Shine', Volume: '100ml' }
  },

  // --- SUNSCREEN ---
  {
    id: 'b-9', slug: 'minimalist-sunscreen', name: 'Minimalist SPF 50 Sunscreen', brand: 'Minimalist',
    category: 'Beauty', subCategory: 'Sunscreen',
    description: 'Lightweight, no white cast, PA++++ protection.',
    price: 449, originalPrice: 549, discount: 18, rating: 4.6, reviews: 11200,
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery by Tomorrow',
    labels: ['TRENDING', 'BEST SELLER'], isTrending: true,
    specifications: { SPF: '50 PA++++', Type: 'Chemical', Finish: 'Matte', Volume: '50ml' }
  },

  // --- TOOLS ---
  {
    id: 'b-10', slug: 'dyson-airwrap', name: 'Dyson Airwrap Multi-Styler', brand: 'Dyson',
    category: 'Beauty', subCategory: 'Styling Tools',
    description: 'Curl, shape, smooth, and dry with no extreme heat.',
    price: 45900, originalPrice: 45900, discount: 0, rating: 4.8, reviews: 3200,
    image: 'https://images.unsplash.com/photo-1522338242992-e1a54f1f4569?w=600&auto=format&fit=crop',
    availability: 'in-stock', deliveryDate: 'Delivery in 5 days',
    labels: ['LUXURY', 'PREMIUM'],
    specifications: { Motor: 'Dyson V9', Heat: 'Coanda Effect (No extreme heat)', Attachments: '6 Styling', Voltage: '220-240V' }
  },
];
