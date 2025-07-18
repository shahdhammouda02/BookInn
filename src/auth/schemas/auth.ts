import { z } from "zod";

export const loginSchema = (t: (key: string) => string) => {
  return z.object({
    username: z
      .string()
      .min(2, { message: t("schema.username.min") })
      .max(50, { message: t("schema.username.max") })
      .regex(/^[a-zA-Z][a-zA-Z0-9]*$/, {
        message: t("schema.username.regex"),
      }),
    email: z.string().email(t("schema.email.invalid")),
    password: z.string().min(8, t("schema.password.min")),
    remember: z.boolean().optional(),
  });
};
export type LoginFormValues = {
  username: string;
  email: string;
  password: string;
  remember?: boolean;
};
