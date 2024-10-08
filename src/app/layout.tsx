import type { Metadata } from "next";
import "./globals.css";
import NextQueryProvider from "@/components/nextqueryprovider/NextQueryProvider";
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
      <body
        className={`font-Poppins antialiased`}
      >
        <NextQueryProvider>
          <main>{children}</main>
        </NextQueryProvider>
      </body>
    </html>
  );
}
