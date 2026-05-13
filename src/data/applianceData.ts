import { Product } from './products';

export const applianceProducts: Product[] = [
  // 1. REFRIGERATORS
  {
    id: 'app-ref-1',
    slug: 'samsung-bespoke-670l-french-door',
    name: 'Samsung Bespoke 670L French Door Refrigerator',
    brand: 'Samsung',
    category: 'Appliances',
    subCategory: 'Refrigerators',
    description: 'AI-powered cooling with customizable Bespoke design.',
    longDescription: 'The Samsung Bespoke refrigerator features Triple Cooling technology and a FlexZone compartment. With AI Vision Inside, it can track food items and suggest recipes. The elegant glass finish complements any modern kitchen.',
    price: 184999,
    originalPrice: 210000,
    discount: 12,
    rating: 4.9,
    reviews: 420,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    availability: 'in-stock',
    deliveryDate: 'Delivery in 3 days',
    energyRating: 5,
    warranty: '2 Year Comprehensive, 20 Year on Digital Inverter Compressor',
    emiOptions: 'No Cost EMI from ₹15,416/mo',
    labels: ['PREMIUM PICK', 'AI FEATURED'],
    isBestSeller: true,
    isFlashDeal: true,
    flashDealExpiry: Date.now() + 86400000, // 24 hours from now
    dealProgress: 65,
    specifications: {
      'Capacity': '670L',
      'Type': 'French Door',
      'Cooling': 'Triple Cooling',
      'Smart Features': 'AI Vision Inside, Wi-Fi Embedded'
    }
  },
  {
    id: 'app-ref-2',
    slug: 'lg-instaview-674l-side-by-side',
    name: 'LG InstaView Door-in-Door 674L Side-by-Side',
    brand: 'LG',
    category: 'Appliances',
    subCategory: 'Refrigerators',
    description: 'Knock twice to see inside without losing cold air.',
    longDescription: 'LG InstaView features a sleek glass panel that illuminates with two quick knocks. UVnano technology in the water dispenser ensures 99.99% bacteria-free water. Hygiene Fresh+ keeps the air inside fresh.',
    price: 154990,
    originalPrice: 189990,
    discount: 18,
    rating: 4.8,
    reviews: 850,
    image: 'https://images.unsplash.com/photo-1571175432248-ef0218772ff?auto=format&fit=crop&w=800&q=80',
    availability: 'in-stock',
    deliveryDate: 'Delivery by tomorrow',
    energyRating: 4,
    warranty: '1 Year Comprehensive, 10 Year on Compressor',
    emiOptions: 'No Cost EMI from ₹12,915/mo',
    labels: ['BEST SELLER', 'SMART HOME'],
    isTrending: true,
    specifications: {
      'Capacity': '674L',
      'Type': 'Side-by-Side',
      'Dispenser': 'Water & Ice',
      'Smart Features': 'LG ThinQ, Smart Diagnosis'
    }
  },
  {
    id: 'app-ref-3',
    slug: 'whirlpool-265l-double-door',
    name: 'Whirlpool IntelliFresh 265L Double Door',
    brand: 'Whirlpool',
    category: 'Appliances',
    subCategory: 'Refrigerators',
    description: 'Adaptive Intelligence technology for long-lasting freshness.',
    price: 28990,
    originalPrice: 34500,
    discount: 16,
    rating: 4.5,
    reviews: 2100,
    image: 'https://images.unsplash.com/photo-1536353284924-9220c464e262?auto=format&fit=crop&w=800&q=80',
    availability: 'in-stock',
    deliveryDate: 'Delivery in 2 days',
    energyRating: 3,
    warranty: '1 Year Comprehensive, 10 Year on Compressor',
    labels: ['VALUE FOR MONEY'],
    specifications: {
      'Capacity': '265L',
      'Type': 'Double Door',
      'Cooling': '6th Sense DeepFreeze'
    }
  },

  // 2. WASHING MACHINES
  {
    id: 'app-wm-1',
    slug: 'lg-v-series-9kg-front-load',
    name: 'LG V-Series 9kg AI Direct Drive Front Load',
    brand: 'LG',
    category: 'Appliances',
    subCategory: 'Washing Machines',
    description: 'AI-driven wash patterns for 18% more fabric protection.',
    longDescription: 'The LG AI DD detects not only the weight but also the softness of the fabric. 6 Motion Direct Drive moves the wash drum in multiple directions. Steam+ removes 99.9% of allergens.',
    price: 44990,
    originalPrice: 52990,
    discount: 15,
    rating: 4.8,
    reviews: 1240,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    availability: 'in-stock',
    deliveryDate: 'Delivery in 2 days',
    energyRating: 5,
    warranty: '2 Year Comprehensive, 10 Year on Motor',
    emiOptions: 'No Cost EMI from ₹3,749/mo',
    labels: ['BEST SELLER', 'AI FEATURED'],
    isTrending: true,
    specifications: {
      'Capacity': '9kg',
      'RPM': '1400',
      'Type': 'Front Load',
      'Smart Features': 'ThinQ App, Smart Diagnosis'
    }
  },
  {
    id: 'app-wm-2',
    slug: 'samsung-ecobubble-8kg-front-load',
    name: 'Samsung EcoBubble 8kg Fully Automatic',
    brand: 'Samsung',
    category: 'Appliances',
    subCategory: 'Washing Machines',
    description: 'Powerful bubbles for gentle and effective cleaning.',
    price: 36990,
    originalPrice: 45000,
    discount: 18,
    rating: 4.7,
    reviews: 3200,
    image: 'https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?auto=format&fit=crop&w=800&q=80',
    availability: 'in-stock',
    deliveryDate: 'Delivery in 3 days',
    energyRating: 5,
    warranty: '2 Year Comprehensive, 20 Year on DIT Motor',
    labels: ['ENERGY SAVER'],
    specifications: {
      'Capacity': '8kg',
      'Technology': 'EcoBubble',
      'Type': 'Front Load'
    }
  },

  // 3. AIR CONDITIONERS
  {
    id: 'app-ac-1',
    slug: 'voltas-1-5-ton-5-star-inverter-ac',
    name: 'Voltas 1.5 Ton 5 Star Inverter Split AC',
    brand: 'Voltas',
    category: 'Appliances',
    subCategory: 'Air Conditioners',
    description: 'Adjustable cooling with SuperDry mode for humid weather.',
    price: 42999,
    originalPrice: 65990,
    discount: 35,
    rating: 4.6,
    reviews: 5600,
    image: 'https://images.unsplash.com/photo-1631541486337-b5bbf03a7471?auto=format&fit=crop&w=800&q=80',
    availability: 'in-stock',
    deliveryDate: 'Delivery in 2 days',
    energyRating: 5,
    warranty: '1 Year Comprehensive, 10 Year on Compressor',
    emiOptions: 'No Cost EMI from ₹3,583/mo',
    labels: ['FAST DELIVERY', 'BEST SELLER'],
    isBestSeller: true,
    specifications: {
      'Tonnage': '1.5 Ton',
      'Rating': '5 Star',
      'Condenser': 'Copper',
      'Refrigerant': 'R32'
    }
  },
  {
    id: 'app-ac-2',
    slug: 'samsung-windfree-1-5-ton-ac',
    name: 'Samsung WindFree 1.5 Ton 5 Star Inverter AC',
    brand: 'Samsung',
    category: 'Appliances',
    subCategory: 'Air Conditioners',
    description: 'Cool without direct draft for ultimate comfort.',
    price: 48999,
    originalPrice: 72990,
    discount: 33,
    rating: 4.7,
    reviews: 1200,
    image: 'https://images.unsplash.com/photo-1585333120169-02c017d29497?auto=format&fit=crop&w=800&q=80',
    availability: 'in-stock',
    deliveryDate: 'Delivery in 3 days',
    energyRating: 5,
    warranty: '1 Year Comprehensive, 10 Year on Compressor',
    labels: ['PREMIUM PICK', 'SMART HOME'],
    specifications: {
      'Tonnage': '1.5 Ton',
      'Technology': 'WindFree Cooling',
      'Smart Features': 'Wi-Fi, Bixby Support'
    }
  },

  // 4. MICROWAVES
  {
    id: 'app-mw-1',
    slug: 'panasonic-27l-convection-microwave',
    name: 'Panasonic 27L Convection Microwave Oven',
    brand: 'Panasonic',
    category: 'Appliances',
    subCategory: 'Microwave Ovens',
    description: 'Auto-cook menus and magic grill technology.',
    price: 14490,
    originalPrice: 18990,
    discount: 24,
    rating: 4.5,
    reviews: 2800,
    image: 'https://images.unsplash.com/photo-1556911220-e1502d338a83?auto=format&fit=crop&w=800&q=80',
    availability: 'in-stock',
    deliveryDate: 'Delivery tomorrow',
    warranty: '1 Year on Product, 5 Year on Magnetron',
    labels: ['BEST SELLER'],
    specifications: {
      'Capacity': '27L',
      'Type': 'Convection',
      'Control': 'Touch'
    }
  },

  // 5. AIR FRYERS
  {
    id: 'app-af-1',
    slug: 'philips-essential-air-fryer',
    name: 'Philips Essential Air Fryer XL (6.2L)',
    brand: 'Philips',
    category: 'Appliances',
    subCategory: 'Air Fryers',
    description: '90% less fat with Rapid Air Technology.',
    price: 12999,
    originalPrice: 17995,
    discount: 28,
    rating: 4.8,
    reviews: 15600,
    image: 'https://images.unsplash.com/photo-1584270354941-116b97e0b197?auto=format&fit=crop&w=800&q=80',
    availability: 'in-stock',
    deliveryDate: 'Delivery tomorrow',
    warranty: '2 Year Global Warranty',
    labels: ['HEALTHY', 'PREMIUM PICK'],
    specifications: {
      'Capacity': '6.2L',
      'Power': '2000W',
      'Presets': '7 One-touch'
    }
  },

  // 6. VACUUM CLEANERS
  {
    id: 'app-vc-1',
    slug: 'dyson-v15-detect-cordless-vacuum',
    name: 'Dyson V15 Detect Cordless Vacuum Cleaner',
    brand: 'Dyson',
    category: 'Appliances',
    subCategory: 'Vacuum Cleaners',
    description: 'Laser detects invisible dust on hard floors.',
    longDescription: 'Dyson V15 Detect features a precisely-angled laser that makes invisible dust visible. High Torque cleaner head automatically adapts suction and power. Piezo sensor continuously sizes and counts dust particles.',
    price: 62900,
    originalPrice: 65900,
    discount: 5,
    rating: 4.9,
    reviews: 450,
    image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=800&q=80',
    availability: 'in-stock',
    deliveryDate: 'Delivery in 2 days',
    warranty: '2 Year Warranty',
    labels: ['PREMIUM PICK', 'AI FEATURED'],
    specifications: {
      'Run Time': '60 Mins',
      'Weight': '3.1kg',
      'Suction Power': '240 AW'
    }
  },

  // 7. SMART HOME / ROBOT VACUUM
  {
    id: 'app-rv-1',
    slug: 'mi-robot-vacuum-mop-2i',
    name: 'Mi Robot Vacuum-Mop 2i',
    brand: 'Xiaomi',
    category: 'Appliances',
    subCategory: 'Smart Home Devices',
    description: 'Smart path planning with 2200Pa suction power.',
    price: 18999,
    originalPrice: 24999,
    discount: 24,
    rating: 4.4,
    reviews: 3200,
    image: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&w=800&q=80',
    availability: 'in-stock',
    deliveryDate: 'Delivery in 3 days',
    warranty: '1 Year Warranty',
    labels: ['SMART HOME'],
    specifications: {
      'Suction': '2200Pa',
      'Battery': '2600mAh',
      'Sensors': 'Gyroscope, Accelerometer'
    }
  },

  // 8. COFFEE MACHINES
  {
    id: 'app-cm-1',
    slug: 'philips-fully-auto-espresso-machine',
    name: 'Philips Fully Automatic Espresso Machine',
    brand: 'Philips',
    category: 'Appliances',
    subCategory: 'Coffee Machines',
    description: 'Enjoy 5 varieties of coffee at your fingertips.',
    price: 64999,
    originalPrice: 79995,
    discount: 19,
    rating: 4.7,
    reviews: 840,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b56509d1?auto=format&fit=crop&w=800&q=80',
    availability: 'in-stock',
    deliveryDate: 'Delivery in 4 days',
    warranty: '2 Year Warranty',
    labels: ['PREMIUM PICK'],
    specifications: {
      'Coffee Types': '5 Varieties',
      'Milk System': 'LatteGo',
      'Grinder': 'Ceramic'
    }
  }
];

