import { Inter } from "next/font/google";
// import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "reviews",
  description: "Review About Youtube Sessions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className && "bg-blue-100"}>
        Navbar
        {children}
      </body>
    </html>
  );
}
