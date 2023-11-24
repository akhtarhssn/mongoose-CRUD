import { Request, Response } from "express";
import { IUserValidation } from "./user.validation";
import { UserServices } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;

    const zodValidatedUser = IUserValidation.parse(userData);

    const result = await UserServices.CreateUser(zodValidatedUser);

    res.status(200).json({
      success: true,
      message: "User created successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: (err as Error).message || "Something went wrong",
      error: err,
      // error: (err as Error).message,
      // error: err.issues[0].message,
    });
  }
};

// Get all users
const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.GetAllUsers();

    res.status(200).json({
      success: true,
      message: "Users data retrieved successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: (err as Error).message || "Something went wrong",
      error: err,
      // error: (err as Error).message,
      // error: err.issues[0].message,
    });
  }
};

// Get single user:
const getUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const result = await UserServices.GetUser(userId);

    res.status(200).json({
      success: true,
      message: "User data retrieved successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: (err as Error).message || "Something went wrong",
      error: err,
      // error: (err as Error).message,
      // error: err.issues[0].message,
    });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const result = await UserServices.DeleteUser(userId);

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: (err as Error).message || "Something went wrong",
      error: err,
      // error: (err as Error).message,
      // error: err.issues[0].message,
    });
  }
};

export const UserController = {
  createUser,
  getAllUsers,
  getUser,
  deleteUser,
};
