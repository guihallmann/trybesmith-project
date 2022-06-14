import { Pool } from 'mysql2/promise';
import { Order } from '../interfaces/orderInterface';

class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Order[]> {
    const result = await this.connection.execute('SELECT * FROM Trybesmith.Orders');
    const [orders] = result;
    return orders as Order[];
  }
}

export default OrderModel;