import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AuditAlly",
    template: "%s | AuditAlly",
  },
  description:
    "AuditAlly helps teams plan, manage, and prove compliance with streamlined audits and real-time evidence tracking.",
  applicationName: "AuditAlly",
  metadataBase: new URL("https://auditally.com"),
  openGraph: {
    title: "AuditAlly",
    description:
      "AuditAlly helps teams plan, manage, and prove compliance with streamlined audits and real-time evidence tracking.",
    url: "https://auditally.com",
    siteName: "AuditAlly",
    type: "website",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "AuditAlly dashboard preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AuditAlly",
    description:
      "AuditAlly helps teams plan, manage, and prove compliance with streamlined audits and real-time evidence tracking.",
    images: ["/hero.png"],
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const hasClerkKey = !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

  const content = (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );

  if (hasClerkKey) {
    return <ClerkProvider>{content}</ClerkProvider>;
  }

  return content;
}
