"use client";

import React, { useEffect, useRef, useState } from "react";
import { BookInnLogo, HeaderLogo } from "../../../public/images/page";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useTranslations, useLocale } from "next-intl";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { SearchIcon, User, Menu, X, LogOut } from "lucide-react";
import { Input } from "@/components/ui/input";
import LanguageSwitcher from "@/components/languageSwitcher";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useSession, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const NavBar = () => {
  // theme
  const { resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  // language
  const locale = useLocale();
  const isRTL = locale === "ar";
  const t = useTranslations("Header");

  // serch
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef<HTMLDivElement>(null);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data: session, status } = useSession();
  const pathname = usePathname();

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

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const logoSrc = resolvedTheme === "dark" ? HeaderLogo : BookInnLogo;

  return (
    <section
      className="min-h-[80px] flex items-center px-2 sm:px-8 w-full mx-auto justify-between relative"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="flex-shrink-0 z-20">
        <Link href="#" className="flex" prefetch>
          <Image
            src={logoSrc}
            alt={t("logoAlt")}
            width={100}
            height={100}
            className="dark:invert-[0.2]"
          />
        </Link>
      </div>

      <nav
        className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex z-10`}
      >
        <NavigationMenu>
          <NavigationMenuList
            className={`gap-3 flex ${isRTL ? "flex-row-reverse" : ""}`}
          >
            {["welcome", "whyBookInn", "rooms", "offers", "contact"].map(
              (item) => {
                const href = `/${locale}${
                  item === "welcome" ? "" : `/${item}`
                }`;
                const isActive = pathname === href;

                return (
                  <NavigationMenuItem key={item}>
                    <NavigationMenuLink
                      href={href}
                      className={`${navigationMenuTriggerStyle()} relative px-2 w-auto after:content-[''] after:absolute after:bottom-0 ${
                        isRTL
                          ? "after:right-1/2 after:translate-x-1/2"
                          : "after:left-1/2 after:-translate-x-1/2"
                      } after:w-[calc(100%-1rem)] after:h-[2px] ${
                        isActive
                          ? "after:bg-chart-2 after:opacity-100"
                          : "after:bg-chart-2 after:opacity-0 hover:after:opacity-100"
                      } text-foreground hover:text-foreground/80 dark:text-foreground dark:hover:text-foreground/80`}
                    >
                      {t(`navItems.${item}`)}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              }
            )}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>

      <div className="hidden md:flex items-center gap-2 z-20">
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

        {status === "loading" ? (
          <p className="text-sm">{t("loading")}</p>
        ) : session ? (
          <>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-foreground hover:bg-foreground/10 dark:text-foreground dark:hover:bg-foreground/10"
                  aria-label="Account"
                >
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align={isRTL ? "start" : "end"}>
                <DropdownMenuLabel className="text-sm">
                  {t("welcome")}, {session.user?.name}
                </DropdownMenuLabel>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              onClick={() => signOut()}
              className="bg-chart-2 text-primary-foreground hover:bg-chart-2/90 dark:bg-chart-2 dark:hover:bg-chart-2/80"
            >
              {t("buttons.signOut")}
            </Button>
          </>
        ) : (
          <Link href="/auth/signIn" prefetch>
            <Button
              variant="default"
              className="bg-chart-2 text-primary-foreground hover:bg-chart-2/90 dark:bg-chart-2 dark:hover:bg-chart-2/80"
            >
              <User className={`h-5 w-5 ${isRTL ? "ml-1" : "mr-1"}`} />
              {t("buttons.signIn")}
            </Button>
          </Link>
        )}
      </div>

      {/* mobile */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden text-foreground hover:bg-foreground/10 dark:text-foreground dark:hover:bg-foreground/10 z-20"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? (
          <X className="h-8 w-8" />
        ) : (
          <Menu className="h-8 w-8" />
        )}
      </Button>

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
              <div className="flex justify-end">
                <X
                  className="h-6 w-6 cursor-pointer mb-7"
                  onClick={() => setMobileMenuOpen(false)}
                />
              </div>

              <div
                className={`flex flex-col gap-3 ${
                  isRTL ? "items-start px-2" : "items-start"
                }`}
              >
                {status === "loading" ? (
                  <p className="text-sm text-muted-foreground">
                    {t("loading")}
                  </p>
                ) : session ? (
                  <>
                    <p className="text-sm text-foreground">
                      {t("welcome")},{" "}
                      <span className="font-semibold text-chart-2">
                        {session.user?.name}
                      </span>
                    </p>
                  </>
                ) : null}
              </div>

              {["welcome", "whyBookInn", "rooms", "offers", "contact"].map(
                (item) => {
                  const href = `/${locale}${
                    item === "welcome" ? "" : `/${item}`
                  }`;
                  const isActive = pathname === href;

                  return (
                    <Link
                      key={item}
                      href={href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`inline-block w-fit text-lg py-2 px-2 transition-all duration-200 ${
                        isActive
                          ? "text-chart-2 border-b-2 border-chart-2"
                          : "text-foreground hover:text-chart-2 dark:text-foreground dark:hover:text-chart-2"
                      }`}
                    >
                      {t(`navItems.${item}`)}
                    </Link>
                  );
                }
              )}

              <div
                className={`flex flex-wrap items-center ${
                  isRTL
                    ? "flex-row-reverse items-end justify-end"
                    : "justify-start"
                } gap-2 sm:gap-4 pt-6`}
                dir={isRTL ? "rtl" : "ltr"}
              >
                {isRTL ? (
                  <>
                    {session ? (
                      <Button
                        onClick={() => signOut()}
                        variant="ghost"
                        size="icon"
                        aria-label="Sign Out"
                        className="text-primary-foreground bg-chart-2 dark:text-primary-foreground dark:bg-foreground"
                      >
                        <LogOut className="h-5 w-5" />
                      </Button>
                    ) : (
                      <Link
                        href="/auth/signIn"
                        prefetch
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Button
                          variant="ghost"
                          size="icon"
                          aria-label="Sign In"
                          className="text-primary-foreground bg-chart-2 dark:text-primary-foreground dark:bg-chart-2"
                        >
                          <User className="h-5 w-5" />
                        </Button>
                      </Link>
                    )}
                    <div className="relative" ref={searchRef}>
                      <Button
                        variant="ghost"
                        size="icon"
                        aria-label="Search"
                        className="text-foreground hover:bg-foreground/10 dark:text-foreground dark:hover:bg-foreground/10"
                        onClick={() => setShowSearch(!showSearch)}
                      >
                        <SearchIcon className="h-5 w-5" />
                      </Button>
                    </div>

                    {showSearch && (
                      <div className="pt-2 w-full">
                        <Input
                          type="text"
                          placeholder="Search..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          autoFocus
                          className="w-full h-12 text-lg"
                          dir="rtl"
                        />
                      </div>
                    )}
                    <ThemeToggle />
                    <LanguageSwitcher />
                  </>
                ) : (
                  <>
                    <LanguageSwitcher />
                    <ThemeToggle />
                    <div className="relative" ref={searchRef}>
                      <Button
                        variant="ghost"
                        size="icon"
                        aria-label="Search"
                        className="text-foreground hover:bg-foreground/10 dark:text-foreground dark:hover:bg-foreground/10"
                        onClick={() => setShowSearch(!showSearch)}
                      >
                        <SearchIcon className="h-5 w-5" />
                      </Button>
                    </div>

                    {showSearch && (
                      <div className="pt-2 w-full">
                        <Input
                          type="text"
                          placeholder="Search..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          autoFocus
                          className="w-full h-12 text-lg"
                          dir="ltr"
                        />
                      </div>
                    )}

                    {session ? (
                      <Button
                        onClick={() => signOut()}
                        variant="ghost"
                        size="icon"
                        aria-label="Sign Out"
                        className="text-primary-foreground bg-chart-2 dark:text-primary-foreground dark:bg-foreground"
                      >
                        <LogOut className="h-5 w-5" />
                      </Button>
                    ) : (
                      <Link
                        href="/auth/signIn"
                        prefetch
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Button
                          variant="ghost"
                          size="icon"
                          aria-label="Sign In"
                          className="text-primary-foreground bg-chart-2 dark:text-primary-foreground dark:bg-chart-2"
                        >
                          <User className="h-5 w-5" />
                        </Button>
                      </Link>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default NavBar;
