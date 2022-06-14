import { Pool } from 'mysql2/promise';
import { OrderProducts } from '../interfaces/orderInterface';

class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<OrderProducts[]> {
    const query = `SELECT O.id, O.userId, P.id as productsIds
    FROM Trybesmith.Orders as O
    JOIN Trybesmith.Products as P
    ON P.orderId = O.id`;
    const result = await this.connection.execute(query);
    const [orders] = result;
    return orders as OrderProducts[];
  }
}

export default OrderModel;