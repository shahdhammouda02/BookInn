"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Luxury } from "../../../../public/images/page";

export const CTASection = () => {
  const t = useTranslations("WhyBookInn");

  return (
    <section className="text-center">
      <div className="bg-gradient-to-r from-chart-2 to-chart-3 text-primary-foreground p-10 rounded-xl relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={Luxury}
            alt={t("cta.imageAlt")}
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative z-10">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            {t("cta.title")}
          </h3>
          <Button
            size="lg"
            className="bg-background text-foreground hover:bg-background/90 dark:bg-background dark:hover:bg-background/90"
          >
            {t("cta.button")}
          </Button>
        </div>
      </div>
    </section>
  );
};
