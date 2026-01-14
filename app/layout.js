import { Montserrat } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "youCode",
  description: "youCode",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"], // 600=SemiBold, 700=Bold, 800=ExtraBold
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
