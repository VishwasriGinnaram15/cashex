import React from "react";
import "@fontsource/montserrat";
import "@fontsource/montserrat/200.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import Image from "next/image"
import Link from "next/link";
import Footer from "./api/footer";
import Navbar from "../components/navbar";
export default function Download(){
    return(
        <>
        <Navbar />
            <div className="flex mt-10 md:mt-0">
        <div className="w-100% sm:w-1/2" >
            <div className="mt-20 ml-10 md:mt-28 md:ml-16 md:text-4xl text-xl download-heading semi-bold">
            DOWNLOAD THE APP NOW!
            </div>
            <div className="sm:hidden">
                <img src="/images/dmain.png" alt=""/>
            </div>
            <div className="mt-4 ml-10 md:ml-16 md:mt-8 text-sm md:text-2xl download-para">
            Step into a world of convenience and time-saving with Cashex! Download our app now and enjoy hassle-free ordering at your college, whether it&apos;s for food or any other merchant services.
            </div>
            <div className="flex p-8">
                <div className="ml-2 md:mt-12 md:ml-16">
                    <img src="/images/gp.png" alt="" className="w-20 md:w-40"/>
                </div>
                <div className="ml-2 md:mt-12 md:ml-8">
                    <img src="/images/appstore.png" alt="" className="w-20 md:w-40"/>
                </div>
            </div>
        </div>
        <div className="hidden sm:block md:mt-28 md:w-1/2">
            <img src="/images/dmain.png" alt=""/>
        </div>  
    </div>
    <Footer />       </> 
    )
}