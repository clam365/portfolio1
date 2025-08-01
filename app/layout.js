import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/header/index";
import {Providers} from "@/app/providers";
import Footer from "@/components/footer/footer1"
//import {Customcursor} from "@/components/cursor/customcursor";
import { Analytics } from "@vercel/analytics/react"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Chris Lam | Creative Designer",
  description: "Chris Lam's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
            <Analytics/>
            <Providers>
                <div className={" relative z-10"}>
                    <Header/>
                </div>

                <main className={"relative z-0 pt-6 md:pt-12"}>
                    {children}
                    <Footer/>
                </main>

            </Providers>

      </body>
    </html>
  );
}
