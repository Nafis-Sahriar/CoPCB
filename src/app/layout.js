import { Jost } from "next/font/google";
import "./globals.css";
import AppNavbar from "@/Components/Shared/Navbar/AppNavbar";
import Footer from "@/Components/Shared/Footer/Footer";



const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});



export const metadata = {
  title: "CoPCB - AI-Powered PCB Design Platform",
  description: "CoPCB is an AI-powered PCB design platform that transforms hand-drawn circuits into real PCB designs. Our mission is to empower engineers and designers with cutting-edge technology to streamline the PCB design process, enhance creativity, and accelerate innovation. With CoPCB, you can easily convert your sketches into professional-grade PCB layouts, saving time and effort while ensuring precision and quality.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${jost.className}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black">

        
      <AppNavbar></AppNavbar>

        {children}
      <Footer></Footer>
        </body>
    </html>
  );
}