// GENERATOR LOGIC TO REACH 100+ PRODUCTS
const generateMoreAppliances = () => {
  const more: Product[] = [];
  const appBrands = ['Samsung', 'LG', 'Whirlpool', 'Panasonic', 'Bosch', 'IFB', 'Haier', 'Voltas', 'Godrej', 'Philips', 'Havells', 'Prestige'];
  const appSubCats = [
    'Refrigerators', 'Washing Machines', 'Air Conditioners', 'Microwave Ovens', 
    'Air Fryers', 'Water Purifiers', 'Vacuum Cleaners', 'Coffee Machines', 
    'Smart Home Devices', 'Induction Cooktops', 'Dishwashers', 'Air Purifiers'
  ];

  const subCatSpecs: Record<string, any> = {
    'Refrigerators': { capacity: ['190L', '250L', '350L', '450L', '650L'], price: [15000, 180000] },
    'Washing Machines': { capacity: ['6kg', '7kg', '8kg', '9kg', '10.5kg'], price: [12000, 75000] },
    'Air Conditioners': { tonnage: ['1.0 Ton', '1.5 Ton', '2.0 Ton'], price: [30000, 85000] },
    'Microwave Ovens': { capacity: ['20L', '25L', '30L'], price: [6000, 25000] },
    'Dishwashers': { settings: ['12 Place', '14 Place', '15 Place'], price: [25000, 65000] }
  };

  const images = [
    '1585659722982-7d60710f7173', '1584622650111-993a426fbf0a', '1556911220-e1502d338a83', 
    '1523275335684-37898b6baf30', '1581009146145-b5ef03a7471b', '1511707171634-5f897ff02aa9',
    '1571175432248-ef0218772ff', '1518133910546-b6c2fb7d79e3'
  ];

  for (let i = 1; i <= 90; i++) {
    const brand = appBrands[i % appBrands.length];
    const subCat = appSubCats[i % appSubCats.length];
    const basePrice = (subCatSpecs[subCat]?.price[0] || 5000) + (Math.random() * ((subCatSpecs[subCat]?.price[1] || 50000) - (subCatSpecs[subCat]?.price[0] || 5000)));
    
    more.push({
      id: `app-gen-${i}`,
      slug: `${brand.toLowerCase()}-${subCat.toLowerCase().replace(' ', '-')}-${i}`,
      name: `${brand} ${subCat} ${i % 3 === 0 ? 'Supreme' : i % 2 === 0 ? 'Elite' : 'Plus'} Series`,
      brand,
      category: 'Appliances',
      subCategory: subCat,
      description: `Premium ${subCat.toLowerCase()} from ${brand}. Optimized for Indian conditions.`,
      price: Math.round(basePrice),
      originalPrice: Math.round(basePrice * 1.25),
      discount: 20,
      rating: 4.1 + (Math.random() * 0.8),
      reviews: 100 + (i * 25),
      image: `https://images.unsplash.com/photo-${images[i % images.length]}?auto=format&fit=crop&w=800&q=80`,
      availability: 'in-stock',
      deliveryDate: 'Delivery in 3-5 days',
      energyRating: 3 + (i % 3),
      warranty: '1 Year Warranty',
      labels: basePrice > 50000 ? ['PREMIUM PICK'] : ['BEST SELLER'],
      specifications: {
        'Brand': brand,
        'Type': subCat,
        'Model': `2026 Edition ${i}`
      }
    });
  }

  return more;
};

export const allApplianceProducts = [...applianceProducts, ...generateMoreAppliances()];
