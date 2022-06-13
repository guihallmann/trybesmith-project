import { Request, Response, NextFunction } from 'express';
import joiProduct from '../joi/joiProduct';

const productValidation = (req: Request, res: Response, next: NextFunction) => {
  const { error } = joiProduct.validate(req.body);
  if (error) console.log(error.message);
  next();
};

export default productValidation;
