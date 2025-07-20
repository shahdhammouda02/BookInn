import Image from "next/image";
import { image6 } from "../../../../../public/images/page";
import SignInForm from "@/auth/sign-in/SignInForm";
import { useTranslations } from "next-intl";

const SignIn = () => {
  const t = useTranslations("Auth");

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div
        className="flex w-full max-w-6xl flex-col items-center gap-10 bg-card p-8 shadow-md rtl:space-x-reverse lg:flex-row lg:gap-12"
        dir="auto" // This allows the direction to follow the language
      >
        <div className="flex-1">
          <Image
            src={image6}
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
                {t("signInTitle")}
              </h1>
              <p className="text-muted-foreground mt-2 text-sm md:text-base">
                {t("signInSubtitle")}
              </p>
            </div>
            <SignInForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;