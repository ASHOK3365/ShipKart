import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.SITE_URL || 'https://shipkart-ai.vercel.app';
  
  // Define static routes
  const staticRoutes = [
    '',
    '/categories/grocery',
    '/categories/mobiles',
    '/categories/electronics',
    '/categories/appliances',
    '/categories/fashion',
    '/categories/beauty',
    '/categories/two-wheeler',
    '/cart',
    '/account',
    '/account/orders',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as any,
    priority: route === '' ? 1 : 0.8,
  }));

  return [...staticRoutes];
}
