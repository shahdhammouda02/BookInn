import React from "react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

interface offersProp {
  isRTL?: boolean;
}

const Offers = ({ isRTL = false }: offersProp) => {
  const t = useTranslations("Home.Offers");
  return (
    <div
      className={`mt-25
        px-4 sm:px-6 md:px-8 lg:px-10 
        py-4 sm:py-5 md:py-6 lg:py-7 
        justify-center text-center 
        bg-header-background rounded-lg 
        min-h-[250px] sm:min-h-[275px] md:min-h-[300px] lg:min-h-[300px]
        dark:bg-header-background  ${isRTL ? "rtl" : ""}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold mt-6 sm:mt-8 md:mt-10 lg:mt-10 tracking-wide">
        {t("offers")}
      </h1>
      <h3 className="text-base sm:text-lg md:text-xl lg:text-xl mt-2 sm:mt-3 md:mt-3 lg:mt-3 text-foreground/80 tracking-wide whitespace-pre-line">
        {t("description")}
      </h3>
      <div
        className={`flex flex-wrap gap-2 mt-7 justify-center ${
          isRTL ? "flex-row-reverse" : ""
        }`}
      >
        <Button
          size="lg"
          variant="secondary"
          className="bg-chart-2 text-primary-foreground text-md hover:bg-chart-2/80 dark:bg-chart-2 dark:text-primary-foreground"
        >
          {t("buttons.signIn")}
        </Button>
        <Button
          size="lg"
          variant="secondary"
          className="bg-background text-foreground text-md hover:bg-background/80 dark:bg-background dark:text-foreground"
        >
          {t("buttons.register")}
        </Button>
      </div>
    </div>
  );
};

export default Offers;
