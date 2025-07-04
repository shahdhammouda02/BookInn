"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { BookInnLogo, HeaderLogo } from "../../../../public/images/page";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Bed, Car, SearchIcon, User, Menu, X } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { Restaurant, Event, Fitness, Service } from "@/lib/@react-icons/page";
import LanguageSwitcher from "@/components/languageSwitcher";
import { useTheme } from "next-themes";
import { Input } from "@/components/ui/input";

const Header = () => {
  const t = useTranslations("Header");
  const { theme } = useTheme();
  const locale = useLocale();
  const isRTL = locale === "ar";
  const logoSrc = theme === "dark" ? HeaderLogo : BookInnLogo;
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
      className="mx-auto px-4 sm:px-8 bg-header-background min-h-[700px] sm:min-h-[500px] relative overflow-hidden dark:bg-header-background"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <section className="flex h-20 w-full shrink-0 items-center justify-between mt-2">
        <Link href="#" className="flex" prefetch={false}>
          <Image
            src={logoSrc}
            alt={t("logoAlt")}
            width={120}
            height={120}
            className="dark:invert-[0.2]"
          />
        </Link>

        {/* Desktop Navigation - Hidden on mobile */}
        <NavigationMenu className="hidden md:flex mx-4">
          <NavigationMenuList
            className={`gap-3 ${isRTL ? "flex-row-reverse" : ""}`}
          >
            {["welcome", "whyBookInn", "rooms", "offers", "contact"].map(
              (item) => (
                <NavigationMenuItem key={item}>
                  <NavigationMenuLink
                    href="#"
                    className={`${navigationMenuTriggerStyle()} relative px-2 w-auto after:content-[''] after:absolute after:bottom-0 ${
                      isRTL
                        ? "after:right-1/2 after:translate-x-1/2"
                        : "after:left-1/2 after:-translate-x-1/2"
                    } after:w-[calc(100%-1rem)] after:h-[2px] ${
                      item === "welcome"
                        ? "after:bg-chart-2"
                        : "after:bg-chart-2 after:opacity-0 hover:after:opacity-100"
                    } text-foreground hover:text-foreground/80 dark:text-foreground dark:hover:text-foreground/80`}
                  >
                    {t(`navItems.${item}`)}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop Buttons - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />

          <div className="relative" ref={searchRef}>
            <Button
              variant="ghost"
              size="icon"
              aria-label={t("buttons.search")}
              className="text-foreground hover:bg-foreground/10 dark:text-foreground dark:hover:bg-foreground/10"
              onClick={() => setShowSearch(!showSearch)}
            >
              <SearchIcon className="h-5 w-5" />
            </Button>

            {showSearch && (
              <div
                className={`absolute ${
                  isRTL ? "left-0" : "right-0"
                } top-full mt-2 z-50`}
              >
                <div
                  className={`flex ${isRTL ? "justify-end" : "justify-start"}`}
                >
                  <Input
                    type="text"
                    placeholder={t("buttons.search")}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    className="w-48 sm:w-64 h-9"
                    onKeyDown={(e) => {
                      if (e.key === "Escape") {
                        setShowSearch(false);
                        setSearchQuery("");
                      }
                    }}
                  />
                </div>
              </div>
            )}
          </div>
          <Button
            variant="default"
            className="bg-chart-2 text-primary-foreground hover:bg-chart-2/90 dark:bg-chart-2 dark:hover:bg-chart-2/80"
          >
            <User className={`h-5 w-5 ${isRTL ? "ml-2" : "mr-2"}`} />
            {t("buttons.signIn")}
          </Button>
        </div>

        {/* Mobile Menu Button - Visible only on mobile */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-foreground hover:bg-foreground/10 dark:text-foreground dark:hover:bg-foreground/10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-8 w-8" />
          ) : (
            <Menu className="h-8 w-8" />
          )}
        </Button>
      </section>

      {mobileMenuOpen && (
        <div
          className={`md:hidden fixed w-full max-w-[65%] inset-y-0 ${
            isRTL ? "left-0" : "right-0"
          } top-0 z-50 bg-background/95 dark:bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60`}
        >
          <div className="container mx-auto px-4 py-6">
            <div
              className="flex flex-col space-y-6"
              dir={isRTL ? "rtl" : "ltr"}
            >
              <div className={`flex ${isRTL ? "justify-end" : "justify-end"}`}>
                <X
                  className="h-6 w-6 cursor-pointer mb-7"
                  onClick={() => setMobileMenuOpen(false)}
                />
              </div>

              {["welcome", "whyBookInn", "rooms", "offers", "contact"].map(
                (item) => (
                  <Link
                    key={item}
                    href="#"
                    className={`text-xl py-3 text-foreground hover:text-chart-2 dark:text-foreground dark:hover:text-chart-2`}
                    onClick={() => {
                      setMobileMenuOpen(false);
                    }}
                  >
                    {t(`navItems.${item}`)}
                  </Link>
                )
              )}

              {/* Mobile Buttons Row - RTL aware */}
              <div
                className={`flex items-center ${
                  isRTL ? "flex-row-reverse" : ""
                } justify-between pt-6`}
              >
                <div
                  className={`flex items-center ${
                    isRTL ? "flex-row-reverse" : ""
                  } gap-4`}
                >
                  <LanguageSwitcher />
                  <ThemeToggle />
                </div>

                <div
                  className={`flex items-center ${
                    isRTL ? "flex-row-reverse" : ""
                  } gap-2`}
                >
                  <div className="relative" ref={searchRef}>
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label={t("buttons.search")}
                      className="text-foreground hover:bg-foreground/10 dark:text-foreground dark:hover:bg-foreground/10"
                      onClick={() => setShowSearch(!showSearch)}
                    >
                      <SearchIcon className="h-5 w-5" />
                    </Button>
                  </div>

                  <Button
                    variant="default"
                    size="icon"
                    className="bg-chart-2 text-primary-foreground hover:bg-chart-2/90 dark:bg-chart-2 dark:hover:bg-chart-2/80"
                  >
                    <User className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {showSearch && (
                <div className="pt-2">
                  <Input
                    type="text"
                    placeholder={t("buttons.search")}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    className="w-full h-12 text-lg"
                    dir={isRTL ? "rtl" : "ltr"}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Hero section */}
      <section
        className="absolute left-4 sm:left-1/2 top-1/2 -translate-y-1/2 sm:-translate-x-1/2 w-[calc(100%-2rem)] sm:w-full px-4 sm:px-8 text-left sm:text-center space-y-4 max-w-4xl"
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
        className={`absolute left-4 sm:left-1/2 -translate-x-0 sm:-translate-x-1/2 top-[80%] sm:top-3/4 w-[calc(100%-2rem)] sm:w-full px-4 sm:px-8 max-w-4xl flex flex-wrap gap-2 sm:gap-4 justify-start sm:justify-center ${
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
