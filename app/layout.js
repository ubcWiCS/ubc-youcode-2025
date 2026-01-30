import Navbar from "@/components/Navbar";
import { Montserrat, DM_Serif_Display } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "youCode",
  description: "youCode",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
  variable: "--font-montserrat",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-dm-serif",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${montserrat.variable} ${dmSerif.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
