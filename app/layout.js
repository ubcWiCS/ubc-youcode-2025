import { Montserrat, DM_Serif_Display, DM_Sans, Lexend_Deca } from "next/font/google";
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

const lexend = Lexend_Deca({
  subsets: ["latin"],
  weight: ["300","500", "600"],
  display: "swap",
  variable: "--font-lexend",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${montserrat.variable} ${dmSerif.variable} ${lexend.variable}`}>
        {children}
      </body>
    </html>
  );
}
