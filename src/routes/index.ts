import { Router } from 'express';
import ProductController from '../controllers/productController';
import productValidation from '../middlewares/productValidation';

const router = Router();
const Product = new ProductController();

router.get('/products', Product.getAll);
router.post('/products', productValidation, Product.create);

export default router;