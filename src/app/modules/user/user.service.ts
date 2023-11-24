import { IUser, IUserUpdate } from "./user.interface";
import { User } from "./user.model";

const CreateUser = async (userData: IUser) => {
  if (await User.userExists(userData.userId)) {
    throw new Error("User with same id already exists");
  }

  const result = await User.create(userData);

  return result;
};

const GetAllUsers = async () => {
  const result = await User.find();
  return result;
};

const GetUser = async (userId: string) => {
  const result = await User.aggregate([
    { $match: { userId: parseInt(userId) } },
  ]);
  return result;
};

const UpdateUser = async (userId: string, updateUser: IUserUpdate) => {
  const result = await User.updateOne({ userId }, { $set: updateUser });
  return result;
};

const DeleteUser = async (userId: string) => {
  console.log(userId);
  const result = await User.updateOne({ userId }, { isDeleted: true });

  return result;
};

export const UserServices = {
  CreateUser,
  GetAllUsers,
  GetUser,
  DeleteUser,
  UpdateUser,
};
