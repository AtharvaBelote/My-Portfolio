import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Atharva Belote | Developer Portfolio",
  description: "Full Stack Developer specializing in modern web technologies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-mono">
        <div className="relative min-h-screen overflow-hidden">
          {/* Orbs */}
          <div className="fixed top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl z-0"></div>
          <div className="fixed bottom-20 left-20 w-64 h-64 bg-secondary/5 rounded-full blur-3xl z-0"></div>

          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
