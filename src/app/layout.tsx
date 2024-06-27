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
      <body className="flex flex-col items-center bg-cover h-dvh bg-fixed bg-center bg-[url('../../public/img/background-image.jpg')] overflow-auto">
        <header className="pt-12">
          <Link href={"/"}>
            <Image src={logo} alt="Logo" width={200} priority />
          </Link>
        </header>
        <main className="py-14 md:px-1 flex items-center w-[100%] h-full">
          <ApolloWrapper>{children}</ApolloWrapper>
        </main>
      </body>
    </html>
  );
}
