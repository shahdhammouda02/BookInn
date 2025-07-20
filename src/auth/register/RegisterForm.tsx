"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { LoginFormValues, loginSchema } from "../schemas/auth";
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
import { FaGoogle } from "@/lib/@react-icons/page";
import { useTranslations } from "next-intl";
import { signIn } from "next-auth/react";

const RegisterForm = () => {
  const t = useTranslations("Auth");

  const schema = loginSchema(t);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: LoginFormValues) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="space-y-2 flex-1">
                <FormLabel>{t("firstName")}</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="space-y-2 flex-1">
                <FormLabel>{t("lastName")}</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

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

        <Button
          type="submit"
          className="w-full"
          disabled={form.formState.isSubmitting}
        >
          {t("signUp")}
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
          onClick={() => signIn("google", { callbackUrl: "/" })}
        >
          <FaGoogle className="h-4 w-4 text-[#4285F4] ltr:mr-2 rtl:ml-2" />
          <span className="text-gray-700 dark:text-gray-400">
            {t("continueWithGoogle")}
          </span>
        </Button>

        <div className="text-center text-sm">
          {t("haveAnAccount")}{" "}
          <Link
            href="/auth/signIn"
            className="font-bold text-chart-2 hover:underline"
          >
            {t("signIn")}
          </Link>
        </div>
      </form>
    </Form>
  );
};

export default RegisterForm;
