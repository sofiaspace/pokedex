import type { Metadata } from "next";
import "./globals.css";
import { ApolloWrapper } from "@/apollo/apollo-wrapper";
import Image from "next/image";
import logo from "../../public/img/logo.svg";
import Link from "next/link";
import { Montserrat } from "next/font/google";

export const metadata: Metadata = {
  title: "Pokedex",
};

const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.className}>
      <body className="flex flex-col items-center h-screen bg-cover bg-fixed bg-center bg-[url('../../public/img/background-image.jpg')] overflow-auto">
        <header className="pt-20">
          <Link href={"/"}>
            <Image src={logo} alt="Logo" width={200} priority />
          </Link>
        </header>
        <main className="p-20 flex items-center w-[100%]">
          <ApolloWrapper>{children}</ApolloWrapper>
        </main>
      </body>
    </html>
  );
}
