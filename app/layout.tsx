import type { Metadata } from "next";
import Footer from "@/components/shared/footer";
import "@/assets/styles/globals.css";

export const metadata: Metadata = {
  title: "Gustavo Lieb | Software Engineer",
  description: "Portfólio de Gustavo Lieb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="flex min-h-screen flex-col">
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}