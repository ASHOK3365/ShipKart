export interface Product {
  id: string;
  slug?: string;
  title?: string; // Aligned with user backend schema
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
import { allMobileProducts } from './mobileData';
import { allElectronicsProducts } from './electronicsData';
import { allApplianceProducts } from './applianceData';
import { allFashionProducts } from './clothingData';
import { allBeautyProducts } from './beautyData';
import { allTwoWheelerProducts } from './twoWheelerData';

// Re-export Smartphone type for backward compatibility
export type { Smartphone } from './mobileData';

const generateProducts = (): Product[] => {
  const allProducts: Product[] = [];

  allProducts.push(...allGroceryProducts);
  allProducts.push(...allMobileProducts);
  allProducts.push(...allElectronicsProducts);
  allProducts.push(...allApplianceProducts);
  allProducts.push(...allFashionProducts);
  allProducts.push(...allBeautyProducts);
  allProducts.push(...allTwoWheelerProducts);

  // Auto-fill title to match name for backend schema alignment
  return allProducts.map(p => ({
    ...p,
    title: p.title || p.name
  }));
};

export const products: Product[] = generateProducts();
