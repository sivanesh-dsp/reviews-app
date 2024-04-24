import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "review-app",
  description: "Review about the session",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className && "bg-blue-100"}>{children}</body>
    </html>
  );
}
