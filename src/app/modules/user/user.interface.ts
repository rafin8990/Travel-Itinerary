import { Model } from "mongoose";

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

export type userModel = Model<IUser, Record<string, unknown>>;

// something
// something
// something
// something
// something
