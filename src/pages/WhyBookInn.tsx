"use client";

import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import {
  Bed,
  Star,
  ShieldCheck,
  BadgeCheck,
  Heart,
  SearchIcon,
} from "lucide-react";
import Image from "next/image";
import { image10, image2, image3, Luxury } from "../../public/images/page";

const WhyBookInn = () => {
  const locale = useLocale();
  const isRTL = locale === "ar";
  const t = useTranslations("WhyBookInn");

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground dark:text-foreground mb-4">
          {t("hero.title")}
        </h1>
        <p className="text-xl text-foreground/80 dark:text-foreground/80 max-w-3xl mx-auto">
          {t("hero.subtitle")}
        </p>

        <div className="mt-10 rounded-xl overflow-hidden shadow-lg max-w-5xl mx-auto">
          <Image
            src={Luxury}
            alt={t("hero.imageAlt")}
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </section>

      {/* About Section */}
      <section
        className={`flex flex-col md:flex-row items-center gap-10 mb-20 ${
          isRTL ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className={`md:w-1/2 ${isRTL ? "text-right" : "text-left"}`}>
          <h2 className="text-3xl font-bold text-foreground dark:text-foreground mb-6">
            {t("about.title")}
          </h2>
          <p className="text-lg text-foreground/90 dark:text-foreground/90 mb-4">
            {t("about.description1")}
          </p>
          <p className="text-lg text-foreground/90 dark:text-foreground/90">
            {t("about.description2")}
          </p>
        </div>
        <div className="md:w-1/2 rounded-xl overflow-hidden shadow-lg">
          <Image
            src={image2}
            alt={t("about.imageAlt")}
            width={800}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-foreground dark:text-foreground text-center mb-12">
          {t("services.title")}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              text={t(`services.items.${index}.text`)}
            />
          ))}
        </div>
      </section>

      <section
        className={`flex flex-col md:flex-row items-center gap-10 mb-20 ${
          isRTL ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className="md:w-1/2 rounded-xl overflow-hidden shadow-lg order-1">
          <Image
            src={image3}
            alt={t("whyChooseUs.imageAlt")}
            width={800}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>

        <div
          className={`md:w-1/2 order-2 flex flex-col
    ${
      isRTL
        ? "items-end text-right sm:items-end"
        : "items-start text-left sm:items-start"
    }
    ${isRTL ? "pr-1 md:pr-20" : "pl-1 md:pl-20"}`}
        >
          {" "}
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold text-foreground dark:text-foreground mb-6">
              {t("whyChooseUs.title")}
            </h2>

            {/* List container */}
            <ul className="space-y-4">
              {benefits.map((_, index) => (
                <li
                  key={index}
                  className={`flex items-start gap-3 ${
                    isRTL ? "flex-row-reverse" : ""
                  }`}
                >
                  <span className="text-chart-2">✓</span>
                  <span className="text-foreground/90 dark:text-foreground/90">
                    {t(`whyChooseUs.benefits.${index}`)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-background/50 dark:bg-background/50 p-10 rounded-xl text-center mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground dark:text-foreground mb-6">
            {t("vision.title")}
          </h2>
          <div className="relative h-64 w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src={image10}
              alt={t("vision.imageAlt")}
              fill
              className="object-cover"
            />
          </div>
          <p className="text-xl text-foreground/90 dark:text-foreground/90">
            {t("vision.description")}
          </p>
        </div>
      </section>

      {/* CTA Section */}
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
    </div>
  );
};

// Service Card
const ServiceCard = ({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) => (
  <div className="bg-background/80 dark:bg-background/80 p-6 rounded-lg border border-border dark:border-border shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-start gap-4">
      <div className="p-2 bg-chart-2/10 text-chart-2 rounded-full">{icon}</div>
      <p className="text-foreground/90 dark:text-foreground/90">{text}</p>
    </div>
  </div>
);

// Data
const services = [
  { icon: <Bed className="w-6 h-6" /> },
  { icon: <Star className="w-6 h-6" /> },
  { icon: <ShieldCheck className="w-6 h-6" /> },
  { icon: <Heart className="w-6 h-6" /> },
  { icon: <BadgeCheck className="w-6 h-6" /> },
  { icon: <SearchIcon className="w-6 h-6" /> },
];

const benefits = Array(6).fill(null); // For mapping purposes

export default WhyBookInn;
