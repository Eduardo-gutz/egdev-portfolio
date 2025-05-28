import type { Metadata } from "next";
import { Chakra_Petch } from "next/font/google";
import "./globals.css";
import "boxicons-react/styles"

const chakra = Chakra_Petch({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Eduardo Guette | Desarrollador Full Stack",
  description: "Portfolio personal de Eduardo Guette, Desarrollador Full Stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${chakra.className} bg-gray-800 text-white`}>
        {children}
      </body>
    </html>
  );
}
