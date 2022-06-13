import { Request, Response } from 'express';
import ProductService from '../services/productService';

class ProductController {
  constructor(private productService = new ProductService()) {}

  public getAll = async (req: Request, res: Response) => {
    const products = await this.productService.getAll();
    return res.status(200).json(products);
  };

  public create = async (req: Request, res: Response) => {
    const product = await this.productService.create(req.body);
    return res.status(201).json(product);
  };
}

export default ProductController;