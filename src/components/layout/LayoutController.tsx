"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/layout/Header";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";

export default function LayoutController({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname() ?? "";
  const isHome =
    pathname === "/" || /^\/[a-z]{2}(?:-[A-Z]{2})?$/.test(pathname);

  return (
    <>
      {isHome ? <Header /> : <NavBar />}
      {children}
      <Footer />
    </>
  );
}
