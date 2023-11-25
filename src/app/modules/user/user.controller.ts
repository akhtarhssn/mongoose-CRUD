import { Request, Response } from "express";
import { IUserUpdateValidation, IUserValidation } from "./user.validation";
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
      message: "User not found",
      error: {
        code: 404,
        description: "User not found!",
      },
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
    res.status(404).json({
      success: false,
      message: "User not found",
      error: {
        code: 404,
        description: (err as Error).message || "User not found!",
      },
    });
  }
};

// Update user information:
const updateUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const updateData = req.body;

    // Validate the update data using the update schema
    const zodValidatedUpdate = IUserUpdateValidation.parse(updateData);

    // making sure password field is not included in the data
    if ("password" in updateData) {
      throw new Error("Updating the password field is not allowed");
    }

    const result = await UserServices.UpdateUser(userId, zodValidatedUpdate);

    res.status(200).json({
      success: true,
      message: "User data updated successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to update user data",
      error: {
        code: 404,
        description: (err as Error).message || "User not found!",
      },
    });
  }
};

// Delete a user
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
      message: "User not found",
      error: {
        code: 404,
        description: "User not found!",
      },
    });
  }
};

export const UserController = {
  createUser,
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
};
