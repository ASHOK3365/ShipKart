import { Product } from './products';

const brands = [
  'Nike', 'Adidas', 'Puma', 'Zara', 'H&M', 'Levi\'s', 
  'Tommy Hilfiger', 'Calvin Klein', 'US Polo Assn.', 
  'Allen Solly', 'Roadster', 'Jack & Jones'
];

const categories = [
  { name: 'T-Shirts', sub: 'Topwear' },
  { name: 'Hoodies', sub: 'Winterwear' },
  { name: 'Shirts', sub: 'Topwear' },
  { name: 'Jeans', sub: 'Bottomwear' },
  { name: 'Jackets', sub: 'Outerwear' },
  { name: 'Sneakers', sub: 'Footwear' },
  { name: 'Activewear', sub: 'Sportswear' },
  { name: 'Formal Wear', sub: 'Office' },
  { name: 'Ethnic Wear', sub: 'Traditional' },
  { name: 'Women Fashion', sub: 'Premium' },
  { name: 'Winter Wear', sub: 'Season' },
  { name: 'Streetwear', sub: 'Lifestyle' }
];

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
const colors = ['#000000', '#FFFFFF', '#1a1a1a', '#f5f5dc', '#000080', '#800000', '#2e8b57', '#808080'];

// Realistic Unsplash IDs for Fashion
const fashionImages: Record<string, string[]> = {
  'T-Shirts': ['1521572163474-6864f9cf17ab', '1583743814966-893bd0f5191e', '1576566588028-4147f3842f27', '1562157873-818bc0726f68'],
  'Hoodies': ['1556821840-3a63f95609a7', '1511105612320-2e62a04dd044', '1578587018452-892bacef3f21', '1620799140408-edc6dcb6d633'],
  'Shirts': ['1596755094514-f870ed0aee72', '1602810318383-e386cc2a3ccf', '1603252109303-2751441bb15e', '1598033129183-c4f50c717658'],
  'Jeans': ['1542272604-787c3835535d', '1541099649105-f69ad21f3246', '1582552919992-37389b9dc82d', '1604176354204-926873ff3da9'],
  'Jackets': ['1551028150-64b9f398f678', '1591047139829-d91aecb6caea', '1551488831-00ddcb6c6bd3', '1544022613-e845a7a78440'],
  'Sneakers': ['1542291026-7eec264c27ff', '1525966222134-94498a8439ba', '1606107557195-0e29a4b5b4aa', '1549298916-b41d501d3772'],
  'Activewear': ['1534438327276-14e5300c3a48', '1517836357463-d25dfeac3438', '1483721310020-0355cd4f3330', '1518310383802-640c2de311b2'],
  'Formal Wear': ['1594932224010-75b4367ab21d', '1605518216938-7c31b7b14ad0', '1507679799987-c7377f323bc8', '1489980501511-c6930e7ced60'],
  'Ethnic Wear': ['1610030469983-98e6f24941da', '1583337130417-3346a1be7dee', '1599032909746-507ef7269f9a', '1617627143750-d86bc21e42bb'],
  'Women Fashion': ['1490481658045-3646a7eb993c', '1539109136858-084046fa5cd7', '1515886657613-9f231ad7ffd8', '1525507119028-29a4435ceeae'],
  'Winter Wear': ['1483985988302-5e4ad242f57b', '1543076659-1e3927a70f24', '1516062423002-c840530d684a', '1602266222830-c4f2e469b2d2'],
  'Streetwear': ['1552374196-1ab2a1c593e8', '1503342217034-ce8523ee486a', '1551232864-123f030f2888', '1529139513044-40e1c274d754']
};

const generateClothingProducts = (): Product[] => {
  const clothing: Product[] = [];
  let idCount = 1;

  categories.forEach(cat => {
    brands.forEach((brand, bIdx) => {
      // Create 1-2 products per brand per category to get ~150-200
      const count = Math.random() > 0.5 ? 1 : 2;
      
      for (let i = 0; i < count; i++) {
        const priceBase = cat.name === 'Sneakers' ? 5000 : 
                          cat.name === 'Jeans' ? 3000 : 
                          cat.name === 'Jackets' ? 4500 : 
                          cat.name === 'Ethnic Wear' ? 3500 : 800;
        
        const price = priceBase + (Math.floor(Math.random() * 50) * 100) - 10; // e.g. 4999, 2990
        const originalPrice = Math.floor(price * (1 + (0.3 + Math.random() * 0.4)));
        const discount = Math.round(((originalPrice - price) / originalPrice) * 100);
        
        const imgList = fashionImages[cat.name] || fashionImages['T-Shirts'];
        const imgId = imgList[idCount % imgList.length];

        clothing.push({
          id: `cloth-${idCount}`,
          slug: `${brand.toLowerCase().replace(/\s/g, '-')}-${cat.name.toLowerCase().replace(/\s/g, '-')}-${idCount}`,
          name: `${brand} ${cat.name.slice(0, -1)} ${idCount % 3 === 0 ? 'Premium' : idCount % 2 === 0 ? 'Essential' : 'Classic'} Series`,
          brand: brand,
          category: 'Clothing',
          subCategory: cat.name,
          description: `Experience ultimate comfort with this ${brand} ${cat.name}. Designed for the modern individual who values both style and durability.`,
          longDescription: `This ${brand} ${cat.name} is a testament to high-quality craftsmanship. Made from premium sustainable materials, it offers a perfect balance of breathability and structure. Whether you're heading to a casual outing or a formal event, this piece ensures you stay at the top of your fashion game.\n\nFeatures:\n- Premium Fabric Blend\n- Reinforced Stitching\n- Breathable Design\n- Modern Fit`,
          price: price,
          originalPrice: originalPrice,
          discount: discount,
          rating: 4.0 + (Math.random() * 1),
          reviews: Math.floor(Math.random() * 5000) + 100,
          image: `https://images.unsplash.com/photo-${imgId}?q=80&w=800&auto=format&fit=crop`,
          colors: colors.slice(0, 3 + Math.floor(Math.random() * 3)),
          availability: 'in-stock',
          deliveryDate: 'Delivery in 2-4 Days',
          specifications: {
            'Material': '95% Cotton, 5% Elastane',
            'Fit': i % 2 === 0 ? 'Regular Fit' : 'Slim Fit',
            'Pattern': 'Solid',
            'Wash Care': 'Machine wash cold, tumble dry low'
          },
          labels: idCount % 10 === 0 ? ['New Arrival'] : idCount % 7 === 0 ? ['Best Seller'] : [],
          isBestSeller: idCount % 7 === 0,
          isTrending: idCount % 5 === 0,
          isFlashDeal: idCount % 15 === 0,
          weight: '400g'
        });
        idCount++;
      }
    });
  });

  return clothing;
};

export const allClothingProducts = generateClothingProducts();
