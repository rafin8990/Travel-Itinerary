import { Model } from "mongoose";

export type ILogin ={
    phoneNumber:string;
    password:string;
}

export type loginModel = Model<ILogin, Record<string, unknown>>;