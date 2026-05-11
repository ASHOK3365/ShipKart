import { create } from 'zustand';
import { Product } from '@/data/products';

export interface CartItem extends Product {
  quantity: number;
}

export interface Address {
  id: string;
  name: string;
  phone: string;
  line1: string;
  line2: string;
  city: string;
  state: string;
  pincode: string;
  type: 'home' | 'work' | 'other';
  isDefault?: boolean;
}

export interface DeliveryOption {
  id: string;
  name: string;
  description: string;
  price: number;
  estimatedDays: string;
  icon: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  address: Address;
  delivery: DeliveryOption;
  paymentMethod: string;
  subtotal: number;
  deliveryCharge: number;
  discount: number;
  total: number;
  status: 'confirmed' | 'packed' | 'shipped' | 'out-for-delivery' | 'delivered';
  createdAt: number;
  estimatedDelivery: string;
}

type CheckoutStep = 'cart' | 'address' | 'delivery' | 'payment' | 'review' | 'success';

interface CartStore {
  // Cart
  items: CartItem[];
  savedForLater: Product[];
  isCartOpen: boolean;
  
  // Checkout
  checkoutStep: CheckoutStep;
  
  // Addresses
  addresses: Address[];
  selectedAddressId: string | null;
  
  // Delivery
  selectedDeliveryId: string | null;
  
  // Payment
  selectedPaymentMethod: string | null;
  
  // Coupon
  appliedCoupon: { code: string; discount: number } | null;
  
  // Orders
  orders: Order[];
  currentOrderId: string | null;
  
  // Cart Actions
  openCart: () => void;
  closeCart: () => void;
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  saveForLater: (productId: string) => void;
  moveToCart: (productId: string) => void;
  removeSavedItem: (productId: string) => void;
  clearCart: () => void;
  getSubtotal: () => number;
  getTotal: () => number;
  
  // Checkout Actions
  setCheckoutStep: (step: CheckoutStep) => void;
  
  // Address Actions
  addAddress: (address: Omit<Address, 'id'>) => void;
  removeAddress: (id: string) => void;
  selectAddress: (id: string) => void;
  
  // Delivery Actions
  selectDelivery: (id: string) => void;
  
  // Payment Actions
  selectPayment: (method: string) => void;
  
  // Coupon Actions
  applyCoupon: (code: string) => boolean;
  removeCoupon: () => void;
  
  // Order Actions
  placeOrder: () => void;
  getOrderById: (id: string) => Order | undefined;
}

const deliveryOptions: DeliveryOption[] = [
  { id: 'standard', name: 'Standard Delivery', description: 'Reliable & free for orders above ₹499', price: 0, estimatedDays: '5-7 business days', icon: 'package' },
  { id: 'express', name: 'Express Delivery', description: 'Get it faster with priority handling', price: 99, estimatedDays: '2-3 business days', icon: 'zap' },
  { id: 'sameday', name: 'Same Day Delivery', description: 'Order before 2 PM, get it today', price: 199, estimatedDays: 'Today by 9 PM', icon: 'clock' },
  { id: 'ai-smart', name: 'AI Smart Delivery', description: 'AI picks optimal time & slot for you', price: 49, estimatedDays: '1-2 days, perfect timing', icon: 'brain' },
];

const defaultAddresses: Address[] = [
  {
    id: 'addr-1',
    name: 'Arjun Mehta',
    phone: '+91 98765 43210',
    line1: '42, Silicon Valley Apartments',
    line2: 'Koramangala 4th Block',
    city: 'Bangalore',
    state: 'Karnataka',
    pincode: '560034',
    type: 'home',
    isDefault: true,
  },
  {
    id: 'addr-2',
    name: 'Arjun Mehta',
    phone: '+91 98765 43210',
    line1: 'WeWork Galaxy, 43 Residency Rd',
    line2: 'Ashok Nagar',
    city: 'Bangalore',
    state: 'Karnataka',
    pincode: '560025',
    type: 'work',
  },
];

