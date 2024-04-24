import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
// import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "reviews",
  description: "Review About Youtube Sessions",
};

export default function RootLayout({ children }) {
  return (
    <div>
      <Navbar appTitle={"Sivanesh Dsp"} />
      {children}
    </div>
  );
}
