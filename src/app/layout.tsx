import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Bounce, ToastContainer } from "react-toastify";
import Navbar from "@/components/navbar";
import { SessionProvider } from "next-auth/react";
import Footer from "@/components/footer";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HotCoffee-BlogApp",
  description: "Brewing stories, one sip at a time",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider>
        <Navbar />
        {children}
        <Footer/>
        </SessionProvider>
        <ToastContainer 
          position="bottom-right"
          autoClose={3000}
          draggable
          theme="dark"
          closeOnClick
          transition={Bounce}
        />
        
      </body>
      
    </html>
  );
}
