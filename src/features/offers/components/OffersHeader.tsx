import { useTranslations } from "next-intl";
import React from "react";

const OffersHeader = () => {
  const t = useTranslations("Offers");

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold">{t("headerTitle")}</h1>
      <p className="text-muted-foreground mt-2">{t("headerSubtitle")}</p>
    </div>
  );
};

export default OffersHeader;
