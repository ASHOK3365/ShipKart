import { Product } from './products';

const brands = [
  'MAC', 'Dior Beauty', 'Huda Beauty', 'Lakmé', 'Maybelline', 
  'L’Oréal Paris', 'Nykaa Cosmetics', 'The Ordinary', 'Minimalist', 
  'Cetaphil', 'Plum', 'Mamaearth', 'Rare Beauty', 'Charlotte Tilbury'
];

const categories = [
  { name: 'Skincare', sub: 'Care' },
  { name: 'Makeup', sub: 'Cosmetics' },
  { name: 'Perfumes', sub: 'Fragrance' },
  { name: 'Hair Care', sub: 'Treatment' },
  { name: 'Lipsticks', sub: 'Makeup' },
  { name: 'Foundations', sub: 'Makeup' },
  { name: 'Face Serums', sub: 'Skincare' },
  { name: 'Sunscreens', sub: 'Skincare' },
  { name: 'Eye Makeup', sub: 'Makeup' },
  { name: 'Luxury Beauty Kits', sub: 'Premium' },
  { name: 'Organic Beauty', sub: 'Natural' },
  { name: 'Men’s Grooming', sub: 'Care' }
];

const skinTypes = ['All Skin Types', 'Oily', 'Dry', 'Sensitive', 'Combination'];
const shades = ['NC15', 'NC20', 'NC25', 'NC30', 'NC35', 'NC40', 'Fair', 'Medium', 'Deep'];

// Realistic Unsplash IDs for Beauty
const beautyImages: Record<string, string[]> = {
  'Skincare': ['1556228578-0d85b1a4d571', '1598440947619-2c35fc9aa908', '1612817288484-6f916006741a', '1570172236081-aba100c580ed'],
  'Makeup': ['1522335789203-aabd1fc54bc9', '1512496015851-a90fb38ba796', '1616150829429-c1428256bc98', '1596462502278-27bfad450216'],
  'Perfumes': ['1541643600914-78b084683601', '1594035910387-fea47794261f', '1585232351009-aa87416fca90', '1592945403244-b3fbafd7f539'],
  'Hair Care': ['1527799822394-4d18c1710323', '1560869713-7d0a29430803', '1559599101-f09722fb4948', '1552337557-45792b2dd295'],
  'Lipsticks': ['1586771107445-d3ca888129ff', '1591360236630-fdd8b37b3701', '1603126731744-118890209e99', '1608649171197-09d94943f55c'],
  'Foundations': ['1615397024829-5144f3b9000a', '1599733594230-6b822483183b', '1599733589046-10170b09f525', '1615397024255-73479633e690'],
  'Face Serums': ['1620916566398-39f1143ab7be', '1620916566453-9f8748950f83', '1620917670397-dc09e5b72182', '1620916566580-f0000a6c0b3c'],
  'Sunscreens': ['1556229162-4211a76c0032', '1617897903246-719242758050', '1596462502278-27bfad450216', '1612817288484-6f916006741a'],
  'Eye Makeup': ['1516975080664-ed2fc6a32937', '1591360236630-fdd8b37b3701', '1512496015851-a90fb38ba796', '1515688594390-b649af70d282'],
  'Luxury Beauty Kits': ['1596462502278-27bfad450216', '1512496015851-a90fb38ba796', '1612817288484-6f916006741a', '1556228578-0d85b1a4d571'],
  'Organic Beauty': ['1612817288484-6f916006741a', '1596462502278-27bfad450216', '1612817288484-6f916006741a', '1596462502278-27bfad450216'],
  'Men’s Grooming': ['1567538095121-57d427e0f803', '1585922350739-143d21348959', '1599279062331-5d9f194c2380', '1567538095121-57d427e0f803']
};

const generateBeautyProducts = (): Product[] => {
  const beauty: Product[] = [];
  let idCount = 1;

  categories.forEach(cat => {
    brands.forEach((brand, bIdx) => {
      const count = Math.random() > 0.5 ? 1 : 2;
      
      for (let i = 0; i < count; i++) {
        const priceBase = cat.name === 'Perfumes' ? 4500 : 
                          cat.name === 'Luxury Beauty Kits' ? 3500 : 
                          cat.name === 'Foundations' ? 1200 : 
                          cat.name === 'Face Serums' ? 600 : 350;
        
        const price = priceBase + (Math.floor(Math.random() * 40) * 100) + 99; // e.g. 599, 2299
        const originalPrice = Math.floor(price * (1 + (0.2 + Math.random() * 0.3)));
        const discount = Math.round(((originalPrice - price) / originalPrice) * 100);
        
        const imgList = beautyImages[cat.name] || beautyImages['Skincare'];
        const imgId = imgList[idCount % imgList.length];

        beauty.push({
          id: `beauty-${idCount}`,
          slug: `${brand.toLowerCase().replace(/\s/g, '-')}-${cat.name.toLowerCase().replace(/\s/g, '-')}-${idCount}`,
          name: `${brand} ${cat.name.slice(0, -1)} ${idCount % 3 === 0 ? 'Ultra' : idCount % 2 === 0 ? 'Hydrate' : 'Glow'} Pro`,
          brand: brand,
          category: 'Beauty',
          subCategory: cat.name,
          description: `Achieve a flawless look with ${brand} ${cat.name}. Formulated with premium ingredients for visible results and a luxurious experience.`,
          longDescription: `This ${brand} ${cat.name} represents the pinnacle of beauty science. Whether you're looking for skin rejuvenation, perfect coverage, or an enchanting fragrance, this product delivers excellence.\n\nKey Benefits:\n- Dermatologically Tested\n- Long-lasting Formula\n- Premium Packaging\n- Suitable for ${skinTypes[idCount % skinTypes.length]}`,
          price: price,
          originalPrice: originalPrice,
          discount: discount,
          rating: 4.3 + (Math.random() * 0.7),
          reviews: Math.floor(Math.random() * 8000) + 200,
          image: `https://images.unsplash.com/photo-${imgId}?q=80&w=800&auto=format&fit=crop`,
          availability: 'in-stock',
          deliveryDate: 'Delivery in 1-2 Days',
          specifications: {
            'Skin Type': skinTypes[idCount % skinTypes.length],
            'Key Ingredient': idCount % 4 === 0 ? 'Vitamin C' : idCount % 3 === 0 ? 'Hyaluronic Acid' : 'Aloe Vera',
            'Benefits': 'Glow & Hydration',
            'Cruelty Free': 'Yes'
          },
          labels: idCount % 8 === 0 ? ['Best Seller'] : idCount % 6 === 0 ? ['Dermatologist Approved'] : ['Luxury Pick'],
          isBestSeller: idCount % 8 === 0,
          isTrending: idCount % 5 === 0,
          isFlashDeal: idCount % 20 === 0,
          weight: '150ml'
        });
        idCount++;
      }
    });
  });

  return beauty;
};

export const allBeautyProducts = generateBeautyProducts();
