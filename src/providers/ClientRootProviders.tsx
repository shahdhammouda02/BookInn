"use client"
import { ReactNode } from "react";
import QueryProvider from "@/providers/QueryProvider";
import { ThemeProvider } from "@/providers/theme-provider";
import { NextIntlClientProvider } from "next-intl";
import { SessionProvider } from "next-auth/react";
import LayoutController from "@/components/layout/LayoutController";

const ClientRootProviders = ({ locale, messages, children }: { locale: string; messages: any; children: ReactNode }) => {
  return (
    <SessionProvider>
   <QueryProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <LayoutController>{children}</LayoutController>
        </NextIntlClientProvider>
      </ThemeProvider>
    </QueryProvider>
    </SessionProvider>
  )
}

export default ClientRootProviders
