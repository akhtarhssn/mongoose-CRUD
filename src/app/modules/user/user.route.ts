import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

// Create User:
router.post("/create", UserController.createUser);

// Get All Users:
router.get("/", UserController.getAllUsers);

// Get single User:
router.get("/:id", UserController.getUser);

// Delete User:
router.delete("/:id", UserController.deleteUser);

export const UserRoutes = router;
