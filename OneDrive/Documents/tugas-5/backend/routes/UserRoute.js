import express from "express";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getUserById,
} from "../controllers/UserController.js";

const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/add-user", createUser);
router.put("/edit-user/:id", updateUser);
router.delete("/delete-user/:id", deleteUser);

export default router;
