import React from "react";
import Image from "next/image";
import { register } from "../../../../../public/images/page";
import RegisterForm from "@/auth/register/RegisterForm";

import { useTranslations } from "next-intl";

const Register = () => {
  const t = useTranslations("Auth");

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div
        className="flex w-full max-w-6xl flex-col items-center gap-10 shadow-sm bg-card p-8 rtl:space-x-reverse lg:flex-row lg:gap-12"
        dir="auto"
      >
        <div className="flex-1">
          <Image
            src={register}
            alt={t("imageAlt")}
            width={700}
            height={500}
            className="mx-auto object-cover"
            priority
          />
        </div>
        <div className="flex-1">
          <div className="mx-auto w-full max-w-sm space-y-6">
            <div className="text-center">
              <h1 className="text-2xl font-bold md:text-3xl">
                {t("signUpTitle")}
              </h1>
              <p className="text-muted-foreground mt-2 text-sm md:text-base">
                {t("signUpSubtitle")}
              </p>
            </div>
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
