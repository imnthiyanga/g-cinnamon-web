import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Process from "@/components/Process";
import Aboutus from "@/components/aboutus";
import Team from "@/components/Team";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-white">
      <Hero/>
      <Process/>
      <Products/>
      <Aboutus/>
      <Team/>
    </div>
  );
}
