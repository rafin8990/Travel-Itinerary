import httpStatus from "http-status";
import config from "../../../config";
import ApiError from "../../../errors/ApiError";
import { IUser } from "./user.interface";
import { User } from "./user.model";

const createUser = async (payload: IUser): Promise<IUser | null> => {
  payload.role = "user";
  if (!payload.password) {
    payload.password = config.default_User_pass as string;
  }
  const user = await User.find({}, { phoneNumber: 1 });
  const isExist = user.map(
    (newUser) => newUser.phoneNumber === payload.phoneNumber
  );

  if (isExist) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Phone Number Already exist");
  }
  const result = await User.create(payload);
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, "failed to create User");
  }
  return result;
};

export const UserService = {
  createUser,
};
