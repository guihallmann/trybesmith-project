import { OrderProducts } from '../interfaces/orderInterface';
import connection from '../models/connection';
import ProductModel from '../models/productModel';
import OrderModel from '../models/orderModel';

class OrderService {
  public orderModel: OrderModel;

  public prodModel: ProductModel;

  constructor() {
    this.orderModel = new OrderModel(connection);
    this.prodModel = new ProductModel(connection);
  }

  public async getAll(): Promise<OrderProducts[]> {
    const orders = await this.orderModel.getAll();
    const products = await this.prodModel.getAll();
  }
}

export default OrderService;