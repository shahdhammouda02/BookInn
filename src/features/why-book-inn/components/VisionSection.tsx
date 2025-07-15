"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { image10 } from "../../../../public/images/page";

export const VisionSection = () => {
  const t = useTranslations("WhyBookInn");

  return (
    <section className="bg-background/50 dark:bg-background/50 p-10 rounded-xl text-center mb-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground dark:text-foreground mb-6">
          {t("vision.title")}
        </h2>
        <div className="relative h-64 w-full mb-8 rounded-lg overflow-hidden">
          <Image
            src={image10}
            alt={t("vision.imageAlt")}
            fill
            className="object-cover"
          />
        </div>
        <p className="text-xl text-foreground/90 dark:text-foreground/90">
          {t("vision.description")}
        </p>
      </div>
    </section>
  );
}
