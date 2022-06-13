import { Router } from 'express';
import ProductController from '../controllers/productController';

const router = Router();
const Product = new ProductController();

router.get('/products', Product.getAll);
router.post('/products', Product.create);

export default router;