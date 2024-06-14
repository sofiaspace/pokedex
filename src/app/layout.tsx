import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ApolloWrapper } from "@/apollo/apollo-wrapper";
import Image from "next/image";
import logo from "../../public/img/logo.svg";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pokedex",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-screen bg-cover bg-fixed bg-center bg-[url('../../public/img/background-image.jpg')] overflow-auto"
    >
      <body className="flex-1 flex flex-col justify-center items-center">
        <header className="pt-16">
          <Link href={"/"} className="items-center pt-20">
            <Image src={logo} alt="Logo" width={200} priority />
          </Link>
        </header>
        <main className="p-24 flex items-center w-[100%]">
          <ApolloWrapper>{children}</ApolloWrapper>
        </main>
      </body>
    </html>
  );
}
