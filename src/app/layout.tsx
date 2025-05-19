import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default:"آرمان آروین پارتاک",
    template:"%s | آرمان آروین پارتاک",
    absolute:"",
  },
  icons: {
    icon: '/fav.png',
  },
  description: "شرکت آرمان آروین پارتاک در زمینه طراحی و ساخت تجهیزات فاضلاب پساب و آب شیرین کن",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        {children}
      </body>
    </html>
  );
}
