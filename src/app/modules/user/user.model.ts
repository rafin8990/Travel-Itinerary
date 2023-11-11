import { Schema, model } from "mongoose";
import {  IUser, userModel } from "./user.interface";
import { string } from "zod";

const userSchema = new Schema<IUser, Record<string, never>>(
  {
    phoneNumber:{
      type:String,
      required:true
    },
    password:{
      type:String,
      required:true
    },
    name: {
      firstName: {
        type: String,
        required: true,
      },
    middleName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
    },
    address:{
      type:String,
      required:true
    }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const User = model<IUser, userModel>("User", userSchema);
