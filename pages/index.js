import Head from "next/head";
import Header from "../components/Header"
import Hero from "../components/Hero"
import Homepage from "../components/Homepage"
import AboutUs from "./aboutus";
import Navbar from "../components/navbar";
import Footer from "./api/footer";

export default function Home() {
  return (
    <div>
      <Head></Head>
      <div className="">
        <Hero />
        <Navbar/>
        <Homepage/>
        <Footer />
      </div>
    </div>
  );
}
