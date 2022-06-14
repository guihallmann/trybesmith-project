import { Router } from 'express';
import ProductController from '../controllers/productController';
import productValidation from '../middlewares/productValidation';
import UserController from '../controllers/userController';
import userValidation from '../middlewares/userValidation';
import OrderController from '../controllers/orderController';

const router = Router();
const Product = new ProductController();
const User = new UserController();

// Product Routes
router.get('/products', Product.getAll);
router.post('/products', productValidation, Product.create);

// User Routes
router.post('/users', userValidation, User.create);

// Order Routes
router.get('/orders', Order.getAll);

export default router;