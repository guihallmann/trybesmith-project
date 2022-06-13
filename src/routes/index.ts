import { Router } from 'express';
import ProductController from '../controllers/productController';
import productValidation from '../middlewares/productValidation';

const router = Router();
const Product = new ProductController();

// Product Routes
router.get('/products', Product.getAll);
router.post('/products', productValidation, Product.create);

// User Routes
router.post('/users');

export default router;