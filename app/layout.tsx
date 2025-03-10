// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Navbar, Footer } from "@/components";
import "./globals.css";



export const metadata = {
  title: "Car Hub",
  description: "Discover the best cars in the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
