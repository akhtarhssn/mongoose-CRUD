import { IUser } from "./user.interface";
import { User } from "./user.model";

const CreateUser = async (userData: IUser) => {
  if (await User.userExists(userData.userId)) {
    throw new Error(`User ${userData.userId} already exists`);
  }

  const result = await User.create(userData);

  return result;
};

const GetAllUsers = async () => {
  const result = await User.find();
  return result;
};

const GetUser = async (userId: string) => {
  const result = await User.aggregate([{ $match: { userId: userId } }]);
  return result;
};

const DeleteUser = async (userId: string) => {
  const result = await User.updateOne({ userId }, { isDeleted: true });

  return result;
};

export const UserServices = {
  CreateUser,
  GetAllUsers,
  GetUser,
  DeleteUser,
};
