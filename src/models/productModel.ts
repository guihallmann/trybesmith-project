import { Pool } from 'mysql2/promise';
import IProduct from '../interfaces/productInteface';

class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IProduct[]> {
    const result = await this.connection.execute('SELECT * FROM Trybesmith.Products');
    const [products] = result;
    return products as IProduct;
  }
}

export default ProductModel;