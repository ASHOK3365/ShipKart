'use client';
import React, { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';
import { ImageOff, Loader2 } from 'lucide-react';
import styles from './SafeImage.module.css';
import { getOptimizedImage } from '@/utils/cloudinary';


interface SafeImageProps extends Omit<ImageProps, 'onError'> {
  fallbackSrc?: string;
}

const SafeImage: React.FC<SafeImageProps> = ({ 
  src, 
  alt, 
  fallbackSrc = 'https://images.unsplash.com/photo-1560393464-5c69a73c5770?q=80&w=1200&auto=format',
  className,
  ...props 
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const optimizedSrc = typeof src === 'string' ? getOptimizedImage(src) : src;
    setImgSrc(optimizedSrc);
    setHasError(false);
    setIsLoading(true);
  }, [src]);




  return (
    <div className={`${styles.imageWrapper} ${className} ${isLoading ? styles.loading : ''}`}>
      {isLoading && (
        <div className={styles.skeleton}>
          <div className={styles.shimmer} />
          <Loader2 className={styles.spinner} size={20} />
        </div>
      )}
      
      {hasError ? (
        <div className={styles.fallback}>
          <ImageOff size={32} className={styles.fallbackIcon} />
          <span className={styles.fallbackText}>Image Not Available</span>
        </div>
      ) : (
        <Image
          {...props}
          src={imgSrc}
          alt={alt}
          onLoad={() => setIsLoading(false)}

          onError={() => {
            setHasError(true);
            setIsLoading(false);
            setImgSrc(fallbackSrc);
          }}
          className={`${styles.image} ${isLoading ? styles.hidden : styles.visible}`}
          loading={props.priority ? undefined : 'lazy'}
        />
      )}

    </div>
  );
};

export default SafeImage;
