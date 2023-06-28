import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Harsh Nasit Portfolio",
  description: "This the the portpolio website of Harsh Nasit",
  author:"Harsh Nasit"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <div>Footer</div>
      </body>
    </html>
  );
}
