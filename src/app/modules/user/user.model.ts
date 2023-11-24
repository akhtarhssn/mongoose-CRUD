import { Schema } from "mongoose";
import { IAddress, IUser, UserModel } from "./user.interface";

const fullNameSchema = new Schema<IUser>({
  firstName: {
    type: String,
    required: [true, "First Name is required"],
  },
  lastName: {
    type: String,
    readonly: [true, "Last Name is required"],
  },
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
});
