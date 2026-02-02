import { Router } from "express";
import {
  createOrder,
  getAllOrders,
  getUserOrders,
} from "../controller/orderController.js";

const router = Router();

router.post("/", createOrder);
router.get("/", getAllOrders);
router.get("/user/:userId", getUserOrders);

export default router;
