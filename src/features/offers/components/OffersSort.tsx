"use client";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

const OffersSort = ({
  sortValue,
  setSortValue,
}: {
  sortValue: string;
  setSortValue: (val: string) => void;
}) => {
  const t = useTranslations("Offers.Sort");
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <Select value={sortValue} onValueChange={setSortValue}>
      <SelectTrigger
        className={`w-[180px] justify-between ${
          isRTL ? "flex-row-reverse" : ""
        }`}
      >
        <SelectValue placeholder={t("placeholder")} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem className={isRTL ? "text-right" : ""} value="priceLow">
          {t("priceLow")}
        </SelectItem>
        <SelectItem value="priceHigh">{t("priceHigh")}</SelectItem>
        <SelectItem value="popular">{t("popular")}</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default OffersSort;
