import { Request, Response, NextFunction } from 'express';
import joiUser from '../joi/joiUser';

const userValidation = (req: Request, res: Response, next: NextFunction) => {
  const { error } = joiUser.validate(req.body);
  if (error?.message.includes('must')) {
    next({ status: 422, message: error.message });
  }
  if (error?.message.includes('required')) {
    next({ status: 400, message: error.message });
  }
  next();
};

export default userValidation;
