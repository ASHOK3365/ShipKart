'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowLeft, ArrowRight, MapPin, Truck, CreditCard, FileText, CheckCircle2,
  Plus, Home, Briefcase, Clock, Zap, BrainCircuit, Package,
  Banknote, Smartphone, Building2, Wallet, Shield, Sparkles, X,
  Star, Gift, PartyPopper, ChevronRight
} from 'lucide-react';
import SafeImage from '@/components/ui/SafeImage';
import { useCartStore, deliveryOptions } from '@/store/cartStore';
import type { Address } from '@/store/cartStore';
import styles from './checkout.module.css';

const steps = [
  { id: 'address', label: 'Address', icon: MapPin },
  { id: 'delivery', label: 'Delivery', icon: Truck },
  { id: 'payment', label: 'Payment', icon: CreditCard },
  { id: 'review', label: 'Review', icon: FileText },
];

const paymentMethods = [
  { id: 'card', name: 'Credit / Debit Card', desc: 'Visa, Mastercard, Rupay', icon: CreditCard },
  { id: 'upi', name: 'UPI', desc: 'Google Pay, PhonePe, Paytm', icon: Smartphone },
  { id: 'netbanking', name: 'Net Banking', desc: 'All major banks', icon: Building2 },
  { id: 'wallet', name: 'Wallets', desc: 'Paytm, Amazon Pay, Mobikwik', icon: Wallet },
  { id: 'cod', name: 'Cash on Delivery', desc: 'Pay when you receive', icon: Banknote },
];

const deliveryIcons: Record<string, React.ReactNode> = {
  'package': <Package size={22} />,
  'zap': <Zap size={22} />,
  'clock': <Clock size={22} />,
  'brain': <BrainCircuit size={22} />,
};

