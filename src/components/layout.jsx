// src/components/Layout.jsx
import React from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {children}
      </main>

      <Footer />
    </div>
  );
}
