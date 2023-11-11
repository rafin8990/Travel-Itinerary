import { Model } from "mongoose";

<<<<<<< HEAD

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
=======
export enum BangladeshDistrict {
  Dhaka = "Dhaka",
  Chattogram = "Chattogram",
  Rajshahi = "Rajshahi",
  Khulna = "Khulna",
  Barishal = "Barishal",
  Sylhet = "Sylhet",
  Rangpur = "Rangpur",
  Mymensingh = "Mymensingh",
  CoxBazar = "CoxBazar",
}

export type IUser = {
  name: string;
  dates: {
    startDate: Date;
    endDate: Date;
  };
  destinations: BangladeshDistrict[];
  activities: string[];
  transportationDetails: string;
  accommodationDetails: string;
};
>>>>>>> 88f70eeb2b7ac1634b31886bd60c959fd6746a05

export type userModel = Model<IUser, Record<string, unknown>>;

// something
// something
// something
// something
// something
