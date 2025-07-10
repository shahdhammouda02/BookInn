"use client";

import React from "react";
import { useLocale } from "next-intl";
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
import {
  image1,
  image10,
  image2,
  image3,
  image4,
  image7,
  Luxury,
} from "../../public/images/page";

const WhyBookInn = () => {
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground dark:text-foreground mb-4">
          BookInn - Your Premier Hotel Booking Platform
        </h1>
        <p className="text-xl text-foreground/80 dark:text-foreground/80 max-w-3xl mx-auto">
          Discover seamless hotel bookings with exclusive deals worldwide
        </p>

        {/* Hero Image */}
        <div className="mt-10 rounded-xl overflow-hidden shadow-lg max-w-5xl mx-auto">
          <Image
            src={Luxury}
            alt="Luxury hotel booking"
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
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-foreground dark:text-foreground mb-6">
            About BookInn
          </h2>
          <p className="text-lg text-foreground/90 dark:text-foreground/90 mb-4">
            BookInn is a leading hotel booking platform that provides customers
            with a seamless and fast booking experience, offering the best deals
            and discounts for stays at premium hotels worldwide.
          </p>
          <p className="text-lg text-foreground/90 dark:text-foreground/90">
            Whether you're looking for a luxury hotel for a business trip, a
            family resort for a vacation, or budget-friendly accommodation,
            WhyBookInn offers diverse options to suit all budgets and needs.
          </p>
        </div>
        <div className="md:w-1/2 rounded-xl overflow-hidden shadow-lg">
          <Image
            src={image2}
            alt="Various hotel options"
            width={800}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-foreground dark:text-foreground text-center mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        className={`flex flex-col md:flex-row items-center gap-10 mb-20 ${
          isRTL ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className="md:w-1/2 rounded-xl overflow-hidden shadow-lg order-1">
          <Image
            src={image3}
            alt="Happy traveler"
            width={800}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="md:w-1/2 order-2">
          <h2 className="text-3xl font-bold text-foreground dark:text-foreground mb-6">
            SO, WhyBookInn?
          </h2>
          <ul className="space-y-4">
            {benefits.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-chart-2">✓</span>
                <span className="text-foreground/90 dark:text-foreground/90">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-background/50 dark:bg-background/50 p-10 rounded-xl text-center mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground dark:text-foreground mb-6">
            Our Vision
          </h2>
          <div className="relative h-64 w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src={image10}
              alt="WhyBookInn team or vision"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-xl text-foreground/90 dark:text-foreground/90">
            At BookInn, we aim to be the premier hotel booking platform by
            delivering an exceptional experience that combines quality,
            affordability, and excellent service. We believe your journey begins
            the moment you book your stay!
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <div className="bg-gradient-to-r from-chart-2 to-chart-3 text-primary-foreground p-10 rounded-xl relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={Luxury}
              alt="Background"
              fill
              className="object-cover opacity-20"
            />
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Book with BookInn today and enjoy an unforgettable trip!
            </h3>
            <Button
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 dark:bg-background dark:hover:bg-background/90"
            >
              Start Booking Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Service Card Component
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
  {
    icon: <Bed className="w-6 h-6" />,
    text: "Competitive hotel booking prices with exclusive discounts",
  },
  {
    icon: <Star className="w-6 h-6" />,
    text: "Diverse options - 5-star hotels to budget accommodations",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    text: "Secure and fast booking with protected payment",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    text: "24/7 customer support for all your needs",
  },
  {
    icon: <BadgeCheck className="w-6 h-6" />,
    text: "Genuine reviews from real guests",
  },
  {
    icon: <SearchIcon className="w-6 h-6" />,
    text: "Advanced search filters for perfect matches",
  },
];

const benefits = [
  "User-friendly interface for quick booking",
  "Exclusive offers you won't find elsewhere",
  "Flexible modification and cancellation policies",
  "Transparent pricing with no hidden fees",
  "Personalized recommendations based on your preferences",
  "Mobile-friendly experience on all devices",
];

export default WhyBookInn;
