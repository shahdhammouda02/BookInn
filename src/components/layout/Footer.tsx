"use client";
import Image from "next/image";
import React from "react";
import { BookInnLogo, HeaderLogo } from "../../../public/images/page";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { useTranslations } from "next-intl";

const Footer = ({ isRTL = false }: { isRTL?: boolean }) => {
  const { theme } = useTheme();
  const logoSrc = theme === "dark" ? HeaderLogo : BookInnLogo;
  const t = useTranslations("Footer");

  return (
    <footer
      className="bg-header-background dark:bg-header-background w-full py-12 mt-18"
      dir={isRTL ? "rtl" : ""}
    >
      <section className="container mx-auto flex flex-col lg:flex-row flex-wrap gap-y-12 lg:gap-y-0 lg:justify-between px-4">
        <div className="flex flex-col max-w-sm">
          <Link href="#" prefetch={false}>
            <Image
              src={logoSrc}
              alt="BookInn Logo"
              width={100}
              height={100}
              className="dark:invert-[0.2]"
            />
          </Link>
          <h3 className="mt-4 px-5 text-left text-lg leading-relaxed text-muted-foreground">
            <span className="text-2xl font-semibold text-primary">BookInn</span>
            <br />
            {t("about")}
            <ul className="mt-2 ml-5 list-disc space-y-1">
              <li>{t("values.simplicity")}</li>
              <li>{t("values.security")}</li>
              <li>{t("values.variety")}</li>
            </ul>
          </h3>
        </div>

        <div className="min-w-[160px] lg:mt-28 ml-5 lg:ml-0">
          <h4 className="text-xl font-semibold text-primary mb-3">
            {t("sections.quickLinks")}
          </h4>
          <ul className="list-disc space-y-2 ml-5 text-muted-foreground px-1">
            <li>
              <Link href="#">{t("links.home")}</Link>
            </li>
            <li>
              <Link href="#">{t("links.whyBookInn")}</Link>
            </li>
            <li>
              <Link href="#">{t("links.services")}</Link>
            </li>
            <li>
              <Link href="#">{t("links.privacyPolicy")}</Link>
            </li>
            <li>
              <Link href="#">{t("links.terms")}</Link>
            </li>
          </ul>
        </div>

        <div className="min-w-[160px] lg:mt-28 ml-5 lg:ml-0">
          <h4 className="text-xl font-semibold text-primary mb-3">
            {t("sections.support")}
          </h4>
          <ul className="list-disc space-y-2 ml-5 text-muted-foreground px-1">
            <li>
              <Link href="#">{t("links.faqs")}</Link>
            </li>
            <li>
              <Link href="#">{t("links.howToBook")}</Link>
            </li>
            <li>
              <Link href="#">{t("links.contactSupport")}</Link>
            </li>
            <li>
              <Link href="#">{t("links.cancellations")}</Link>
            </li>
          </ul>
        </div>

        <div className="min-w-[160px] lg:mt-28 ml-5 lg:ml-0">
          <h4 className="text-xl font-semibold text-primary mb-3">
            {t("sections.contact")}
          </h4>
          <p className="text-muted-foreground mb-2 px-1">
            {t("links.reachUs")}
          </p>
          <div className="flex items-center gap-4 text-muted-foreground text-xl px-1">
            <Link
              href="https://facebook.com"
              target="_blank"
              aria-label={t("links.facebook")}
            >
              <Facebook className="hover:text-primary w-5 h-5" />
            </Link>
            <Link
              href="https://x.com"
              target="_blank"
              aria-label={t("links.twitter")}
            >
              <Twitter className="hover:text-primary w-5 h-5" />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              aria-label={t("links.instagram")}
            >
              <Instagram className="hover:text-primary w-5 h-5" />
            </Link>
            <Link
              href="https://youtube.com"
              target="_blank"
              aria-label={t("links.youtube")}
            >
              <Youtube className="hover:text-primary w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