const validCoupons: Record<string, number> = {
  'WELCOME10': 10,
  'SAVE20': 20,
  'ANTIGRAVITY': 15,
  'PREMIUM50': 50,
  'FIRST100': 100,
};

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  savedForLater: [],
  isCartOpen: false,
  checkoutStep: 'cart',
  addresses: defaultAddresses,
  selectedAddressId: 'addr-1',
  selectedDeliveryId: 'standard',
  selectedPaymentMethod: null,
  appliedCoupon: null,
  orders: [],
  currentOrderId: null,
  
  openCart: () => set({ isCartOpen: true }),
  closeCart: () => set({ isCartOpen: false }),
  
  addItem: (product) => {
    set((state) => {
      const existing = state.items.find((i) => i.id === product.id);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
          isCartOpen: true,
        };
      }
      return { 
        items: [...state.items, { ...product, quantity: 1 }],
        isCartOpen: true,
      };
    });
  },
  
  removeItem: (productId) => {
    set((state) => ({
      items: state.items.filter((i) => i.id !== productId),
    }));
  },
  
  updateQuantity: (productId, quantity) => {
    set((state) => {
      if (quantity <= 0) {
        return { items: state.items.filter((i) => i.id !== productId) };
      }
      return {
        items: state.items.map((i) =>
          i.id === productId ? { ...i, quantity } : i
        ),
      };
    });
  },
  
  saveForLater: (productId) => {
    set((state) => {
      const itemToSave = state.items.find((i) => i.id === productId);
      if (!itemToSave) return state;
      
      const { quantity, ...product } = itemToSave;
      return {
        items: state.items.filter((i) => i.id !== productId),
        savedForLater: [...state.savedForLater, product],
      };
    });
  },
  
  moveToCart: (productId) => {
    set((state) => {
      const product = state.savedForLater.find((i) => i.id === productId);
      if (!product) return state;
      
      return {
        savedForLater: state.savedForLater.filter((i) => i.id !== productId),
        items: [...state.items, { ...product, quantity: 1 }],
      };
    });
  },

  removeSavedItem: (productId) => {
    set((state) => ({
      savedForLater: state.savedForLater.filter((i) => i.id !== productId),
    }));
  },
  
  clearCart: () => {
    set({ items: [] });
  },
  
  getSubtotal: () => {
    return get().items.reduce((total, item) => total + item.price * item.quantity, 0);
  },

  getTotal: () => {
    const state = get();
    const subtotal = state.getSubtotal();
    const delivery = deliveryOptions.find(d => d.id === state.selectedDeliveryId)?.price || 0;
    const couponDiscount = state.appliedCoupon?.discount || 0;
    const discountAmount = Math.min(couponDiscount / 100 * subtotal, subtotal);
    return Math.max(0, subtotal + delivery - discountAmount);
  },

  setCheckoutStep: (step) => set({ checkoutStep: step }),

  addAddress: (address) => {
    const id = 'addr-' + Date.now();
    set((state) => ({
      addresses: [...state.addresses, { ...address, id }],
    }));
  },

  removeAddress: (id) => {
    set((state) => ({
      addresses: state.addresses.filter((a) => a.id !== id),
      selectedAddressId: state.selectedAddressId === id ? null : state.selectedAddressId,
    }));
  },

  selectAddress: (id) => set({ selectedAddressId: id }),

  selectDelivery: (id) => set({ selectedDeliveryId: id }),

  selectPayment: (method) => set({ selectedPaymentMethod: method }),

  applyCoupon: (code) => {
    const discount = validCoupons[code.toUpperCase()];
    if (discount) {
      set({ appliedCoupon: { code: code.toUpperCase(), discount } });
      return true;
    }
    return false;
  },

  removeCoupon: () => set({ appliedCoupon: null }),

  placeOrder: () => {
    const state = get();
    const address = state.addresses.find(a => a.id === state.selectedAddressId);
    const delivery = deliveryOptions.find(d => d.id === state.selectedDeliveryId);
    
    if (!address || !delivery || !state.selectedPaymentMethod) return;

    const subtotal = state.getSubtotal();
    const discountAmount = state.appliedCoupon 
      ? Math.min(state.appliedCoupon.discount / 100 * subtotal, subtotal) 
      : 0;

    const order: Order = {
      id: 'ORD-' + Date.now().toString(36).toUpperCase(),
      items: [...state.items],
      address,
      delivery,
      paymentMethod: state.selectedPaymentMethod,
      subtotal,
      deliveryCharge: delivery.price,
      discount: discountAmount,
      total: state.getTotal(),
      status: 'confirmed',
      createdAt: Date.now(),
      estimatedDelivery: delivery.estimatedDays,
    };

    set({
      orders: [...state.orders, order],
      currentOrderId: order.id,
      items: [],
      checkoutStep: 'success',
      appliedCoupon: null,
      selectedPaymentMethod: null,
    });
  },

  getOrderById: (id) => {
    return get().orders.find(o => o.id === id);
  },
}));

export { deliveryOptions };
