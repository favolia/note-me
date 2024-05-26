import { Inter, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/component/navbar";

const inter = Inter({ subsets: ["latin"] });

const nunito = Nunito({
  subsets: ["latin"],
  weight: [
    "200", "300", "400",
    "500", "600", "700",
    "800", "900", "1000"
  ],
  variable: "--font-nunito"
})

export const metadata = {
  title: "Note Me",
  description: "Catatanna UNI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${nunito.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
