import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@/assets/styles/globals.css';
import { cn } from "@/lib/utils";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: "CV Gustavo Lieb",
  description: "Gustavo's modern resume",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
    >
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
