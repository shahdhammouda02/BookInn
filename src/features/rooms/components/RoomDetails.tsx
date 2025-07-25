"use client";

import { useCardById } from "@/hooks/useCardById";
import Image from "next/image";
import { MapPin, Star } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

export const RoomDetails = ({ id }: { id: string }) => {
  const { data: hotel, isLoading, isError } = useCardById(id);
  const t = useTranslations("Rooms.RoomDetails");
  const locale = useLocale();
  const isRtl = locale === "ar";

  if (isLoading)
    return (
      <p className="text-center py-10 text-muted-foreground">
        {t("loading")}
      </p>
    );

  if (isError || !hotel)
    return (
      <p className="text-red-500 text-center py-10">{t("notFound")}</p>
    );

  return (
    <div className="container mx-auto px-4 py-16">
      <div
        className={`max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 mb-10 ${
          isRtl ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className="relative w-full md:w-[40%] h-[280px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src={hotel.image}
            alt={t(`titles.${hotel.titleKey}`)}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div
          className={`w-full md:w-[60%] flex flex-col mt-3 ${
            isRtl
              ? "items-end text-right sm:items-end pr-1 md:pr-12"
              : "items-start text-left sm:items-start pl-1 md:pl-12"
          }`}
        >
          <h1 className="text-3xl font-bold text-primary mb-3">
            {t(`titles.${hotel.titleKey}`)}
          </h1>

          <div
            className={`flex items-center gap-2 text-muted-foreground text-sm mb-3 ${
              isRtl ? "justify-end" : "justify-start"
            }`}
          >
            <MapPin className="w-4 h-4" />
            <span>{t(`locations.${hotel.locationKey}`)}</span>
          </div>

          <div
            className={`flex items-center gap-4 mb-4 ${
              isRtl ? "justify-end flex-row-reverse" : "justify-start"
            }`}
          >
            <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium">
              {hotel.price}
            </span>
            <span className="flex items-center gap-1 text-yellow-500 text-sm font-medium">
              <Star className="w-4 h-4 fill-yellow-400" />
              {hotel.rating}
            </span>
          </div>

          <p className="text-sm leading-relaxed text-foreground dark:text-foreground/60 mb-3">
            {t("description", {
              category: t(`categories.${hotel.category}`),
            })}
          </p>

          <div className={`${isRtl ? "justify-end" : "justify-start"} flex`}>
            <button className="mt-2 bg-chart-2 dark:bg-chart-2/75 dark:hover:bg-chart-2/80 text-white px-6 py-2 rounded-lg hover:bg-chart-2/90 transition">
              {t("bookNow")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
