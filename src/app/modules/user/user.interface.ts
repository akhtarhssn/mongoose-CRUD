import { Model } from "mongoose";

export interface IFullName {
  firstName: string;
  lastName: string;
}

export interface IAddress {
  street: string;
  city: string;
  country: string;
}

export interface IOrder {
  productName: string;
  price: number;
  quantity: number;
}

export interface IUser {
  userId: string;
  fullName: IFullName;
  userName: string;
  password: string;
  age: number;
  email: string;
  isActive: "Active" | "Blocked";
  hobbies?: string[];
  address: IAddress;
  orders: IOrder[];
  isDeleted: boolean;
}

// Custom static methods:
export interface UserModel extends Model<IUser> {
  userExists(id: string): Promise<IUser | null>;
}
