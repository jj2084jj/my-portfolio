import type { Metadata } from "next";
import "./globals.css";
import "react-notion-x/src/styles.css";
import Header from "@/component/00_layout/header";
import Footer from "@/component/00_layout/footer";
import ClientLayout from "@/component/00_layout/client-layout";

export const metadata: Metadata = {
  title: "Joeum kim 프론트엔드 포트폴리오",
  description: "개발자 김조은 입니다. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-[#121212] text-white`}>
        <ClientLayout>
          <Header />
          <main className="min-h-[calc(100dvh-120px)] pt-[60px]">{children}</main>
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}
