"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { serviceIcons } from "@/constants/whyBookInn";
import { ServiceCard } from "./ServiceCard";

export const ServiceSection =() =>{
  const t = useTranslations("WhyBookInn");

  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold text-foreground dark:text-foreground text-center mb-12">
        {t("services.title")}
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {serviceIcons.map((Icon, index) => (
          <ServiceCard
            key={index}
            icon={<Icon className="w-6 h-6" />}
            text={t(`services.items.${index}.text`)}
          />
        ))}
      </div>
    </section>
  );
}
