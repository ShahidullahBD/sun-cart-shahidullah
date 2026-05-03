import dns from 'node:dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import 'animate.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sun Cart",
  description: "Summer Essentials Store",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        
        <main className="w-[90%] mx-auto">
          {children}
        </main>
         <Toaster position="top-right" />
      </body>
    </html>
  );
}
