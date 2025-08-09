import React from "react";
import "./globals.css";
import NavBar from "@component/layout/NavBar";
import Footer from "@component/layout/Footer";

export const metadata = {
  title: "Mon Portfolio",
  description: "Portfolio Next.js avec layout et page home",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        style={{
          backgroundColor: "#fff",
          margin: "0 auto",
        }}
      >
        <NavBar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
