import { Order } from '../interfaces/orderInterface';
import connection from '../models/connection';
import OrderModel from '../models/orderModel';

class OrderService {
  public orderModel: OrderModel;

  constructor() {
    this.orderModel = new OrderModel(connection);
  }

  public async getAll(): Promise<Order[]> {
    const orders = await this.orderModel.getAll();
    const orderFormat = orders.map((order) => ({
      ...order,
      productsIds: [order.productsIds],
    }));
    return orderFormat;
  }
}

export default OrderService;