"use client";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import React from "react";

const OffersFilters = () => {
  const t = useTranslations("Offers.Filters");
  return (
    <div className="flex flex-wrap gap-3">
      <Button className="border rounded-md px-3 py-1 text-sm">
        {t("wifi")}
      </Button>
      <Button className="border rounded-md px-3 py-1 text-sm">
        {t("parking")}
      </Button>
      <Button className="border rounded-md px-3 py-1 text-sm">
        {t("pool")}
      </Button>
    </div>
  );
};

export default OffersFilters;
