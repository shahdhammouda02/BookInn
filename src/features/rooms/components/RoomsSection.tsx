"use client";

import { HotelCard } from "@/features/home/components/HotelCard";
import { useCardData } from "@/hooks/useCardData";
import { useTranslations, useLocale } from "next-intl";
import React from "react";

const RoomsSection = () => {
  const { data, isLoading, isError } = useCardData();
  const t = useTranslations("Rooms.RoomsSection");
  const locale = useLocale();
  const isRtl = locale === "ar";

  const categories = ["room", "hall", "restaurant", "relaxing"];

  if (isLoading)
    return <p className="text-center py-10">{t("loading")}</p>;

  if (isError || !data)
    return (
      <p className="text-center text-red-500 py-10">{t("error")}</p>
    );

  return (
    <section className="bg-header-background/30 dark:bg-header-background/50 rounded-2xl shadow-md py-16 px-4 md:px-8 space-y-16">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4 text-primary drop-shadow-sm dark:text-primary">
          {t("heading")}
        </h1>
      </div>

      {categories.map((key) => {
        let filteredData = data.filter((hotel) => hotel.category === key);
        if (filteredData.length === 0) return null;
        if (isRtl) filteredData = [...filteredData].reverse();

        return (
          <div
            key={key}
            className="bg-background/80 dark:bg-background/60 rounded-xl shadow-md px-4 py-8 space-y-6"
          >
            <div className="text-center">
              <h2 className="text-2xl font-bold text-secondary-foreground dark:text-foreground mb-1">
                {t(`categories.${key}.label`)}
              </h2>
              <p className="text-muted-foreground dark:text-foreground/50">
                {t(`categories.${key}.subtitle`)}
              </p>
            </div>

            <div
              className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ${
                isRtl ? "rtl" : ""
              }`}
            >
              {filteredData.map((hotel) => (
                <HotelCard key={hotel.id} hotel={hotel} />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default RoomsSection;
