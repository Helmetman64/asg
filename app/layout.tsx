"use client";

import Header from "../components/Header/Header";
import "./globals.css";
import { Roboto } from "next/font/google";
import { createContext, useState } from "react";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import Footer from "@/components/Footer/Footer";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const HeaderColorContext = createContext<{
  headerColor: string;
  setHeaderColor: (color: string) => void;
}>({
  headerColor: "",
  setHeaderColor: () => {},
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [headerColor, setHeaderColor] = useState<string>("");

  return (
    <HeaderColorContext.Provider value={{ headerColor, setHeaderColor }}>
      <html lang="en" className={roboto.className}>
        <body>
          <main>
            <Header backgroundColor={headerColor} />
            <MantineProvider>{children}</MantineProvider>
            <Footer />
          </main>
        </body>
      </html>
    </HeaderColorContext.Provider>
  );
}
