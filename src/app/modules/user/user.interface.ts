import { Model } from "mongoose";


export type IUser= {
    phoneNumber:string;
    password:string;
    name:{
      firstName:string;
      middleName?:string;
      lastName:string;
    },
    address:string;

  }

  export type userModel = Model<IUser, Record<string, unknown>>;