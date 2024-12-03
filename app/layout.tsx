import type { Metadata } from "next";
import "@/app/global.css";
import Navbar from "./_components/navbar";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: "Learn Next.js",
}

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" className={inter.className}>
            <body>
                <Navbar />
                {children}
            </body>
        </html >
    )

}