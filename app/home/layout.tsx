import React from "react";
import "../globals.css";
import NavBar from "@component/layout/NavBar";

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
      <body style={{ backgroundColor: "#FAFBFF", margin: 0, padding: 0 }}>
        <NavBar />

        <main>{children}</main>

        <footer
          style={{
            textAlign: "center",
            padding: 16,
            backgroundColor: "#f0f0f0",
            marginTop: 40,
          }}
        >
          &copy; 2025 - Mon Portfolio
        </footer>
      </body>
    </html>
  );
}
