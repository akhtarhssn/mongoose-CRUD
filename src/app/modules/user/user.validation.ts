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

const addressSchema = z.object({
  street: z.string(),
  city: z.string(),
  country: z.string(),
});

const orderSchema = z.object({
  productName: z.string(),
  price: z.number(),
  quantity: z.number(),
});

export const IUserValidation = z.object({
  userId: z.number(),
  fullName: fullNameSchema,
  username: z.string(),
  password: z.string().max(30),
  age: z.number(),
  email: z.string(),
  isActive: z.boolean().default(true),
  hobbies: z.array(z.string()),
  address: addressSchema,
  orders: z.array(orderSchema),
  isDeleted: z.boolean().default(false),
});

// a separate validation for update user
export const IUserUpdateValidation = z.object({
  userId: z.number(),
  username: z.string(),
  fullName: z.object({
    firstName: z.string(),
    lastName: z.string(),
  }),
  age: z.number(),
  email: z.string(),
  isActive: z.boolean(),
  hobbies: z.array(z.string()),
  address: z.object({
    street: z.string(),
    city: z.string(),
    country: z.string(),
  }),
});

export const IOrderValidation = z.object({
  productName: z.string(),
  price: z.number(),
  quantity: z.number(),
});
