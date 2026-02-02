import { Router } from "express";
import {
  getAllUsers,
  createUser,
  deleteUser,
  getUserCount,
} from "../controller/userController.js";

const router = Router();

router.get("/", getAllUsers);
router.post("/", createUser);
router.delete("/:id", deleteUser);
router.get("/count", getUserCount);

export default router;
