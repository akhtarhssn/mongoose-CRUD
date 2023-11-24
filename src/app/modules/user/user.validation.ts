import { z } from "zod";

const fullNameSchema = z.object({
  firstName: z
    .string()
    .min(1)
    .refine((value) => /^[A-Z][a-z]*$/.test(value), {
      message: "First Name should be in capitalized format and alphabetic",
    }),
  lastName: z
    .string()
    .min(1)
    .refine((value) => /^[A-Z][a-z]*$/.test(value), {
      message: "Last Name must be alphabetic",
    }),
});

const orderSchema = z.object({
  productName: z.string(),
  price: z.number(),
  quantity: z.number(),
});

const addressSchema = z.object({
  street: z.string(),
  city: z.string(),
  country: z.string(),
});

export const IUserValidation = z.object({
  userId: z.string(),
  fullName: fullNameSchema,
  userName: z.string(),
  password: z.string(),
  age: z.number(),
  email: z.string(),
  isActive: z.enum(["Active", "Blocked"]).default("Active"),
  hobbies: z.array(z.string()),
  address: addressSchema,
  orders: z.array(orderSchema),
  isDeleted: z.boolean().default(false),
});

export default IUserValidation;
