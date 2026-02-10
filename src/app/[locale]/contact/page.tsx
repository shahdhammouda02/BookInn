"use client";

import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactPage = () => {
  const t = useTranslations("Contact");
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <main
      className={`min-h-screen px-4 sm:px-8 py-16 ${isRTL ? "rtl" : ""}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Header */}
      <section className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          {t("title")}
        </h1>
        <p className="text-lg text-muted-foreground">{t("description")}</p>
      </section>

      {/* Contact Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
        {[
          {
            icon: Mail,
            title: t("email.title"),
            value: "contact@bookinn.com",
          },
          {
            icon: Phone,
            title: t("phone.title"),
            value: "+970 599 000 000",
          },
          {
            icon: MapPin,
            title: t("location.title"),
            value: t("location.value"),
          },
        ].map((item, index) => (
          <Card
            key={index}
            className="transition-all duration-300 hover:scale-[1.03] hover:shadow-lg border-border"
          >
            <CardHeader className="flex flex-col items-center gap-4">
              <div className="p-4 rounded-full bg-primary/10">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-lg font-semibold text-center">
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              {item.value}
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Contact Form */}
      <section className="max-w-3xl mx-auto">
        <Card className="border-border shadow-md">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-center">
              {t("form.title")}
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input placeholder={t("form.name")} />
              <Input type="email" placeholder={t("form.email")} />
            </div>

            <Textarea placeholder={t("form.message")} rows={5} />

            <Button
              size="lg"
              className="w-full flex items-center gap-2 bg-chart-2 text-primary-foreground hover:bg-chart-2/90 dark:bg-chart-2 dark:hover:bg-chart-2/80"
            >
              <Send className="w-4 h-4" />
              {t("form.submit")}
            </Button>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default ContactPage;
