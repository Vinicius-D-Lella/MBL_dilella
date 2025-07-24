import type { Metadata } from "next";
import { Afacad } from "next/font/google";
import "./styles.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

const afacad = Afacad({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MBL | Movimento Brasil Livre",
  description: "Site teste",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
return (
    <html lang="pt-BR">
      <body id="body" className={afacad.className}>
        <Navbar />
        {children}
        <Newsletter/>
        <Footer/>
      </body>
    </html>
  );
}