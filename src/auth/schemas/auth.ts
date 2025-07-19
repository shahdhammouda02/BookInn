import { z } from "zod";

export const loginSchema = (t: (key: string) => string) => {
  return z.object({
    firstName: z
      .string()
      .min(2, { message: t("schema.firstName.min") })
      .max(50, { message: t("schema.firstName.max") })
      .regex(/^[a-zA-Z\u0600-\u06FF]/, {
        message: t("schema.firstName.startWithLetter"),
      }),
    lastName: z
      .string()
      .min(2, { message: t("schema.lastName.min") })
      .max(50, { message: t("schema.lastName.max") })
      .regex(/^[a-zA-Z\u0600-\u06FF]/, { 
        message: t("schema.lastName.startWithLetter"),
      }),
    email: z.string().email(t("schema.email.invalid")),
    password: z.string().min(8, t("schema.password.min")),
    remember: z.boolean().optional(),
  });
};
export type LoginFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  remember?: boolean;
};
