"use client";

import { createContext, useState, ReactNode } from "react";

// Declare and export the HeaderColorContext
export const HeaderColorContext = createContext<{
  headerColor: string;
  setHeaderColor: (color: string) => void;
}>({
  headerColor: "",
  setHeaderColor: () => {},
});

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [headerColor, setHeaderColor] = useState<string>("");

  return (
    <HeaderColorContext.Provider value={{ headerColor, setHeaderColor }}>
      {children}
    </HeaderColorContext.Provider>
  );
}
