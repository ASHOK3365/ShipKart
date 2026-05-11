/**
 * Cloudinary image optimization utility
 */
export const getOptimizedImage = (src: string, width = 1200, quality = 80) => {
  if (src.includes('images.unsplash.com')) {
    try {
      const url = new URL(src);
      url.searchParams.set('w', width.toString());
      url.searchParams.set('q', quality.toString());
      url.searchParams.set('auto', 'format');
      return url.toString();
    } catch (e) {
      return src;
    }
  }



  
  return src;
};
