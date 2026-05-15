export interface OrderData {
  orderItems: any[];
  shippingAddress: any;
  paymentMethod: string;
  itemsPrice: number;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
}

export const createOrder = async (orderData: OrderData) => {
  try {
    const response = await fetch('http://localhost:5000/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify(orderData)
    });

    const data = await response.json();
    if (!data.success) throw new Error(data.message);
    return data.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getMyOrders = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/orders/myorders', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });

    const data = await response.json();
    if (!data.success) throw new Error(data.message);
    return data.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getOrderDetails = async (id: string) => {
  try {
    const response = await fetch(`http://localhost:5000/api/orders/${id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });

    const data = await response.json();
    if (!data.success) throw new Error(data.message);
    return data.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
