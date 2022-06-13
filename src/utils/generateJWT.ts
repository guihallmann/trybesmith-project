import jwt from 'jsonwebtoken';
import IUSer from '../interfaces/userInterface';

const jwtSecret = 'tinkywinky';
const jwtConfig: object = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const generateJWT = (payload: IUSer) => {
  const token = jwt.sign({ data: payload }, jwtSecret, jwtConfig);
  return token;
};

export default generateJWT;
