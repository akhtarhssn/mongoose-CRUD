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
  const result = await User.aggregate([
    {
      $project: {
        username: 1,
        fullName: 1,
        age: 1,
        email: 1,
        address: 1,
      },
    },
  ]);
  return result;
};

const GetUser = async (userId: string) => {
  // Check if user doesn't exists
  const existingUser = await User.userExists(parseInt(userId));
  if (!existingUser) {
    throw new Error();
  }

  const result = await User.aggregate([
    { $match: { userId: parseInt(userId) } },
    {
      $project: {
        password: 0, // Excluding the password field
      },
    },
  ]);
  return result;
};

const UpdateUser = async (userId: string, updateUser: IUserUpdate) => {
  // Check if user doesn't exists
  const existingUser = await User.userExists(parseInt(userId));
  if (!existingUser) {
    throw new Error();
  }

  const result = await User.updateOne({ userId }, { $set: updateUser });
  return result;
};

const DeleteUser = async (userId: string) => {
  // Check if user doesn't exists
  const existingUser = await User.userExists(parseInt(userId));
  if (!existingUser) {
    throw new Error();
  }
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
