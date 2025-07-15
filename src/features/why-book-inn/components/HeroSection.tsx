"use client";

import React from "react";
import { useTranslations } from "next-intl";

export const HeroSection = () => {
  const t = useTranslations("WhyBookInn");

  return (
    <section className="text-center mb-20">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground dark:text-foreground mb-6">
        {t("hero.title")}
      </h1>
      <p className="text-xl text-foreground/80 dark:text-foreground/80 max-w-3xl mx-auto mb-8">
        {t("hero.subtitle")}
      </p>

      <div className="bg-header-background/50 dark:bg-header-background border border-chart-2/20 dark:border-chart-2/20 rounded-xl p-10 max-w-4xl mx-auto shadow-lg shadow-chart-2/40">
        <h2 className="text-3xl font-extrabold text-foreground dark:text-foreground mb-6">
          {t("hero.boxTitle")}
        </h2>
        <p className="text-lg text-foreground/90 dark:text-foreground/90 mb-5 leading-relaxed">
          {t("hero.boxDescription1")}
        </p>
        <p className="text-lg text-foreground/90 dark:text-foreground/90 mb-5 leading-relaxed">
          {t("hero.boxDescription2")}
        </p>
        <p className="text-lg text-foreground/90 dark:text-foreground/90 leading-relaxed">
           {t("hero.boxDescription3.before")}{" "}
          <span className="font-semibold text-chart-2">
            {t("hero.boxDescription3.highlight")}
          </span>{" "}
          {t("hero.boxDescription3.after")}
        </p>
      </div>
    </section>
  );
};
