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
  userId: number;
  fullName: IFullName;
  username: string;
  password: string;
  age: number;
  email: string;
  isActive: boolean;
  hobbies?: string[];
  address: IAddress;
  orders?: IOrder[];
  isDeleted: boolean;
}

// This interface if for user information update:
export interface IUserUpdate {
  userId: number;
  username?: string;
  fullName?: {
    firstName?: string;
    lastName?: string;
  };
  age?: number;
  email?: string;
  isActive?: boolean;
  hobbies?: string[];
  address?: {
    street?: string;
    city?: string;
    country?: string;
  };
}

// Custom static methods:
export interface UserModel extends Model<IUser> {
  // eslint-disable-next-line no-unused-vars
  userExists(id: number): Promise<IUser | null>;
  // eslint-disable-next-line no-unused-vars
  addOrder(userId: number, order: IOrder): Promise<IUser | null>;
}
