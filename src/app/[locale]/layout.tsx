import type { Metadata } from "next";
import "./globals.css";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Cairo } from "next/font/google";
import ClientRootProviders from "@/providers/ClientRootProviders";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BookInn",
  description: "Hotel booking app",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await import(`../../../messages/${locale}.json`).then(
    (mod) => mod.default
  );

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${cairo.variable} antialiased`}
      >
        <ClientRootProviders locale={locale} messages={messages}>
          {children}
        </ClientRootProviders>
      </body>
    </html>
  );
}
