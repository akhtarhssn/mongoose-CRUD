import { Schema, model } from "mongoose";
import {
  IAddress,
  IFullName,
  // IOrder,
  IUser,
  UserModel,
} from "./user.interface";
import config from "../../config";
import bcrypt from "bcrypt";

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

// const orderSchema = new Schema<IOrder>({
//   productName: { type: String, required: true },
//   price: { type: Number, required: true },
//   quantity: { type: Number, required: true },
// });

const addressSchema = new Schema<IAddress>({
  street: { type: String, required: [true, "Street address is required"] },
  city: { type: String, required: [true, "City name is required"] },
  country: { type: String, required: [true, "Country is required"] },
});

const UserSchema = new Schema<IUser, UserModel>({
  userId: {
    type: Number,
    required: true,
    unique: true,
  },
  fullName: {
    type: fullNameSchema,
    required: [true, "Full Name is required"],
    trim: true,
  },
  username: {
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
    type: Boolean,
  },
  hobbies: {
    type: [String],
    required: [true, "Hobbies is required"],
  },
  address: {
    type: addressSchema,
    required: [true, "Address is required"],
  },
  // orders: {
  //   type: [orderSchema],
  // },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

// hashing password:
UserSchema.pre("save", async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  // password hashing and saving password
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_round)
  );
  next();
});

UserSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});

UserSchema.statics.userExists = async (userId: string) => {
  const existingUser = await User.findOne({ userId });
  return existingUser;
};

// create model:
export const User = model<IUser, UserModel>("User", UserSchema);
