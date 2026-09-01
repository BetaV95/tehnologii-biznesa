import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Технологии Бизнеса — автоматизация HoReCa и retail",
  description:
    "Автоматизация ресторанов и магазинов: iiko, Saby, торговое оборудование, внедрение и техническая поддержка по всей России."
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
