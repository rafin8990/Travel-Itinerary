import { z } from "zod";

const createUserZodSchema = z.object({
  body: z.object({
    phoneNumber: z.string({
      required_error: "Phone Number is required",
    }),
    password: z.string({
      required_error: "Password is required",
    }),
    name: z.object({
      firstName: z.string({
        required_error: "First Name Is Required",
      }),
      middleName: z.string({}).optional(),
      lastName: z.string({
        required_error: "Last Name Is Required",
      }),
    }),
    address: z.string({
      required_error: "Address is required",
    }),
  }),
});

export const UserValidation={
    createUserZodSchema
}
