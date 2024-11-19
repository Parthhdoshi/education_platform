import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Providers } from "./Providers";
import { cn } from "./lib/utils";

export const metadata: Metadata = {
  title: "Education",
  description: "Education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body
      className={cn(
        'min-h-screen bg-white dark:bg-gray-950',
        'antialiased',
        // Prevent content shift
        '[&_.theme-toggle-wrapper]:opacity-0 [&_.theme-toggle-wrapper]:animate-fade-in'
      )}
    >
      <Providers>
        <Navbar />
        <main>{children}</main>
      </Providers>
    </body>
  </html>
  );
}
