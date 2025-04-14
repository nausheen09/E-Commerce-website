import express from 'express';
import { addProduct,getAllProducts } from '../controller/productController.js';
import { deleteProduct, updateProduct } from '../controller/productController.js';
import { uploadImage } from '../Middlewares/uploadMulter.js';
const router = express.Router();
router.get('/', getAllProducts);
router.post('/add', uploadImage, addProduct);
router.delete('/delete/:id', deleteProduct);
router.put('/update/:id', uploadImage, updateProduct);
export default router;




