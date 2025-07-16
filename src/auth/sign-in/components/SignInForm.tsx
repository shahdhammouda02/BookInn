"use client";

import { useTranslations } from "next-intl";
import { LoginFormValues, loginSchema } from "@/auth/schemas/auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { FaGoogle } from "@/lib/@react-icons/page";

const SignInForm = () => {
  const t = useTranslations("Auth");
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  async function onSubmit(values: LoginFormValues) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>{t("email")}</FormLabel>
              <FormControl>
                <Input placeholder={t("emailPlaceholder")} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>{t("password")}</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder={t("passwordPlaceholder")}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex items-center justify-between">
          <FormField
            control={form.control}
            name="remember"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-2 rtl:space-x-reverse">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="!mt-0 cursor-pointer">
                  {t("rememberMe")}
                </FormLabel>
              </FormItem>
            )}
          />
          <Link
            href="/reset-password"
            className="text-sm font-medium text-primary hover:underline"
          >
            {t("forgotPassword")}
          </Link>
        </div>

        <Button
          type="submit"
          className="w-full"
          disabled={form.formState.isSubmitting}
        >
          {t("signIn")}
        </Button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              {t("orContinueWith")}
            </span>
          </div>
        </div>

        <Button
          variant="outline"
          type="button"
          className="w-full border-gray-300 hover:bg-gray-50"
        >
          <FaGoogle className="h-4 w-4 text-[#4285F4] ltr:mr-2 rtl:ml-2" />
          <span className="text-gray-700 dark:text-gray-400">
            {t("continueWithGoogle")}
          </span>
        </Button>

        <div className="text-center text-sm">
          {t("dontHaveAccount")}{" "}
          <Link
            href="/register"
            className="font-bold text-chart-2 hover:underline"
          >
            {t("signUp")}
          </Link>
        </div>
      </form>
    </Form>
  );
};

export default SignInForm;