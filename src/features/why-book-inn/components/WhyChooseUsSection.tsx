"use client";
import React from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { image3 } from "../../../../public/images/page";
import { benefits } from "@/constants/whyBookInn";

export const WhyChooseUsSection = () => {
  const t = useTranslations("WhyBookInn");
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <section
      className={`flex flex-col md:flex-row items-center gap-10 mb-20 ${
        isRTL ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="md:w-1/2 rounded-xl overflow-hidden shadow-lg order-1">
        <Image
          src={image3}
          alt={t("whyChooseUs.imageAlt")}
          width={800}
          height={600}
          className="w-full h-auto object-cover"
        />
      </div>

      <div
        className={`md:w-1/2 order-2 flex flex-col ${
          isRTL
            ? "items-end text-right sm:items-end pr-1 md:pr-20"
            : "items-start text-left sm:items-start pl-1 md:pl-20"
        }`}
      >
        <h2 className="text-3xl font-bold text-foreground dark:text-foreground mb-6">
          {t("whyChooseUs.title")}
        </h2>
        <ul className="space-y-4">
          {benefits.map((_, index) => (
            <li
              key={index}
              className={`flex items-start gap-3 ${
                isRTL ? "flex-row-reverse" : ""
              }`}
            >
              <span className="text-chart-2">✓</span>
              <span className="text-foreground/90 dark:text-foreground/90">
                {t(`whyChooseUs.benefits.${index}`)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
