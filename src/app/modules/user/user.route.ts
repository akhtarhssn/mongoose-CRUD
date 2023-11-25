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

// add orders:
router.put("/:userId/orders", UserController.addOrder);

// Get all order of an user
router.get("/:userId/orders", UserController.getAllOrders);

// get total order price for an user:
router.get("/:userId/orders/total-price", UserController.getTotalOrderPrice);

export const UserRoutes = router;
