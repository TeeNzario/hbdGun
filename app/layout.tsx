import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Forest Remembers | A Birthday Story",
  description:
    "เรื่องราววันเกิดในป่าจันทร์สีเงิน—ห้าความทรงจำที่ค่อย ๆ นำแสงกลับคืนมา",
  openGraph: {
    title: "The Forest Remembers",
    description: "A cinematic birthday story told through five glowing memories.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "The Forest Remembers — A Birthday Story" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Forest Remembers",
    description: "A cinematic birthday story told through five glowing memories.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#07181C",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
