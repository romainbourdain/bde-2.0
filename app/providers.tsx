"use client";

import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider defaultTheme="system" attribute="class" enableSystem>
      {children}
      <Toaster richColors expand toastOptions={{ duration: 1000 }} />
    </ThemeProvider>
  );
};
