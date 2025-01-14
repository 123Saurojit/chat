import { Inter } from "next/font/google";
import "./globals.css";
import { ContextApi } from "../ContextApi/Context.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-950">
        <ContextApi>  
        {children}
        </ContextApi>
        </body>
    </html>
  );
}
