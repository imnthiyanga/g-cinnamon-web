import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Process from "@/components/Process";
import Aboutus from "@/components/aboutus";
import Team from "@/components/Team";
import Footer from "@/components/footer";
import ContactForm from "@/components/contactform";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-white">
      
      <div id="hero"><Hero/></div>
    <div id="process"><Process/></div>
    <div id="products"><Products/></div>
    <div id="aboutus"><Aboutus/></div>
    <div id="team"><Team/></div>
    <div id="contact"><ContactForm/></div>
    <Footer/>
    </div>
  );
}
