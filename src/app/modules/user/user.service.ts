import { IUser } from "./user.interface";
import { User } from "./user.model";

const createUser = async (userData: IUser) => {
  if (await User.userExists(userData.userId)) {
    throw new Error(`User ${userData.userId} already exists`);
  }

  const result = await User.create(userData);

  return result;
};

const getAllUsers = async () => {
  const result = await User.find();
  return result;
};

const getUser = async (userId: string) => {
  const result = await User.aggregate([{ $match: { userId: userId } }]);
  return result;
};

const deleteUser = async (userId: string) => {
  const result = await User.updateOne({ userId }, { isDeleted: true });

  return result;
};

export const UserServices = {
  createUser,
  getAllUsers,
  getUser,
  deleteUser,
};
