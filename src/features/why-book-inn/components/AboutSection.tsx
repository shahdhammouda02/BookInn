"use client";
import React from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { image2 } from "../../../../public/images/page";

export const AboutSection = () => {
  const t = useTranslations("WhyBookInn");
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <section
      className={`flex flex-col md:flex-row items-center gap-10 mb-20 ${
        isRTL ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className={`md:w-1/2 ${isRTL ? "text-right" : "text-left"}`}>
        <h2 className="text-3xl font-bold text-foreground dark:text-foreground mb-6">
          {t("about.title")}
        </h2>
        <p className="text-lg text-foreground/90 dark:text-foreground/90 mb-4">
          {t("about.description1")}
        </p>
        <p className="text-lg text-foreground/90 dark:text-foreground/90">
          {t("about.description2")}
        </p>
      </div>
      <div className="md:w-1/2 rounded-xl overflow-hidden shadow-lg">
        <Image
          src={image2}
          alt={t("about.imageAlt")}
          width={800}
          height={600}
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}
