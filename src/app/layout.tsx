import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Frontend Mentor | Newbie-01",
  description: "Frontend Mentor | Newbie - 01",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'antialiased bg-background min-h-screen', 
          // geistSans.variable,
          // geistMono.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
