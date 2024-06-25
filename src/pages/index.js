import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Process from "@/components/Process";
import Aboutus from "@/components/aboutus";
import Team from "@/components/Team";
import Footer from "@/components/footer";
import ContactForm from "@/components/contactform";
import Reseach from "@/components/Research";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-white">
      <Head> {/* Step 2: Add the Head component */}
        <title>Cinnamon Paradise</title>
        <link rel="icon" href="/img/logo.png" /> 
      </Head>
      <div id="hero"><Hero/></div>
    <div id="process"><Process/></div>
    <div id="research"><Reseach/></div>
    <div id="products"><Products/></div>
    <div id="aboutus"><Aboutus/></div>
    <div id="team"><Team/></div>
    <div id="contact"><ContactForm/></div>
    <Footer/>
    </div>
  );
}
