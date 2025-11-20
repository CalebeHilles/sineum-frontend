import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

import type { Metadata } from "next";
import { Source_Serif_4 } from "next/font/google";
import "./globals.css";

const SourceSerif4 = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

export const metadata: Metadata = {
  title: "Sineum",
  description: "Here you see the best blogs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${SourceSerif4.variable} font-source-serif dark antialiased flex min-h-screen max-w-screen`}
      >
        <SidebarProvider>
          <AppSidebar />
          <SidebarTrigger />
          <main className="flex-1">{children}</main>
        </SidebarProvider>
      </body>
    </html>
  );
}
