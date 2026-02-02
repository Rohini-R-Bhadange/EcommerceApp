import { Router } from "express";
import {
  createProduct,
  getProducts,
  getSingleProduct,
  getProductCount,
} from "../controller/productController.js";

const router = Router();

router.post("/create", createProduct);
router.get("/", getProducts);
router.get("/count", getProductCount);
router.get("/:id", getSingleProduct);

export default router;
