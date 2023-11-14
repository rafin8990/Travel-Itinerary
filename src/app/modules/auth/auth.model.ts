import { Schema, model } from "mongoose";
import { ILogin, loginModel } from "./auth.interface";

const loginSchema = new Schema<ILogin, Record<string, never>>(
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
},
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const User = model<ILogin, loginModel>("User", loginSchema);
