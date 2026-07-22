import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eggs &….. | Kingston, Jamaica",
  description:
    "A bold new breakfast concept from Chef Damion ‘Stewie’ Stewart, coming soon to Kingston, Jamaica.",
  icons: {
    icon: "/eggs-and-logo.png",
    shortcut: "/eggs-and-logo.png",
  },
  openGraph: {
    title: "Eggs &….. | Kingston, Jamaica",
    description: "Big flavour. Soft yolks. Jamaican instinct. Coming soon.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
