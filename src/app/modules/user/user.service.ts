import { IUser } from "./user.interface";
import { User } from "./user.model";

const createStudent = async (
    payload: IUser,
  ): Promise<IUser | null> => {
    const result = await User.create(payload)
  return result
  };