import { Navbar } from "@/features/layout/navbar";
import { cn } from "@/lib/utils";
import type { LayoutParams } from "@/types/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BDE TPS",
  description: "Site officiel du BDE TPS",
};

export default async function RootLayout({ children }: LayoutParams<{}>) {
  return (
    <html lang="fr" className="h-full">
      <body className={cn("bg-background h-full", inter.className)}>
        <Providers>
          <div className="flex flex-col h-full">
            <Navbar />
            <div className="flex-1">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
