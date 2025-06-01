import { Geist, Geist_Mono,Poppins } from "next/font/google";
import "./globals.css";
import Navber from "./components/Navber";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins=Poppins({
  weight:["400",'600','700'],
  subsets:['latin']
})

export const metadata = {
  keywords: ['Next.js', 'React', 'JavaScript','learingNextjs'],
  title:{
    default:"Learning nextJs",
    template:"%s | Learning nextJs",
  },
  description: "exploreing next js ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <Navber></Navber>
        <main>

        {children}
        </main>
        <footer className="bg-gray-500 mt-16 text-center">
          Awesome footer for next js
        </footer>
      </body>
    </html>
  );
}
