import config from "../../../config";
import { IUser } from "./user.interface";
import { User } from "./user.model";

const createUser = async (payload: IUser): Promise<IUser | null> => {
  payload.role='user'
  if(!payload.password){
    payload.password=config.default_User_pass as string
  }
  const result = await User.create(payload);
  return result;
};

export const UserService = {
  createUser,
};
