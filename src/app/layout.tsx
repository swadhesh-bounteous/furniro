import type { Metadata } from "next";
import "./globals.css";
import NextQueryProvider from "@/components/nextqueryprovider/NextQueryProvider";
import StoreProvider from "./StoreProvider";
export const metadata: Metadata = {
  title: "Furniro",
  description: "Swadhesh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-Poppins antialiased`}>
        <NextQueryProvider>
          <StoreProvider>
            <main>{children}</main>
          </StoreProvider>
        </NextQueryProvider>
      </body>
    </html>
  );
}
