"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Luxury } from "../../../../public/images/page";

export const HeroSection = () => {
  const t = useTranslations("WhyBookInn");

  return (
    <section className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground dark:text-foreground mb-4">
        {t("hero.title")}
      </h1>
      <p className="text-xl text-foreground/80 dark:text-foreground/80 max-w-3xl mx-auto">
        {t("hero.subtitle")}
      </p>
      <div className="mt-10 rounded-xl overflow-hidden shadow-lg max-w-5xl mx-auto">
        <Image
          src={Luxury}
          alt={t("hero.imageAlt")}
          width={1200}
          height={600}
          className="w-full h-auto object-cover"
          priority
        />
      </div>
    </section>
  );
}
