import express from 'express';
const router = express.Router();
import submitContactForm from '../controller/contactController.js';

router.post('/', submitContactForm);

export default router;