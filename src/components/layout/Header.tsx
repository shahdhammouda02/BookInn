"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Bed, Car } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { Restaurant, Event, Fitness, Service } from "@/lib/@react-icons/page";
import NavBar from "./NavBar";

const Header = () => {
  const t = useTranslations("Header");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const quickLinks = [
  {
    key: "rooms",
    icon: Bed,
    variant: "default"
  },
  {
    key: "restaurant",
    icon: Restaurant,
    variant: "secondary"
  },
  {
    key: "fitness",
    icon: Fitness,
    variant: "secondary"
  },
  {
    key: "events",
    icon: Event,
    variant: "secondary"
  },
  {
    key: "parking",
    icon: Car,
    variant: "secondary"
  },
  {
    key: "service",
    icon: Service,
    variant: "secondary"
  }
];

  return (
    <header
      className="mx-auto px-4 sm:px-8 bg-header-background min-h-[650px] sm:min-h-[500px] relative overflow-hidden dark:bg-header-background"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <NavBar />

      <section
        className={`absolute left-4 sm:left-1/2 top-[45%] sm:top-1/2 -translate-y-1/2 sm:-translate-x-1/2 w-[calc(100%-2rem)] sm:w-full px-4 sm:px-8 space-y-4 max-w-4xl ${
          isRTL ? "text-right sm:text-center" : "text-left sm:text-center"
        }`}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground dark:text-foreground">
          {t("hero.title")}
        </h1>
        <h3 className="text-xl sm:text-xl font-medium text-foreground/80 dark:text-foreground/80">
          {t("hero.subtitle")}
        </h3>
      </section>

      {/* Quick Links */}
   <section
  className={`absolute left-4 sm:left-1/2 -translate-x-0 sm:-translate-x-1/2 top-[73%] sm:top-3/4 w-[calc(100%-2rem)] sm:w-full px-4 sm:px-8 max-w-4xl flex flex-wrap gap-1 sm:gap-4 justify-start sm:justify-center ${
    isRTL ? "justify-end" : "justify-start sm:justify-center"
  }`}
  dir={isRTL ? "rtl" : "ltr"}
>
  {quickLinks.map((link) => (
    <Button
      key={link.key}
      size="lg"
      variant={link.variant as "default" | "secondary"}
      className={
        link.variant === "default"
          ? "bg-chart-2 text-primary-foreground hover:bg-chart-2/90 dark:bg-chart-2 dark:hover:bg-chart-2/80"
          : "bg-background/80 text-foreground hover:bg-background dark:bg-background/80 dark:text-foreground"
      }
      aria-label={t(`quickLinks.${link.key}`)}
    >
      <link.icon className="h-8 w-8" />
      <span className="hidden sm:inline me-1">
        {t(`quickLinks.${link.key}`)}
      </span>
    </Button>
  ))}
</section>
    </header>
  );
};

export default Header;
