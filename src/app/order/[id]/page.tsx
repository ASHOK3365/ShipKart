'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useCartStore } from '@/store/cartStore';
import { 
  Package, Truck, CheckCircle2, Clock, MapPin, 
  ArrowLeft, ShoppingBag, Phone, CreditCard,
  ChevronRight, Sparkles, BrainCircuit, Shield
} from 'lucide-react';
import Link from 'next/link';
import SafeImage from '@/components/ui/SafeImage';
import styles from './order.module.css';

export default function OrderTrackingPage({ params }: { params: { id: string } }) {
  const { getOrderById } = useCartStore();
  const orderId = params.id;
  const order = getOrderById(orderId);

  if (!order) {
    return (
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.notFound}>
            <Package size={64} strokeWidth={1} />
            <h2>Order Not Found</h2>
            <p>We couldn&apos;t find an order with the ID: {orderId}</p>
            <Link href="/" className={styles.primaryBtn}>Return Home</Link>
          </div>
        </div>
      </div>
    );
  }

  const steps = [
    { label: 'Order Confirmed', description: 'Your order has been received and confirmed.', icon: CheckCircle2, status: 'completed' },
    { label: 'Packed', description: 'Items are being packed and prepared for shipment.', icon: Package, status: order.status === 'confirmed' ? 'active' : 'completed' },
    { label: 'Shipped', description: 'Order is on its way to the courier facility.', icon: Truck, status: ['confirmed', 'packed'].includes(order.status) ? 'pending' : 'active' },
    { label: 'Out for Delivery', description: 'Courier is delivering your order today.', icon: Clock, status: ['confirmed', 'packed', 'shipped'].includes(order.status) ? 'pending' : 'active' },
    { label: 'Delivered', description: 'Order has been successfully delivered.', icon: Sparkles, status: order.status === 'delivered' ? 'completed' : 'pending' },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.ambientBg} />
      <div className={styles.contentWrapper}>
        <div className={styles.topNav}>
          <Link href="/" className={styles.backLink}><ArrowLeft size={18} /> Home</Link>
          <div className={styles.orderMeta}>
            <span>Order #{order.id}</span>
            <span className={styles.dot}>•</span>
            <span>Placed on {new Date(order.createdAt).toLocaleDateString()}</span>
          </div>
        </div>

        <div className={styles.layout}>
          {/* Tracking Section */}
          <div className={styles.mainContent}>
            <motion.div 
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className={styles.cardHeader}>
                <h3><Truck size={20} /> Live Tracking</h3>
                <span className={styles.statusBadge}>{order.status.replace('-', ' ')}</span>
              </div>

              <div className={styles.timeline}>
                {steps.map((step, i) => (
                  <div key={step.label} className={`${styles.timelineItem} ${styles[step.status]}`}>
                    <div className={styles.timelineIcon}>
                      <step.icon size={20} />
                    </div>
                    <div className={styles.timelineContent}>
                      <h4>{step.label}</h4>
                      <p>{step.description}</p>
                    </div>
                    {i < steps.length - 1 && <div className={styles.timelineConnector} />}
                  </div>
                ))}
              </div>

              <div className={styles.deliveryEstimate}>
                <div className={styles.etaInfo}>
                  <Clock size={18} />
                  <div>
                    <span>Estimated Delivery</span>
                    <strong>{order.estimatedDelivery}</strong>
                  </div>
                </div>
                <button className={styles.notifyBtn}>Notify Me</button>
              </div>
            </motion.div>

            {/* Order Items */}
            <motion.div 
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className={styles.cardHeader}>
                <h3><ShoppingBag size={20} /> Order Items ({order.items.length})</h3>
              </div>
              <div className={styles.itemsList}>
                {order.items.map((item) => (
                  <div key={item.id} className={styles.itemRow}>
                    <div className={styles.itemImg}>
                      <SafeImage src={item.image} alt={item.name} fill style={{objectFit:'contain'}} />
                    </div>
                    <div className={styles.itemInfo}>
                      <h4>{item.name}</h4>
                      <span>Qty: {item.quantity} • {item.brand}</span>
                    </div>
                    <div className={styles.itemPrice}>
                      ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar Info */}
          <div className={styles.sidebar}>
            {/* Delivery Address */}
            <motion.div 
              className={styles.card}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className={styles.cardHeader}>
                <h3><MapPin size={20} /> Shipping Address</h3>
              </div>
              <div className={styles.addressInfo}>
                <h4>{order.address.name}</h4>
                <p>{order.address.line1}, {order.address.line2}</p>
                <p>{order.address.city}, {order.address.state} — {order.address.pincode}</p>
                <div className={styles.contact}>
                  <Phone size={14} />
                  <span>{order.address.phone}</span>
                </div>
              </div>
            </motion.div>

            {/* Payment Summary */}
            <motion.div 
              className={styles.card}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className={styles.cardHeader}>
                <h3><CreditCard size={20} /> Payment Summary</h3>
              </div>
              <div className={styles.summaryTable}>
                <div className={styles.sumRow}>
                  <span>Subtotal</span>
                  <span>₹{order.subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className={styles.sumRow}>
                  <span>Delivery Fee</span>
                  <span className={styles.green}>{order.deliveryCharge === 0 ? 'Free' : `₹${order.deliveryCharge}`}</span>
                </div>
                <div className={styles.sumRow}>
                  <span>Discount</span>
                  <span className={styles.green}>-₹{order.discount.toLocaleString('en-IN')}</span>
                </div>
                <div className={styles.totalRow}>
                  <span>Total Paid</span>
                  <span>₹{order.total.toLocaleString('en-IN')}</span>
                </div>
              </div>
              <div className={styles.paymentMethod}>
                <Shield size={14} />
                <span>Paid via {order.paymentMethod.toUpperCase()}</span>
              </div>
            </motion.div>

            {/* AI Insight */}
            <motion.div 
              className={styles.aiInsight}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className={styles.aiHeader}>
                <BrainCircuit size={18} />
                <span>AI Prediction</span>
              </div>
              <p>Based on local traffic and weather, your order is 95% likely to arrive before 6:00 PM tomorrow.</p>
              <div className={styles.aiGlow} />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
