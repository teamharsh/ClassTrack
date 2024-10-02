import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ClassTrack",
  description: "A comprehensive app to track your classes and schedules",
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
