'use client';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Star, ShieldCheck, Clock, Zap, Heart, Share2, ArrowRight, BrainCircuit, 
  Activity, Smartphone, Box, Shield, ChevronRight, Truck, Info, 
  Award, Gauge, Droplets, Leaf, Fingerprint, Layers 
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import AIAssistant from '@/components/ui/AIAssistant';
import ProductCard from '@/components/product/ProductCard';
import SafeImage from '@/components/ui/SafeImage';
import { products, Product } from '@/data/products';
import { useCartStore } from '@/store/cartStore';
import styles from './product.module.css';

export default function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [showStickyBar, setShowStickyBar] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const foundProduct = products.find(p => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [id]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!product) return <div style={{padding: '10rem', textAlign: 'center'}}>Loading cinematic experience...</div>;

  // Mock gallery (duplicate main image for demo if no gallery exists)
  const gallery = [product.image, product.image, product.image];
  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <main className={styles.container}>
      <div className={styles.ambientBg}></div>

      <div className={styles.contentWrapper}>
        {/* 1. BREADCRUMBS */}
        <div className={styles.breadcrumbs}>
          <a href="/" className={styles.breadcrumbLink}>Home</a>
          <ChevronRight size={14} />
          <a href="#" className={styles.breadcrumbLink}>{product.category}</a>
          <ChevronRight size={14} />
          <span className={styles.breadcrumbCurrent}>{product.brand}</span>
        </div>

        {/* 2 & 3. SHOWCASE & INFO PANEL */}
        <div className={styles.topGrid}>
          {/* Left: Cinematic Showcase */}
          <div className={styles.showcase}>
            <motion.div 
              className={styles.mainImageContainer}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.02 }}
            >
              <SafeImage 
                src={gallery[activeImage]} 
                alt={product.name} 
                fill 
                style={{ objectFit: 'contain', padding: '2rem' }}
              />
            </motion.div>
            <div className={styles.thumbnailGallery}>
              {gallery.map((img, idx) => (
                <motion.div 
                  key={idx} 
                  className={`${styles.thumbnail} ${activeImage === idx ? styles.active : ''}`}
                  onClick={() => setActiveImage(idx)}
                  whileHover={{ y: -5 }}
                >
                  <SafeImage src={img} alt="Thumbnail" fill style={{ objectFit: 'contain', padding: '0.25rem' }} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Info Panel */}
          <motion.div 
            className={styles.infoPanel}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.brandTag}>{product.brand}</div>
            <h1 className={styles.title}>{product.name}</h1>
            
            <div className={styles.ratingRow}>
              <div className={styles.stars}>
                {[1,2,3,4,5].map(star => (
                  <Star key={star} size={20} fill={star <= Math.round(Number(product.rating)) ? "#F59E0B" : "none"} stroke="#F59E0B" />
                ))}
              </div>
              <span className={styles.reviewCount}>{Number(product.rating).toFixed(1)} ({product.reviews.toLocaleString()} reviews)</span>
            </div>

            <div className={styles.priceContainer}>
              <div>
                {product.discount > 0 && <div className={styles.discountBadge}>{product.discount}% OFF</div>}
                <div className={styles.currentPrice}>₹{product.price.toLocaleString('en-IN')}</div>
              </div>
              {product.originalPrice > product.price && (
                <div className={styles.originalPrice}>₹{product.originalPrice.toLocaleString('en-IN')}</div>
              )}
            </div>

            <p className={styles.description}>{product.description}</p>
            
            {/* --- CATEGORY SPECIFIC INTERFACES --- */}

            {/* 1. GROCERY: Freshness & Quantity */}
            {product.category === 'Grocery' && (
              <div className={styles.groceryMeta}>
                <div className={styles.freshTag}>
                  <Leaf size={16} /> 100% Organic & Fresh
                </div>
                <div className={styles.expiryBox}>
                  <Clock size={14} /> Best before: 7 days from delivery
                </div>
                {product.nutritionInfo && (
                  <div className={styles.nutritionTable}>
                    <h4>Nutritional Information (per 100g)</h4>
                    <div className={styles.nutriGrid}>
                      {Object.entries(product.nutritionInfo).map(([key, val]) => (
                        <div key={key} className={styles.nutriItem}>
                          <span className={styles.nutriKey}>{key}</span>
                          <span className={styles.nutriVal}>{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* 2. MOBILES & ELECTRONICS: Storage/RAM Variants */}
            {(product.category === 'Mobiles' || product.category === 'Electronics') && (
              <div className={styles.techVariants}>
                <div className={styles.optionGroup}>
                  <div className={styles.optionLabel}>Select Storage</div>
                  <div className={styles.variantGrid}>
                    {['128GB', '256GB', '512GB'].map(s => (
                      <button key={s} className={s === product.storage ? styles.variantBtnActive : styles.variantBtn}>{s}</button>
                    ))}
                  </div>
                </div>
                <div className={styles.specHighlights}>
                  <div className={styles.specMini}>
                    <Activity size={18} />
                    <span>{product.processor || 'A18 Pro'}</span>
                  </div>
                  <div className={styles.specMini}>
                    <Smartphone size={18} />
                    <span>{product.ram || '8GB RAM'}</span>
                  </div>
                </div>
              </div>
            )}

            {/* 3. APPLIANCES: Energy Ratings & Warranty */}
            {product.category === 'Appliances' && (
              <div className={styles.applianceDetails}>
                <div className={styles.energyCard}>
                  <div className={styles.energyLabel}>Energy Rating</div>
                  <div className={styles.energyStars}>
                    {[1,2,3,4,5].map(s => (
                      <Star key={s} size={24} fill={s <= (product.energyRating || 5) ? "#10B981" : "none"} stroke="#10B981" />
                    ))}
                    <span className={styles.energyValue}>{product.energyRating || 5} Star</span>
                  </div>
                </div>
                <div className={styles.warrantyBadge}>
                  <ShieldCheck size={20} /> {product.warranty || '10 Year Compressor Warranty'}
                </div>
              </div>
            )}

            {/* 4. CLOTHING: Size & Material */}
            {product.category === 'Clothing' && (
              <div className={styles.fashionOptions}>
                <div className={styles.optionGroup}>
                  <div className={styles.optionLabel}>
                    <span>Select Size</span>
                    <button className={styles.sizeGuideBtn}>Size Guide</button>
                  </div>
                  <div className={styles.sizeGrid}>
                    {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                      <button key={size} className={styles.sizeBtn}>{size}</button>
                    ))}
                  </div>
                </div>
                <div className={styles.materialInfo}>
                  <Layers size={18} /> Premium Breathable Fabric - Machine Washable
                </div>
              </div>
            )}

            {/* 5. BEAUTY: Shade Selector */}
            {product.category === 'Beauty' && (
              <div className={styles.beautyOptions}>
                <div className={styles.optionGroup}>
                  <div className={styles.optionLabel}>Select Shade</div>
                  <div className={styles.shadeGrid}>
                    {['#FAD5B8', '#F3C096', '#E4A36E', '#C6804B', '#9B5A2F', '#71401D'].map((color, idx) => (
                      <button key={idx} className={styles.colorCircle} style={{ backgroundColor: color }}></button>
                    ))}
                  </div>
                </div>
                <div className={styles.skinCareNote}>
                  <Droplets size={18} /> Dermatologically Tested • All Skin Types
                </div>
              </div>
            )}

            {/* 6. TWO WHEELER: Vehicle Stats */}
            {product.category === 'Two Wheeler' && (
              <div className={styles.vehicleStats}>
                <div className={styles.statGrid}>
                  <div className={styles.statBox}>
                    <Gauge size={20} />
                    <span>{product.specifications?.['Mileage'] || '45 kmpl'}</span>
                    <label>Mileage</label>
                  </div>
                  <div className={styles.statBox}>
                    <Zap size={20} />
                    <span>{product.specifications?.['Top Speed'] || '110 kmph'}</span>
                    <label>Top Speed</label>
                  </div>
                  <div className={styles.statBox}>
                    <Activity size={20} />
                    <span>{product.specifications?.['Engine'] || '155cc'}</span>
                    <label>Engine</label>
                  </div>
                </div>
                <div className={styles.bookingNotice}>
                  <Info size={16} /> Home delivery & RTO registration included
                </div>
              </div>
            )}

            {/* 4. SMART ACTIONS */}
            <div className={styles.actionRow}>
              <button 
                className={styles.btnPrimary} 
                onClick={() => {
                  useCartStore.getState().addItem(product);
                  window.location.href = '/cart';
                }}
              >
                <Zap size={20} /> {product.category === 'Two Wheeler' ? 'Book Now' : 'Buy Now'}
              </button>
              <button 
                className={styles.btnSecondary}
                onClick={() => useCartStore.getState().addItem(product)}
              >
                Add to Cart
              </button>
              <button className={styles.btnIcon}>
                <Heart size={24} />
              </button>
            </div>

            {/* Offers Section */}
            <div className={styles.offersSection}>
              <h4 className={styles.offerTitle}>Available Offers</h4>
              <div className={styles.offerCard}>
                <Award size={18} className={styles.offerIcon} />
                <p><strong>Bank Offer</strong> 10% instant discount on ICICI Bank Credit Cards</p>
              </div>
              <div className={styles.offerCard}>
                <Zap size={18} className={styles.offerIcon} />
                <p><strong>No Cost EMI</strong> Interest free payments up to 12 months</p>
              </div>
            </div>

            {/* Delivery & Warranty Meta */}
            <div className={styles.metaFeatures}>
              <div className={styles.metaFeature}>
                <div className={styles.metaIcon}><Truck size={24} /></div>
                <div className={styles.metaText}>
                  <h4>Delivery Details</h4>
                  <p>{product.category === 'Grocery' ? 'Fast delivery in 15 mins' : (product.deliveryDate || 'Delivery in 2-4 days')}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 5. SPECIFICATIONS SECTION */}
        {product.specifications && (
          <div className={styles.sectionBlock}>
            <div className={styles.sectionHeader}>
              <h2>Engineered for Excellence</h2>
              <p>Deep dive into the technical specifications.</p>
            </div>
            <div className={styles.specsGrid}>
              {Object.entries(product.specifications).map(([key, val], idx) => (
                <motion.div 
                  key={key} 
                  className={styles.specCard}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className={styles.specIcon}>
                    {idx % 3 === 0 ? <Activity size={32} /> : idx % 3 === 1 ? <Box size={32} /> : <Shield size={32} />}
                  </div>
                  <h4>{key}</h4>
                  <p>{val}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* 6. AI RECOMMENDATIONS */}
        <div className={styles.sectionBlock}>
          <div className={styles.aiRecBanner}>
            <div>
              <h3>AXOR AI Suggests</h3>
              <p>Based on your interest in {product.brand}, here are highly compatible accessories and alternatives.</p>
            </div>
            <button className={styles.btnSecondary} style={{ width: 'auto', border: 'none' }}>
              View Insights <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* 7 & 8. REVIEWS & AI INSIGHTS */}
        <div className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <h2>Customer Voices & AI Insights</h2>
            <p>See what others are saying, summarized instantly by Antigravity AI.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '3rem' }}>
            <div style={{ background: '#FFFFFF', padding: '3rem', borderRadius: '24px', border: '1px solid var(--border)', boxShadow: 'var(--shadow-primary)' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '2rem' }}>Verified Reviews</h3>
              {[1, 2].map((review) => (
                <div key={review} style={{ borderBottom: review === 1 ? '1px solid var(--border)' : 'none', paddingBottom: review === 1 ? '2rem' : '0', marginBottom: review === 1 ? '2rem' : '0' }}>
                  <div style={{ display: 'flex', gap: '0.25rem', color: '#F59E0B', marginBottom: '0.5rem' }}>
                    <Star size={16} fill="#F59E0B" />
                    <Star size={16} fill="#F59E0B" />
                    <Star size={16} fill="#F59E0B" />
                    <Star size={16} fill="#F59E0B" />
                    <Star size={16} fill="#F59E0B" />
                  </div>
                  <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1rem' }}>
                    "Absolutely flawless product. The build quality feels incredibly premium, and it completely exceeded my expectations. Delivery was also extremely fast!"
                  </p>
                  <div style={{ fontWeight: 700 }}>Alex Chen <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>— Verified Buyer</span></div>
                </div>
              ))}
            </div>
            
            <div style={{ background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(168, 85, 247, 0.05))', padding: '3rem', borderRadius: '24px', border: '1px solid rgba(99, 102, 241, 0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--primary)', marginBottom: '1.5rem' }}>
                <BrainCircuit size={28} />
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>AI Comparison Insight</h3>
              </div>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '2rem' }}>
                Compared to 45 other products in this category, the <strong>{product.name}</strong> scores highest in <em>durability</em> and <em>premium finish</em>. It is currently the top-rated choice for professionals.
              </p>
              <button className={styles.btnSecondary} style={{ width: '100%', border: '1px solid rgba(99, 102, 241, 0.3)', color: 'var(--primary)' }}>
                Compare Similar Models
              </button>
            </div>
          </div>
        </div>

        {/* 10. RELATED PRODUCTS */}
        {relatedProducts.length > 0 && (
          <div className={styles.sectionBlock}>
            <div className={styles.sectionHeader}>
              <h2>Similar Masterpieces</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
              {relatedProducts.map((rp, idx) => (
                <motion.div
                  key={rp.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <ProductCard product={rp} />
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 11. STICKY FLOATING PURCHASE BAR */}
      <div className={`${styles.stickyBottomBar} ${showStickyBar ? styles.stickyVisible : ''}`}>
        <div className={styles.stickyInfo}>
          <div className={styles.stickyImage}>
            <SafeImage src={product.image} alt={product.name} fill style={{ objectFit: 'contain' }} />
          </div>
          <div>
            <h3>{product.name}</h3>
            <div className={styles.stickyPrice}>₹{product.price.toLocaleString('en-IN')}</div>
          </div>
        </div>
        <div className={styles.stickyActions}>
          <button className={styles.btnSecondary} style={{ padding: '1rem 2rem' }} onClick={() => useCartStore.getState().addItem(product)}>Add to Cart</button>
          <button className={styles.btnPrimary} style={{ padding: '1rem 2rem' }} onClick={() => {
            useCartStore.getState().addItem(product);
            window.location.href = '/cart';
          }}>Buy Now</button>
        </div>
      </div>

      <AIAssistant />
    </main>
  );
}
