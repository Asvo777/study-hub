import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Study Hub",
  description: "A collaborative online study hall.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
