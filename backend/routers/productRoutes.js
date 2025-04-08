import express from 'express';
import { addProduct,getAllProducts } from '../controllers/productController.js';
import { uploadImage } from '../Middlewares/upload.js';

const router = express.Router();

router.get('/', getAllProducts);
router.post('/add', uploadImage, addProduct);

export default router;