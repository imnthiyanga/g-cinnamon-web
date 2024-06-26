import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Research from "@/components/Research";
import Footer from "@/components/footer";
import Halfnav from "@/components/Halfnav";
import HalfFooter from "@/components/HalfFooter";



export default function Reseach() {
  return (
    <div className="bg-white">
        <Halfnav/>
      <div id="research"><Research/></div>
      <HalfFooter/>
    </div>
  );
}