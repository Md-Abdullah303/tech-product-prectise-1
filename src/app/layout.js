import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/seared/Navbar";
import Footer from "@/components/seared/Footer";

const roboto = Roboto({
  subsets: ["latin"],
});

export const metadata = {
  title: "Tech Product",
  description: "Best products in Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.className}  h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
