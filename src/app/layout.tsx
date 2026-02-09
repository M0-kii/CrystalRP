import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import { ClickSparkle } from "@/components/effects/ClickSparkle";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazirmatn",
});

export const metadata: Metadata = {
  title: "CrystalRP | کریستال آرپی",
  description: "بهترین سرور فایوم ایرانی با امکانات بی نظیر",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <body className={`${vazirmatn.className} antialiased bg-black text-slate-50 min-h-screen`}>
        <AuthProvider>
          <ClickSparkle />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
