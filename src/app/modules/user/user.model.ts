import { Schema, model } from "mongoose";
import {
  IAddress,
  IFullName,
  IOrder,
  IUser,
  UserModel,
} from "./user.interface";

const fullNameSchema = new Schema<IFullName>({
  firstName: {
    type: String,
    required: [true, "First Name is required"],
  },
  lastName: {
    type: String,
    readonly: [true, "Last Name is required"],
  },
});

const orderSchema = new Schema<IOrder>({
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const addressSchema = new Schema<IAddress>({
  street: { type: String, required: [true, "Street address is required"] },
  city: { type: String, required: [true, "City name is required"] },
  country: { type: String, required: [true, "Country is required"] },
});

const UserSchema = new Schema<IUser, UserModel>({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  fullName: {
    type: fullNameSchema,
    required: [true, "Full Name is required"],
    trim: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  age: {
    type: Number,
    required: [true, "Age is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  isActive: {
    type: String,
    enum: ["Active", "Blocked"],
    default: "Active",
  },
  hobbies: {
    type: [String],
  },
  address: {
    type: addressSchema,
    required: [true, "Address is required"],
  },
  orders: {
    type: [orderSchema],
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

UserSchema.statics.userExists = async (userId: string) => {
  const existingUser = await User.findOne({ userId });
  return existingUser;
};

// create model:
export const User = model<IUser, UserModel>("User", UserSchema);
