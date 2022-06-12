import { Request, Response } from 'express';
import ProductService from '../services/productService';

class ProductController {
  constructor(private productService = new ProductService()) {}

  public getAll = async (req: Request, res: Response) => {
    const productts = await this.productService.getAll();
    return res.status(200).json(productts);
  };
}

export default ProductController;