export default function CheckoutPage() {
  const {
    items, addresses, selectedAddressId, selectedDeliveryId,
    selectedPaymentMethod, getSubtotal, getTotal, appliedCoupon,
    selectAddress, selectDelivery, selectPayment, addAddress,
    placeOrder, orders, currentOrderId,
  } = useCartStore();

  const [activeStep, setActiveStep] = useState(0);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newAddr, setNewAddr] = useState({ name:'', phone:'', line1:'', line2:'', city:'', state:'', pincode:'', type:'home' as const });
  const [cardNum, setCardNum] = useState('');
  const [cardExp, setCardExp] = useState('');
  const [cardCvv, setCardCvv] = useState('');

  const subtotal = getSubtotal();
  const total = getTotal();
  const selectedDelivery = deliveryOptions.find(d => d.id === selectedDeliveryId);
  const selectedAddr = addresses.find(a => a.id === selectedAddressId);
  const currentOrder = currentOrderId ? orders.find(o => o.id === currentOrderId) : null;
  const couponDiscount = appliedCoupon ? Math.min(appliedCoupon.discount / 100 * subtotal, subtotal) : 0;

  const canProceed = () => {
    if (activeStep === 0) return !!selectedAddressId;
    if (activeStep === 1) return !!selectedDeliveryId;
    if (activeStep === 2) return !!selectedPaymentMethod;
    return true;
  };

  const handleNext = () => {
    if (activeStep < 3) setActiveStep(activeStep + 1);
    else { placeOrder(); setActiveStep(4); }
  };

  const handleAddAddress = () => {
    if (!newAddr.name || !newAddr.phone || !newAddr.line1 || !newAddr.city || !newAddr.pincode) return;
    addAddress(newAddr);
    setShowAddForm(false);
    setNewAddr({ name:'', phone:'', line1:'', line2:'', city:'', state:'', pincode:'', type:'home' });
  };

  // If order placed, show success
  if (activeStep === 4 && currentOrder) {
    return (
      <div className={styles.container}>
        <div className={styles.ambientBg} />
        <div className={styles.successWrapper}>
          <motion.div className={styles.successContent} initial={{ opacity:0, scale:0.8 }} animate={{ opacity:1, scale:1 }} transition={{ type:'spring', damping:20 }}>
            <motion.div className={styles.successIcon} initial={{ scale:0 }} animate={{ scale:1 }} transition={{ delay:0.2, type:'spring' }}>
              <CheckCircle2 size={56} />
            </motion.div>
            <motion.div className={styles.confetti} initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.4 }}>
              <PartyPopper size={28} />
            </motion.div>
            <h1>Order Placed Successfully!</h1>
            <p className={styles.orderId}>Order ID: <strong>{currentOrder.id}</strong></p>
            <p className={styles.successMsg}>Thank you for your purchase! Your order is being processed and will be delivered soon.</p>
            <div className={styles.successEstimate}>
              <Truck size={18} />
              <span>Estimated delivery: <strong>{currentOrder.estimatedDelivery}</strong></span>
            </div>
            <div className={styles.successTotal}>
              <span>Amount Paid</span>
              <span>₹{Math.round(currentOrder.total).toLocaleString('en-IN')}</span>
            </div>

            {/* Order Tracking Timeline */}
            <div className={styles.trackingTimeline}>
              {['Confirmed', 'Packed', 'Shipped', 'Out for Delivery', 'Delivered'].map((step, i) => (
                <div key={step} className={`${styles.trackingStep} ${i === 0 ? styles.completed : ''}`}>
                  <div className={styles.trackingIcon}>{i === 0 ? <CheckCircle2 size={20} /> : <span>{i + 1}</span>}</div>
                  <span>{step}</span>
                </div>
              ))}
            </div>

            <div className={styles.successActions}>
              <Link href={`/order/${currentOrder.id}`} className={styles.secondaryBtn}>View Order Details</Link>
              <Link href="/" className={styles.primaryBtn}>Continue Shopping <ArrowRight size={18} /></Link>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  if (items.length === 0 && activeStep < 4) {
    return (
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.emptyState}>
            <h2>Your cart is empty</h2>
            <Link href="/" className={styles.primaryBtn} style={{width:'auto',padding:'1rem 2.5rem'}}>Go Shopping</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.ambientBg} />
      <div className={styles.contentWrapper}>
        <Link href="/cart" className={styles.backLink}><ArrowLeft size={18} /> Back to Cart</Link>

        {/* Step Progress */}
        <div className={styles.stepProgress}>
          {steps.map((step, i) => (
            <React.Fragment key={step.id}>
              <button
                className={`${styles.stepItem} ${i === activeStep ? styles.stepActive : ''} ${i < activeStep ? styles.stepDone : ''}`}
                onClick={() => i < activeStep && setActiveStep(i)}
              >
                <div className={styles.stepCircle}>
                  {i < activeStep ? <CheckCircle2 size={18} /> : <step.icon size={18} />}
                </div>
                <span>{step.label}</span>
              </button>
              {i < steps.length - 1 && <div className={`${styles.stepConnector} ${i < activeStep ? styles.connectorDone : ''}`} />}
            </React.Fragment>
          ))}
        </div>

        <div className={styles.layout}>
          {/* Main Content */}
          <div className={styles.mainSection}>
            <AnimatePresence mode="wait">
              {/* STEP 0: Address */}
              {activeStep === 0 && (
                <motion.div key="address" className={styles.card} initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} exit={{opacity:0,x:20}}>
                  <div className={styles.cardHeader}><h3><MapPin size={20} /> Delivery Address</h3></div>
                  {addresses.map(addr => (
                    <div key={addr.id} className={`${styles.optionCard} ${selectedAddressId === addr.id ? styles.optionActive : ''}`} onClick={() => selectAddress(addr.id)}>
                      <div className={styles.radioCircle}>{selectedAddressId === addr.id && <div className={styles.radioDot} />}</div>
                      <div className={styles.optionInfo}>
                        <div className={styles.addrTop}>
                          <h4>{addr.name}</h4>
                          <span className={styles.addrType}>{addr.type === 'home' ? <Home size={12} /> : <Briefcase size={12} />}{addr.type}</span>
                        </div>
                        <p>{addr.line1}, {addr.line2}</p>
                        <p>{addr.city}, {addr.state} — {addr.pincode}</p>
                        <p className={styles.addrPhone}>{addr.phone}</p>
                      </div>
                    </div>
                  ))}
                  {!showAddForm ? (
                    <button className={styles.addNewBtn} onClick={() => setShowAddForm(true)}><Plus size={16} /> Add New Address</button>
                  ) : (
                    <motion.div className={styles.formCard} initial={{opacity:0,height:0}} animate={{opacity:1,height:'auto'}}>
                      <div className={styles.formRow}>
                        <input placeholder="Full Name" value={newAddr.name} onChange={e => setNewAddr({...newAddr, name: e.target.value})} />
                        <input placeholder="Phone" value={newAddr.phone} onChange={e => setNewAddr({...newAddr, phone: e.target.value})} />
                      </div>
                      <input placeholder="Address Line 1" value={newAddr.line1} onChange={e => setNewAddr({...newAddr, line1: e.target.value})} />
                      <input placeholder="Address Line 2" value={newAddr.line2} onChange={e => setNewAddr({...newAddr, line2: e.target.value})} />
                      <div className={styles.formRow}>
                        <input placeholder="City" value={newAddr.city} onChange={e => setNewAddr({...newAddr, city: e.target.value})} />
                        <input placeholder="State" value={newAddr.state} onChange={e => setNewAddr({...newAddr, state: e.target.value})} />
                        <input placeholder="Pincode" value={newAddr.pincode} onChange={e => setNewAddr({...newAddr, pincode: e.target.value})} />
                      </div>
                      <div className={styles.formActions}>
                        <button className={styles.formSave} onClick={handleAddAddress}>Save Address</button>
                        <button className={styles.formCancel} onClick={() => setShowAddForm(false)}>Cancel</button>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              )}

              {/* STEP 1: Delivery */}
              {activeStep === 1 && (
                <motion.div key="delivery" className={styles.card} initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} exit={{opacity:0,x:20}}>
                  <div className={styles.cardHeader}><h3><Truck size={20} /> Delivery Method</h3></div>
                  {deliveryOptions.map(opt => (
                    <div key={opt.id} className={`${styles.optionCard} ${selectedDeliveryId === opt.id ? styles.optionActive : ''}`} onClick={() => selectDelivery(opt.id)}>
                      <div className={styles.radioCircle}>{selectedDeliveryId === opt.id && <div className={styles.radioDot} />}</div>
                      <div className={styles.deliveryIcon}>{deliveryIcons[opt.icon]}</div>
                      <div className={styles.optionInfo}>
                        <h4>{opt.name}</h4>
                        <p>{opt.description}</p>
                        <span className={styles.deliveryEta}><Clock size={12} /> {opt.estimatedDays}</span>
                      </div>
                      <div className={styles.deliveryPrice}>{opt.price === 0 ? <span className={styles.free}>Free</span> : <span>₹{opt.price}</span>}</div>
                    </div>
                  ))}
                </motion.div>
              )}

              {/* STEP 2: Payment */}
              {activeStep === 2 && (
                <motion.div key="payment" className={styles.card} initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} exit={{opacity:0,x:20}}>
                  <div className={styles.cardHeader}><h3><CreditCard size={20} /> Payment Method</h3></div>
                  {paymentMethods.map(pm => (
                    <div key={pm.id} className={`${styles.optionCard} ${selectedPaymentMethod === pm.id ? styles.optionActive : ''}`} onClick={() => selectPayment(pm.id)}>
                      <div className={styles.radioCircle}>{selectedPaymentMethod === pm.id && <div className={styles.radioDot} />}</div>
                      <div className={styles.payIcon}><pm.icon size={22} /></div>
                      <div className={styles.optionInfo}>
                        <h4>{pm.name}</h4>
                        <p>{pm.desc}</p>
                      </div>
                    </div>
                  ))}
                  {selectedPaymentMethod === 'card' && (
                    <motion.div className={styles.cardForm} initial={{opacity:0,height:0}} animate={{opacity:1,height:'auto'}}>
                      <div className={styles.virtualCard}>
                        <div className={styles.vcChip} /><div className={styles.vcNumber}>{cardNum || '•••• •••• •••• ••••'}</div>
                        <div className={styles.vcBottom}><span>{cardExp || 'MM/YY'}</span><span>VISA</span></div>
                      </div>
                      <input placeholder="Card Number" maxLength={19} value={cardNum} onChange={e => setCardNum(e.target.value)} />
                      <div className={styles.formRow}>
                        <input placeholder="MM/YY" maxLength={5} value={cardExp} onChange={e => setCardExp(e.target.value)} />
                        <input placeholder="CVV" maxLength={3} type="password" value={cardCvv} onChange={e => setCardCvv(e.target.value)} />
                      </div>
                      <div className={styles.secureNote}><Shield size={14} /> Your card details are encrypted and secure</div>
                    </motion.div>
                  )}
                </motion.div>
              )}

              {/* STEP 3: Review */}
              {activeStep === 3 && (
                <motion.div key="review" className={styles.card} initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} exit={{opacity:0,x:20}}>
                  <div className={styles.cardHeader}><h3><FileText size={20} /> Order Review</h3></div>
                  {/* Address */}
                  {selectedAddr && (
                    <div className={styles.reviewSection}>
                      <h4><MapPin size={16} /> Delivery Address</h4>
                      <p><strong>{selectedAddr.name}</strong> — {selectedAddr.line1}, {selectedAddr.city} {selectedAddr.pincode}</p>
                    </div>
                  )}
                  {selectedDelivery && (
                    <div className={styles.reviewSection}>
                      <h4><Truck size={16} /> Delivery</h4>
                      <p>{selectedDelivery.name} — {selectedDelivery.estimatedDays}</p>
                    </div>
                  )}
                  <div className={styles.reviewSection}>
                    <h4><CreditCard size={16} /> Payment</h4>
                    <p>{paymentMethods.find(p => p.id === selectedPaymentMethod)?.name || 'Not selected'}</p>
                  </div>
                  <div className={styles.reviewSection}>
                    <h4><Package size={16} /> Items ({items.length})</h4>
                    {items.map(item => (
                      <div key={item.id} className={styles.reviewItem}>
                        <div className={styles.reviewItemImg}><SafeImage src={item.image} alt={item.name} fill style={{objectFit:'contain'}} /></div>
                        <div><span className={styles.reviewItemName}>{item.name}</span><span className={styles.reviewItemQty}>Qty: {item.quantity}</span></div>
                        <span className={styles.reviewItemPrice}>₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Summary Sidebar */}
          <div className={styles.summaryPanel}>
            <div className={styles.card}>
              <div className={styles.cardHeader}><h3>Order Summary</h3></div>
              <div className={styles.sumRow}><span>Subtotal</span><span>₹{subtotal.toLocaleString('en-IN')}</span></div>
              {appliedCoupon && <div className={styles.sumRow}><span>Coupon</span><span className={styles.green}>-₹{Math.round(couponDiscount).toLocaleString('en-IN')}</span></div>}
              <div className={styles.sumRow}><span>Delivery</span><span className={styles.green}>{selectedDelivery?.price ? `₹${selectedDelivery.price}` : 'Free'}</span></div>
              <div className={styles.sumTotal}><span>Total</span><span>₹{Math.round(total).toLocaleString('en-IN')}</span></div>
              <button className={styles.primaryBtn} onClick={handleNext} disabled={!canProceed()}>
                {activeStep === 3 ? 'Place Order' : 'Continue'} <ArrowRight size={18} />
              </button>
              {activeStep > 0 && <button className={styles.backBtn} onClick={() => setActiveStep(activeStep - 1)}><ArrowLeft size={16} /> Back</button>}
              <div className={styles.trustRow}><Shield size={14} /> Secure checkout by Antigravity</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
