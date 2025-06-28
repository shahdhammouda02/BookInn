'use client'
import Image from "next/image";
import React from "react";
import { BookInnLogo } from "../../../../public/images/page";
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
import { Languages, SearchIcon, User } from "lucide-react";
import { useTranslations } from "next-intl";

const Header = () => {
  const t = useTranslations('Header');
  return (
    <header className="container mx-auto px-4 md:px-6 lg:px-8 bg-header-background min-h-[400px] relative overflow-hidden">
      {/* Navigation Bar */}
      <div className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
        <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
          <Image src={BookInnLogo} alt={t("Header.logoAlt")} width={115} height={115} />
        </Link>
        <NavigationMenu className="ml-auto">
          <NavigationMenuList className="gap-1">
            <NavigationMenuItem>
              <Link href="#" legacyBehavior passHref prefetch={false}>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} relative px-2 w-auto after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[calc(100%-1rem)] after:h-[2px] after:bg-black`}
                >
                  {t('navItems.welcome')}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
           <NavigationMenuItem>
              <Link href="#" legacyBehavior passHref prefetch={false}>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} relative px-2 w-auto after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[calc(100%-1rem)] after:h-[2px] after:bg-black after:opacity-0 hover:after:opacity-100`}
                >
                  {t('navItems.whyBookInn')}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#" legacyBehavior passHref prefetch={false}>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} relative px-2 w-auto after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[calc(100%-1rem)] after:h-[2px] after:bg-black after:opacity-0 hover:after:opacity-100`}
                >
                  {t('navItems.rooms')}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#" legacyBehavior passHref prefetch={false}>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} relative px-2 w-auto after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[calc(100%-1rem)] after:h-[2px] after:bg-black after:opacity-0 hover:after:opacity-100`}
                >
                  {t('navItems.offers')}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#" legacyBehavior passHref prefetch={false}>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} relative px-2 w-auto after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[calc(100%-1rem)] after:h-[2px] after:bg-black after:opacity-0 hover:after:opacity-100`}
                >
                  {t('navItems.contact')}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="ml-auto flex gap-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" aria-label={t('buttons.language')}><Languages className="h-5 w-5" /></Button>
          <Button variant="ghost" size="icon" aria-label={t('buttons.search')}><SearchIcon className="h-5 w-5" /></Button>
          <Button variant="default"><User className="h-5 w-5 mr-2" />{t('buttons.signIn')}</Button>
        </div>
      </div>

      <div className="absolute left-16 top-1/2 -translate-y-1/3 w-full px-4 md:px-6 lg:px-8 text-left space-y-4 max-w-2xl">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
          Where Comfort meets Convenience
        </h1>
        <h3 className="text-base md:text-lg lg:text-lg font-medium text-gray-600 dark:text-gray-300">
          Every great trip starts with a perfect place to rest. Find yours with BookInn
        </h3>
        <div className="pt-2">
          <Button size="lg" className="px-6 py-4 text-base">
            Discover Rooms
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;