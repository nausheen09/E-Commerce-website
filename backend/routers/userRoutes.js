import express from "express";
const router = express.Router();
import {
    getAllUsers,
    updateUser,
    deleteUser,
    login,
    signup,
    isAdmin
} from "../controller/userController.js";
import authenticate from "../Middlewares/authenticate.js";

router.get("/users", getAllUsers);
router.post("/signup", signup);
router.post("/login", login);
router.delete("/user/:id", deleteUser)
router.put("/user/:id", updateUser)
router.get("/isAdmin", authenticate, isAdmin)
export default router
