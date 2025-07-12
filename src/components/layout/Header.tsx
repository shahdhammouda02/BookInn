"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Bed, Car, SearchIcon, User, Menu, X } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { Restaurant, Event, Fitness, Service } from "@/lib/@react-icons/page";
import NavBar from "./NavBar";

const Header = () => {
  const t = useTranslations("Header");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowSearch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className="mx-auto px-4 sm:px-8 bg-header-background min-h-[650px] sm:min-h-[500px] relative overflow-hidden dark:bg-header-background"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <NavBar />

      {/* Hero section */}
      <section
        className="absolute left-4 sm:left-1/2 top-[45%] sm:top-1/2 -translate-y-1/2 sm:-translate-x-1/2 w-[calc(100%-2rem)] sm:w-full px-4 sm:px-8 text-left sm:text-center space-y-4 max-w-4xl"
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
          isRTL ? "flex-row-reverse" : ""
        }`}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <Button
          size="lg"
          variant="default"
          className="bg-chart-2 text-primary-foreground hover:bg-chart-2/90 dark:bg-chart-2 dark:hover:bg-chart-2/80"
          aria-label={t("quickLinks.rooms")}
        >
          <Bed className="h-8 w-8" />
          <span className="hidden sm:inline ml-1">{t("quickLinks.rooms")}</span>
        </Button>
        <Button
          size="lg"
          variant="secondary"
          className="bg-background/80 text-foreground hover:bg-background dark:bg-background/80 dark:text-foreground"
          aria-label={t("quickLinks.restaurant")}
        >
          <Restaurant className="h-8 w-8" />
          <span className="hidden sm:inline ml-1">
            {t("quickLinks.restaurant")}
          </span>
        </Button>
        <Button
          size="lg"
          variant="secondary"
          className="bg-background/80 text-foreground hover:bg-background dark:bg-background/80 dark:text-foreground"
          aria-label={t("quickLinks.fitness")}
        >
          <Fitness className="h-8 w-8" />
          <span className="hidden sm:inline ml-1">
            {t("quickLinks.fitness")}
          </span>
        </Button>
        <Button
          size="lg"
          variant="secondary"
          className="bg-background/80 text-foreground hover:bg-background dark:bg-background/80 dark:text-foreground"
          aria-label={t("quickLinks.events")}
        >
          <Event className="h-8 w-8" />
          <span className="hidden sm:inline ml-1">
            {t("quickLinks.events")}
          </span>
        </Button>
        <Button
          size="lg"
          variant="secondary"
          className="bg-background/80 text-foreground hover:bg-background dark:bg-background/80 dark:text-foreground"
          aria-label={t("quickLinks.parking")}
        >
          <Car className="h-8 w-8" />
          <span className="hidden sm:inline ml-1">
            {t("quickLinks.parking")}
          </span>
        </Button>
        <Button
          size="lg"
          variant="secondary"
          className="bg-background/80 text-foreground hover:bg-background dark:bg-background/80 dark:text-foreground"
          aria-label={t("quickLinks.service")}
        >
          <Service className="h-8 w-8" />
          <span className="hidden sm:inline ml-1">
            {t("quickLinks.service")}
          </span>
        </Button>
      </section>
    </header>
  );
};

export default Header;
