import { Schema, model } from 'mongoose';
import { BangladeshDistrict, IUser,  userModel } from './user.interface';


const userSchema = new Schema<IUser, Record<string, never>>(
  {
    name: {
        type: String,
        required: true,
      },
      dates: {
        startDate: {
          type: Date,
          required: true,
        },
        endDate: {
          type: Date,
          required: true,
        },
      },
      destinations: {
        type: [
          {
            type: String,
            enum: Object.values(BangladeshDistrict),
          },
        ],
        required: true,
      },
      activities: {
        type: [String],
        required: true,
      },
      transportationDetails: {
        type: String,
        required: true,
      },
      accommodationDetails: {
        type: String,
        required: true,
      },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

export const User = model<IUser, userModel>('User', userSchema);