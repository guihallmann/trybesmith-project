import { Request, Response } from 'express';
import UserService from '../services/userService';
import generateJWT from '../utils/generateJWT';

class UserController {
  constructor(private userService = new UserService()) {}

  public create = async (req: Request, res: Response) => {
    const user = await this.userService.create(req.body);
    const token = generateJWT(user);
    return res.status(201).json({ token });
  };
}

export default UserController;