import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Cairo } from "next/font/google";
import QueryProvider from "@/providers/QueryProvider";
import LayoutController from "@/components/layout/LayoutController";

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

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { children } = props;
  const params = await props.params;
  if (!hasLocale(routing.locales, params.locale)) {
    notFound();
  }

  return (
    <html lang={params.locale} suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${cairo.variable} antialiased`}
      >
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NextIntlClientProvider>
              <LayoutController>
                <main>{children}</main>
              </LayoutController>
            </NextIntlClientProvider>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
