import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "PASANDOR — онлайн-запись и автоматизация | CRM-система для бизнеса в сфере услуг",
    description: "PASANDOR — онлайн-запись и автоматизация | CRM-система для бизнеса в сфере услуг",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={`${inter.variable} antialiased`}>
            <header>
                <Header />
            </header>

            <main>
                {children}
            </main>

            <footer>
                <Footer />
            </footer>
        </body>
        </html>
    );
}
