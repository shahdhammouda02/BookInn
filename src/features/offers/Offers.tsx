"use client";
import { useOffersData } from "@/hooks/useOffersData";
import React, { useMemo, useState } from "react";
import OffersHeader from "./components/OffersHeader";
import OffersFilters from "./components/OffersFilters";
import OffersSort from "./components/OffersSort";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { OffersGrid } from "./components/OffersGrid";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

const Offers = () => {
  const t = useTranslations("Offers");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const { data: offers, isLoading, isError } = useOffersData();
  console.log(offers);

  const [sortValue, setSortValue] = useState("");
  const sortedOffers = useMemo(() => {
    if (!offers) return [];

    switch (sortValue) {
      case "priceLow":
        return [...offers].sort((a, b) => a.price - b.price);
      case "priceHigh":
        return [...offers].sort((a, b) => b.price - a.price);
      case "popular":
        return [...offers].sort((a, b) => b.rating - a.rating);
      default:
        return offers;
    }
  }, [offers, sortValue]);

  return (
    <div
      className="px-4 md:px-8 py-6 max-w-7xl mx-auto mt-5"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <OffersHeader />

      <div className="flex flex-col md:flex-row justify-between gap-4 my-6">
        <OffersFilters />
        <OffersSort sortValue={sortValue} setSortValue={setSortValue} />
      </div>

      <Separator className="my-4" />

      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-64 w-full rounded-xl" />
          ))}
        </div>
      ) : isError ? (
        <Alert variant="destructive">
          <AlertTriangle className="h-5 w-5" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{t("errorLoading")}</AlertDescription>
        </Alert>
      ) : !offers || offers.length === 0 ? (
        <div className="text-center text-muted-foreground text-lg">
          {t("noOffers")}
        </div>
      ) : (
        <OffersGrid offers={sortedOffers} />
      )}
    </div>
  );
};

export default Offers;
