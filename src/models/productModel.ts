import { Pool } from 'mysql2/promise';
import { ResultSetHeader } from 'mysql2';
import IProduct from '../interfaces/productInterface';

class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IProduct[]> {
    const result = await this.connection.execute('SELECT * FROM Trybesmith.Products');
    const [products] = result;
    return products as IProduct[];
  }

  public async create(product: IProduct): Promise <IProduct> {
    const { name, amount } = product;
    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?,?);';
    const [result] = await this.connection.execute<ResultSetHeader>(query, [name, amount]);
    const { insertId } = result;
    return { id: insertId, name, amount };
  }
}

export default ProductModel;