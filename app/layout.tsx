import Header from "../components/Header/Header";
import "./globals.css";
import { Roboto } from "next/font/google";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import Footer from "@/components/Footer/Footer";
import ThemeProvider from "./theme-provider";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

// This is your Root Layout Component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <main>
          <ThemeProvider>
            <Header />
            <MantineProvider>{children}</MantineProvider>
            <Footer />
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
