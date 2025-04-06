import express from "express";
const router = express.Router();
import authenticate from "../Middlewares/authenticate.js";
import {
    getCart
} from "../controller/cartController.js";

router.get("/", authenticate, getCart);

export default router