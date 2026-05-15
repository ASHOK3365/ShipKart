import { Product } from './products';

export interface TwoWheeler extends Product {
  engineCapacity: string;
  mileage: string;
  topSpeed: string;
  weightStr: string;
  fuelCapacity: string;
  colors: string[];
  variants: { name: string; price: number }[];
  type: 'Scooter' | 'Commuter' | 'Sports' | 'Cruiser' | 'Electric';
}

export const twoWheelerProducts: TwoWheeler[] = [
  {
    id: 'tw-1',
    slug: 'ather-450x',
    name: 'Ather 450X Gen 3',
    brand: 'Ather Energy',
    category: 'Two Wheeler',
    subCategory: 'Electric',
    type: 'Electric',
    description: 'The quickest electric scooter in India.',
    longDescription: 'Ather 450X features a 7-inch touchscreen dashboard, reverse mode, and an incredible TrueRange of 105km. It is the ultimate electric urban commuter.',
    price: 155000,
    originalPrice: 155000,
    discount: 0,
    rating: 4.8,
    reviews: 2400,
    image: 'https://images.unsplash.com/photo-1591039868846-5eb8c7a6f236?auto=format&fit=crop&w=800&q=80',
    availability: 'in-stock',
    deliveryDate: 'Delivery in 5-7 days',
    labels: ['ELECTRIC', 'BEST SELLER'],
    engineCapacity: 'N/A (3.7 kWh Battery)',
    mileage: '105 km/charge',
    topSpeed: '90 km/h',
    weightStr: '111.6 kg',
    fuelCapacity: 'N/A',
    colors: ['Space Grey', 'Mint Green', 'White'],
    variants: [
      { name: 'Standard', price: 135000 },
      { name: 'Pro Pack', price: 155000 }
    ]
  },
  {
    id: 'tw-2',
    slug: 'royal-enfield-classic-350',
    name: 'Royal Enfield Classic 350',
    brand: 'Royal Enfield',
    category: 'Two Wheeler',
    subCategory: 'Cruiser',
    type: 'Cruiser',
    description: 'The timeless classic cruiser reborn.',
    longDescription: 'The all-new Classic 350 combines the signature retro styling with the refined J-series engine, offering a smooth, thump-filled ride for the modern rider.',
    price: 220000,
    originalPrice: 220000,
    discount: 0,
    rating: 4.9,
    reviews: 15000,
    image: 'https://images.unsplash.com/photo-1558981420-c532902e58b4?auto=format&fit=crop&w=800&q=80',
    availability: 'in-stock',
    deliveryDate: 'Delivery in 10-15 days',
    labels: ['CRUISER', 'LEGENDARY'],
    engineCapacity: '349 cc',
    mileage: '35 kmpl',
    topSpeed: '114 km/h',
    weightStr: '195 kg',
    fuelCapacity: '13 L',
    colors: ['Chrome Red', 'Dark Stealth Black', 'Signals Desert Sand'],
    variants: [
      { name: 'Single Channel ABS', price: 190000 },
      { name: 'Dual Channel ABS', price: 220000 }
    ]
  }
];

// Dynamically generate the remaining products to reach 80+
const brands = ['Honda', 'Yamaha', 'TVS', 'Bajaj', 'Hero', 'KTM', 'Ola', 'Suzuki'];
const types = ['Scooter', 'Commuter', 'Sports', 'Cruiser', 'Electric'];

const additionalTwoWheelers: TwoWheeler[] = [];

for (let i = 1; i <= 80; i++) {
  const brand = brands[i % brands.length];
  const type = types[i % types.length] as 'Scooter' | 'Commuter' | 'Sports' | 'Cruiser' | 'Electric';
  const price = 80000 + (Math.random() * 150000);
  
  additionalTwoWheelers.push({
    id: `tw-extra-${i}`,
    slug: `${brand.toLowerCase()}-${type.toLowerCase()}-${i}`,
    name: `${brand} ${type} Model ${i}`,
    brand,
    category: 'Two Wheeler',
    subCategory: type,
    type,
    description: `A highly reliable and powerful ${type.toLowerCase()} by ${brand}.`,
    longDescription: `This ${brand} ${type} offers excellent performance, great fuel efficiency, and a comfortable ride for both city commuting and highway cruising.`,
    price: Math.round(price),
    originalPrice: Math.round(price * 1.05),
    discount: 5,
    rating: 4.0 + (Math.random() * 0.9),
    reviews: 50 + (i * 30),
    image: `https://images.unsplash.com/photo-${i % 2 === 0 ? '1449426468159-d96dbf08f19f' : '1568772585407-9361f9bf3c87'}?auto=format&fit=crop&w=800&q=80`,
    availability: 'in-stock',
    deliveryDate: 'Delivery in 2-4 weeks',
    labels: price > 150000 ? ['PREMIUM'] : ['BEST SELLER'],
    engineCapacity: type === 'Electric' ? 'N/A' : `${100 + (i * 10)} cc`,
    mileage: type === 'Electric' ? `${80 + (i * 2)} km/charge` : `${40 + (i % 20)} kmpl`,
    topSpeed: `${80 + (i % 50)} km/h`,
    weightStr: `${100 + (i % 50)} kg`,
    fuelCapacity: type === 'Electric' ? 'N/A' : '12 L',
    colors: ['Black', 'Red', 'Blue'],
    variants: [
      { name: 'Standard', price: Math.round(price) },
      { name: 'Pro / Disc', price: Math.round(price * 1.1) }
    ]
  });
}

export const allTwoWheelerProducts = [...twoWheelerProducts, ...additionalTwoWheelers];
