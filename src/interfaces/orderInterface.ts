interface Order {
  id: number;
  userId: number;
}

interface OrderProducts extends Order{
  productsIds: number[];
}

export { Order, OrderProducts };