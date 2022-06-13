import { Request, Response, NextFunction } from 'express';
import joiProduct from '../joi/joiProduct';

const productValidation = (req: Request, res: Response, next: NextFunction) => {
  const { error } = joiProduct.validate(req.body);
  if (error?.message.includes('must')) {
    next({ status: 422, message: error.message });
  }
  if (error?.message.includes('required')) {
    next({ status: 400, message: error.message });
  }
  next();
};

export default productValidation;
