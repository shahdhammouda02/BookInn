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
import { Bed, Car, SearchIcon, User } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { Restaurant, Event, Fitness, Service } from '@/lib/@react-icons/page';
import LanguageSwitcher from "@/components/languageSwitcher";
import { useTheme } from "next-themes";
import { Input } from "@/components/ui/input";

const Header = () => {
  const t = useTranslations("Header");
  const {theme} = useTheme();
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const logoSrc = theme === "dark" ? HeaderLogo : BookInnLogo
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
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
      className="mx-auto px-8 bg-header-background min-h-[450px] relative overflow-hidden dark:bg-header-background"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <section className="flex h-20 w-full shrink-0 items-center px-6 mt-2">
        <Link href="#" className={isRTL ? "ml-6 flex" : "mr-6 flex"} prefetch={false}>
          <Image
            src={logoSrc}
            alt={t("logoAlt")}
            width={120}
            height={120}
            className="dark:invert-[0.2]"
          />
        </Link>
       <NavigationMenu className={isRTL ? "mr-auto" : "ml-auto"}>
  <NavigationMenuList className={`gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
    {["welcome", "whyBookInn", "rooms", "offers", "contact"].map((item) => (
      <NavigationMenuItem key={item}>
        <NavigationMenuLink
          href="#"
          className={`${navigationMenuTriggerStyle()} relative px-2 w-auto after:content-[''] after:absolute after:bottom-0 ${
            isRTL ? "after:right-1/2 after:translate-x-1/2" : "after:left-1/2 after:-translate-x-1/2"
          } after:w-[calc(100%-1rem)] after:h-[2px] ${
            item === "welcome"
              ? "after:bg-chart-2"
              : "after:bg-chart-2 after:opacity-0 hover:after:opacity-100"
          } text-foreground hover:text-foreground/80 dark:text-foreground dark:hover:text-foreground/80`}
        >
          {t(`navItems.${item}`)}
        </NavigationMenuLink>
      </NavigationMenuItem>
    ))}
  </NavigationMenuList>
</NavigationMenu>


        <div className={isRTL ? "mr-auto flex gap-2" : "ml-auto flex gap-2"}>
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
              <div className={`absolute ${isRTL ? 'left-0' : 'right-0'} top-full mt-2 z-50`}>
                <div className={`flex ${isRTL ? 'justify-end' : 'justify-start'}`}>
                  <Input
                    type="text"
                    placeholder={t("buttons.search")}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    className="w-48 sm:w-64 h-9"
                    onKeyDown={(e) => {
                      if (e.key === 'Escape') {
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
      </section>

      {/* Hero section */}
      <section 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-8 text-center space-y-4 max-w-4xl"
        dir={isRTL ? "rtl" : "ltr"}
      >
        <h1 className="text-5xl font-bold tracking-tight text-foreground dark:text-foreground">
          {t("hero.title")}
        </h1>
        <h3 className="text-xl font-medium text-foreground/80 dark:text-foreground/80">
          {t("hero.subtitle")}
        </h3>
      </section>

      {/* Quick Links */}
      <section
        className={`absolute left-1/2 -translate-x-1/2 top-3/4 w-full px-8 text-center max-w-2xl flex gap-2 justify-center ${isRTL ? "flex-row-reverse" : ""}`}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <Button
          size="sm"
          variant="secondary"
          className="bg-background/80 text-foreground hover:bg-background dark:bg-background/80 dark:text-foreground"
        >
          <Bed className={`h-4 w-4 ${isRTL ? "ml-1" : "mr-1"}`} />
          {t("quickLinks.rooms")}
        </Button>
        <Button
          size="sm"
          variant="secondary"
          className="bg-background/80 text-foreground hover:bg-background dark:bg-background/80 dark:text-foreground"
        >
          <Restaurant className={`h-4 w-4 ${isRTL ? "ml-1" : "mr-1"}`} />
          {t("quickLinks.restaurant")}
        </Button>
        <Button
          size="sm"
          variant="secondary"
          className="bg-background/80 text-foreground hover:bg-background dark:bg-background/80 dark:text-foreground"
        >
          <Fitness className={`h-4 w-4 ${isRTL ? "ml-1" : "mr-1"}`} />
          {t("quickLinks.fitness")}
        </Button>
        <Button
          size="sm"
          variant="secondary"
          className="bg-background/80 text-foreground hover:bg-background dark:bg-background/80 dark:text-foreground"
        >
          <Event className={`h-4 w-4 ${isRTL ? "ml-1" : "mr-1"}`} />
          {t("quickLinks.events")}
        </Button>
        <Button
          size="sm"
          variant="secondary"
          className="bg-background/80 text-foreground hover:bg-background dark:bg-background/80 dark:text-foreground"
        >
          <Car className={`h-4 w-4 ${isRTL ? "ml-1" : "mr-1"}`} />
          {t("quickLinks.parking")}
        </Button>
        <Button
          size="sm"
          variant="secondary"
          className="bg-background/80 text-foreground hover:bg-background dark:bg-background/80 dark:text-foreground"
        >
          <Service className={`h-4 w-4 ${isRTL ? "ml-1" : "mr-1"}`} />
          {t("quickLinks.service")}
        </Button>
      </section>
    </header>
  );
};

export default Header;
