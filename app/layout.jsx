
import { Bebas_Neue, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import ParticlesLayout from "@/components/layout/particle";
import { Toaster } from "@/components/ui/toaster";

const bebas_neue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas_neue",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Arnulfo Caceres Portfolio",
  description:
    "Showcasing the work and skills of Arnulfo Caceres, crafted with passion and expertise.",
  icons: {
    icon: [{ url: "/icon.svg" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${bebas_neue.variable} ${poppins.variable} bg-gradient-to-r from-black via-emerald-950 to-black bg-no-repeat bg-cover w-full`}
      >
        <ParticlesLayout />
        <Header />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
