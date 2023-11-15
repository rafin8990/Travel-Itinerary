import { Schema, model } from "mongoose";
import { IUser, userModel } from "./user.interface";

const userSchema = new Schema<IUser, Record<string, never>>(
  {
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    name: {
      firstName: {
        type: String,
        required: true,
      },
      middleName: {
        type: String,
      },
      lastName: {
        type: String,
        required: true,
      },
    },
    address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);


userSchema.methods.isUserExist = async function (
  id: string,
): Promise<Partial<IUser | null>> {
  const user = await User.findOne(
    { id },
    { id: 1, password: 1, role: 1, needsPasswordChange: 1 },
  );
  return user;
};

userSchema.methods.isPasswordMatched = async function (
  givenPassword: string,
  savedPassword: string,
): Promise<boolean> {
  const isMatched = await bcrypt.compare(givenPassword, savedPassword);
  return isMatched;
};

userSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(
    this.password,
    Number(config.bycrypt_sault_round),
  );
  next();
});
export const User = model<IUser, userModel>("User", userSchema);
