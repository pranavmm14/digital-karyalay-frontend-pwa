// src/components/Layout.tsx
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import React from "react";

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-grow container mx-auto px-4 py-6">
      {children}
    </main>
    <Footer />
  </div>
);