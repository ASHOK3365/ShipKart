export interface Product {
  id: string;
  slug?: string;
  name: string;
  brand: string;
  category: string;
  subCategory?: string;
  description: string;
  longDescription?: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviews: number;
  image: string;
  colors?: string[];
  availability: 'in-stock' | 'out-of-stock';
  deliveryDate?: string;
  specifications?: Record<string, string>;
  energyRating?: number;
  warranty?: string;
  emiOptions?: string;
  labels?: string[];
  isBestSeller?: boolean;
  isTrending?: boolean;
  isFlashDeal?: boolean;
  flashDealExpiry?: number;
  dealProgress?: number;
  weight?: string;
  nutritionInfo?: Record<string, string>;
  processor?: string;
  ram?: string;
  storage?: string;
}


import { allGroceryProducts } from './groceryData';
import { allMobileProducts, Smartphone } from './mobileData';

export type { Smartphone };


const generateProducts = () => {
  const allProducts: Product[] = [];

  // Add the realistic grocery products first
  allProducts.push(...allGroceryProducts);

  // 1. MOBILE (100+ products)
  allProducts.push(...allMobileProducts);


  // 2. ELECTRONICS (40 products)

  const elecBrands = ['Sony', 'Bose', 'JBL', 'Samsung', 'Logitech', 'Zebronics', 'Marshall'];
  const elecImages = [
    '1505740420928-5e560c06d30e', '1491933322481-d99cbb1a36e7', '1546435770-a3e426ff472b',
    '1523275335684-37898b6baf30', '1511707171634-5f897ff02aa9', '1526170375885-cf008829d584',
    '1572536147748-ae512357f321', '1615663245857-ac93bb7c39e7'
  ];

  for (let i = 1; i <= 40; i++) {
    const brand = elecBrands[i % elecBrands.length];
    allProducts.push({
      id: `e-${i}`,
      name: `${brand} ${i % 2 === 0 ? 'Noise Cancelling Headphones' : 'Premium Bluetooth Speaker'} ${i % 3 === 0 ? 'Max' : 'Series ' + i}`,
      brand,
      category: 'Electronics',
      subCategory: 'Audio',
      description: `Experience studio-quality sound with ${brand}. Features ${i % 2 === 0 ? 'Active Noise Cancellation' : 'Deep Bass Technology'} and 40-hour battery life.`,
      price: 2499 + (i * 450),
      originalPrice: 3999 + (i * 600),
      discount: 35,
      rating: 4.6 + (Math.random() * 0.4),
      reviews: 3400 + (i * 220),
      image: `https://images.unsplash.com/photo-${elecImages[i % elecImages.length]}?q=80&w=800&auto=format&fit=crop`,
      availability: 'in-stock',
      deliveryDate: 'Delivery in 2 days',
      warranty: '1 Year Brand Warranty',
      specifications: { 'Bluetooth': 'v5.3', 'Playtime': '40 Hours' }
    });
  }

  // 4. APPLIANCES (30 products)
  const appBrands = ['LG', 'Samsung', 'Dyson', 'Whirlpool', 'Panasonic', 'Bosch'];
  const appImages = [
    '1584622650111-993a426fbf0a', '1581009146145-b5ef03a7471b', '1585333120169-02c017d29497',
    '1556911220-e1502d338a83', '1581009146145-b5ef03a7471b', '1585659722982-7d60710f7173'
  ];

  for (let i = 1; i <= 30; i++) {
    const brand = appBrands[i % appBrands.length];
    allProducts.push({
      id: `a-${i}`,
      name: `${brand} ${i % 3 === 0 ? 'Smart Inverter Fridge' : i % 2 === 0 ? 'Front Load Washer' : 'Air Purifier'} Pro`,
      brand,
      category: 'Appliances',
      subCategory: 'Home',
      description: `Smart home solution from ${brand}. Energy efficient with advanced ${i % 3 === 0 ? 'Twin Cooling' : 'AI Direct Drive'} technology.`,
      price: 18900 + (i * 1500),
      originalPrice: 28900 + (i * 1800),
      discount: 25,
      rating: 4.5 + (Math.random() * 0.5),
      reviews: 1200 + (i * 95),
      image: `https://images.unsplash.com/photo-${appImages[i % appImages.length]}?q=80&w=800&auto=format&fit=crop`,
      availability: 'in-stock',
      deliveryDate: 'Home Delivery in 3 Days',
      energyRating: 4 + (i % 2),
      warranty: '2 Year Comprehensive, 10 Year on Motor',
      emiOptions: 'No Cost EMI from ₹2,499/mo'
    });
  }

  // 5. CLOTHING (40 products)
  const clothBrands = ['Nike', 'Adidas', 'Zara', 'Levi\'s', 'Puma', 'Uniqlo'];
  const clothImages = [
    '1523381210434-271e8be1f52b', '1521572163474-6864f9cf17ab', '1516762689617-e1cffcef479d',
    '1542272604-787c3835535d', '1618354691373-d851c5c3a990', '1491553895911-0055eca6402d',
    '1542291026-7eec264c27ff', '1551028150-64b9f398f678'
  ];

  for (let i = 1; i <= 40; i++) {
    const brand = clothBrands[i % clothBrands.length];
    allProducts.push({
      id: `c-${i}`,
      name: `${brand} ${i % 4 === 0 ? 'Running Shoes' : i % 3 === 0 ? 'Premium Jacket' : 'Graphic Tee'} Series`,
      brand,
      category: 'Clothing',
      subCategory: 'Apparel',
      description: `Unmatched comfort and style from ${brand}. Crafted with premium materials for durability and a perfect fit.`,
      price: 1499 + (i * 250),
      originalPrice: 2999 + (i * 350),
      discount: 50,
      rating: 4.2 + (Math.random() * 0.8),
      reviews: 2100 + (i * 110),
      image: `https://images.unsplash.com/photo-${clothImages[i % clothImages.length]}?q=80&w=800&auto=format&fit=crop`,
      availability: 'in-stock',
      deliveryDate: 'Delivery by tomorrow',
      colors: ['#000000', '#3b82f6', '#ef4444', '#10b981'],
      labels: i % 5 === 0 ? ['Best Seller'] : []
    });
  }

  // 6. BEAUTY (30 products)
  const beautyBrands = ['L\'Oreal', 'Nivea', 'Dove', 'Lakme', 'Maybelline', 'The Body Shop'];
  const beautyImages = [
    '1556228578-0d85b1a4d571', '1596462502278-27bfad450216', '1612817288484-6f916006741a',
    '1512496015851-a90fb38ba796', '1570172236081-aba100c580ed', '1598440947619-2c35fc9aa908'
  ];

  for (let i = 1; i <= 30; i++) {
    const brand = beautyBrands[i % beautyBrands.length];
    allProducts.push({
      id: `b-${i}`,
      name: `${brand} ${i % 2 === 0 ? 'Hydrating Serum' : 'Matte Finish Lipstick'} Pro`,
      brand,
      category: 'Beauty',
      subCategory: 'Cosmetics',
      description: `Enhance your natural beauty with ${brand}. Dermatologically tested and suitable for all skin types.`,
      price: 499 + (i * 95),
      originalPrice: 999 + (i * 120),
      discount: 40,
      rating: 4.4 + (Math.random() * 0.6),
      reviews: 1800 + (i * 65),
      image: `https://images.unsplash.com/photo-${beautyImages[i % beautyImages.length]}?q=80&w=800&auto=format&fit=crop`,
      availability: 'in-stock',
      deliveryDate: 'Delivery in 2 days',
      labels: ['Trending', 'Premium']
    });
  }

  // 7. TWO WHEELER (25 products)
  const bikeBrands = ['Honda', 'Hero', 'Yamaha', 'Royal Enfield', 'KTM', 'Bajaj', 'TVS'];
  const bikeImages = [
    '1558981403-c5f9899a28bc', '1547918129-9bc83606775b', '1568772585407-9361f9bf3a87',
    '1449490126671-db0ad9c9d380', '1558981403-c5f9899a28bc', '1515777315835-281b94c9589f'
  ];

  for (let i = 1; i <= 25; i++) {
    const brand = bikeBrands[i % bikeBrands.length];
    allProducts.push({
      id: `tw-${i}`,
      name: `${brand} ${brand === 'Royal Enfield' ? 'Classic' : brand === 'KTM' ? 'Duke' : 'Cruiser'} ${250 + (i * 10)}cc`,
      brand,
      category: 'Two Wheeler',
      subCategory: 'Bikes',
      description: `Experience the thrill of the open road with ${brand}. Powerful engine meets superior comfort and safety.`,
      price: 145000 + (i * 8000),
      originalPrice: 175000 + (i * 9500),
      discount: 10 + (i % 5),
      rating: 4.7 + (Math.random() * 0.3),
      reviews: 12000 + (i * 450),
      image: `https://images.unsplash.com/photo-${bikeImages[i % bikeImages.length]}?q=80&w=800&auto=format&fit=crop`,
      availability: 'in-stock',
      deliveryDate: 'Home Delivery in 5-7 Days',
      labels: ['Premium', 'High Speed'],
      specifications: { 'Engine': `${250 + (i * 10)}cc`, 'Mileage': '35 kmpl', 'ABS': 'Dual Channel' }
    });
  }

  return allProducts;
};

export const products: Product[] = generateProducts();
