"use client";

import Image from "next/image";
import React from "react";
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
import { Bed, Car, Languages, SearchIcon, User } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import {Restaurant, Event, Fitness, Service} from '@/lib/@react-icons/page';

const Header = () => {
  const t = useTranslations("Header");
  const locale = useLocale();
  const isRTL = locale === 'ar';


  return (
    <header
      className="mx-auto px-8 bg-header-background min-h-[450px] relative overflow-hidden dark:bg-header-background">

      <section
        className="flex h-20 w-full shrink-0 items-center px-6 mt-2">
        <Link href="#" className="mr-6 flex" prefetch={false}>
          <Image
            src={BookInnLogo}
            alt={t("logoAlt")}
            width={120}
            height={120}
            className="dark:invert-[0.2]"
          />
        </Link>
        <NavigationMenu className="ml-auto">
          <NavigationMenuList className="gap-2">
            {["welcome", "whyBookInn", "rooms", "offers", "contact"].map(
              (item) => (
                <NavigationMenuItem key={item}>
                  <Link href="#" legacyBehavior passHref prefetch={false}>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} relative px-2 w-auto after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[calc(100%-1rem)] after:h-[2px] ${
                        item === "welcome"
                          ? "after:bg-chart-2"
                          : "after:bg-chart-2 after:opacity-0 hover:after:opacity-100"
                      } text-foreground hover:text-foreground/80 dark:text-foreground dark:hover:text-foreground/80`}
                    >
                      {t(`navItems.${item}`)}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="ml-auto flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            aria-label={t("buttons.language")}
            className="text-foreground hover:bg-foreground/10 dark:text-foreground dark:hover:bg-foreground/10"
          >
            <ThemeToggle />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            aria-label={t("buttons.language")}
            className="text-foreground hover:bg-foreground/10 dark:text-foreground dark:hover:bg-foreground/10"
          >
            <Languages className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label={t("buttons.search")}
            className="text-foreground hover:bg-foreground/10 dark:text-foreground dark:hover:bg-foreground/10"
          >
            <SearchIcon className="h-5 w-5" />
          </Button>
          <Button
            variant="default"
            className="bg-chart-2 text-primary-foreground hover:bg-chart-2/90 dark:bg-chart-2 dark:hover:bg-chart-2/80"
          >
            <User className="h-5 w-5 mr-2" />
            {t("buttons.signIn")}
          </Button>
        </div>
      </section>

      {/* Hero section */}
      <section className="absolute left-80 top-1/2 -translate-y-1/2 w-full px-8 text-center space-y-4 max-w-4xl">
        <h1 className="text-5xl font-bold tracking-tight text-foreground dark:text-foreground">
          Where Comfort meets Convenience
        </h1>
        <h3 className="text-xl font-medium text-foreground/80 dark:text-foreground/80">
          Every great trip starts with a perfect place to rest. Find yours with
          BookInn.
        </h3>
      </section>

      {/* Quick Links */}
      <section className="absolute left-97 top-3/4 w-full px-8 text-center space-x-2 max-w-2xl flex">
        <Button
          size="sm"
          variant="secondary"
          className="bg-background/80 text-foreground hover:bg-background dark:bg-background/80 dark:text-foreground"
        >
          <Bed className="h-4 w-4 mr-1" />
          Rooms & Suits
        </Button>
        <Button
          size="sm"
          variant="secondary"
          className="bg-background/80 text-foreground hover:bg-background dark:bg-background/80 dark:text-foreground"
        >
          <Restaurant className="h-4 w-4 mr-1" />
          Restaurant
        </Button>
        <Button
          size="sm"
          variant="secondary"
          className="bg-background/80 text-foreground hover:bg-background dark:bg-background/80 dark:text-foreground"
        >
          <Fitness className="h-4 w-4 mr-1" />
          Fitness
        </Button>
        <Button
          size="sm"
          variant="secondary"
          className="bg-background/80 text-foreground hover:bg-background dark:bg-background/80 dark:text-foreground"
        >
          <Event className="h-4 w-4 mr-1" />
          Events
        </Button>
        <Button
          size="sm"
          variant="secondary"
          className="bg-background/80 text-foreground hover:bg-background dark:bg-background/80 dark:text-foreground"
        >
          <Car className="h-4 w-4 mr-1" />
          Parking
        </Button>
        <Button
          size="sm"
          variant="secondary"
          className="bg-background/80 text-foreground hover:bg-background dark:bg-background/80 dark:text-foreground"
        >
          <Service className="h-4 w-4 mr-1" />
          Room Service
        </Button>
      </section>
    </header>
  );
};

export default Header;
