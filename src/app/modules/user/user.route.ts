import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

// Create User:
router.post("/", UserController.createUser);

// Get All Users:
router.get("/", UserController.getAllUsers);

// Get single User:
router.get("/:userId", UserController.getUser);

// Update User:
router.put("/:userId", UserController.updateUser);

// Delete User:
router.delete("/:userId", UserController.deleteUser);

export const UserRoutes = router;
