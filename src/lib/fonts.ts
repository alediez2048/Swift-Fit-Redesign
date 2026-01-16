import { Playfair_Display, Inter } from "next/font/google";

export const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
