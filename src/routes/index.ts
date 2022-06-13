import { Router } from 'express';
import ProductController from '../controllers/productController';
import productValidation from '../middlewares/productValidation';
import UserController from '../controllers/userController';

const router = Router();
const Product = new ProductController();
const User = new UserController();

// Product Routes
router.get('/products', Product.getAll);
router.post('/products', productValidation, Product.create);

// User Routes
router.post('/users', User.create);

export default router;