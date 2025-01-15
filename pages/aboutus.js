import React from "react";
import "@fontsource/montserrat";
import "@fontsource/montserrat/200.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800.css";
import Link from "next/link";
import Image from "next/image"     
import Navbar from "../components/navbar";
import Footer from "./api/footer";
 
export default function AboutUs(){ 
    return(
        <>
        <Navbar />
    <div className="sm:hidden">
        <div className="aboutus-mobile-outer-bg pl-8">
            <div className="aboutus-mobile-inner-bg bg-white shadow-inner pt-24 pb-16">
                <div className=" p-12">
                    <h1 className="aboutus-mobile-slogan-text font-extrabold lg:text-5xl">ELEVATE  YOUR  MEAL  TIME,</h1>
                    <h1 className="aboutus-mobile-slogan-text font-extrabold lg:text-5xl">ELIMINATE  THE  WAIT!!</h1>

                </div>
                <div className="flex flex-col gap-16 pt-8">
                    <div className="gap-4 flex flex-col justify-center items-center">
                        <div className="p-5 rounded-e-lg about-us-mobile-inner-text-bg px-12 py-6 text-lg mb-8 max-w-xs"><p>A time efficient delivery app streamlines the ordering process ensuring swift transactions and prompt deliveries, optimizing for users on the go.</p></div>
                        <img className="w-64" src="/images/cashex-3-mobile.png"/>
                    </div>
                    <div className="gap-4 flex flex-col justify-center items-center">
                        <div className="rounded-e-lg about-us-mobile-inner-text-bg px-12 py-6 text-lg mb-8 max-w-xs"><p>Users can effortlessly peruse menus, place orders, and promptly retrieve their meals, eliminating any waiting periods and elevating the overall dining experience.</p></div>
                        <img className="w-64" src="/images/cashex-1-mobile.png"/>
                    </div>
                    <div className="gap-4 flex flex-col justify-center items-center">
                        <div className="p-5 rounded-e-lg about-us-mobile-inner-text-bg px-12 py-6 text-lg mb-8 max-w-xs"><p>This app is specifically crafted for takeout orders, with a primary emphasis on streamlining the pickup procedure.</p></div>
                        <img className="w-64" src="/images/cashex-2-mobile.png"/>
                    </div>
                    
                    {/* <div className="gap-4">
                        <div className="h-52 p-5 rounded-e-lg about-us-mobile-inner-text-bg px-12 py-6 text-4xl mb-8"><p> </p></div>
                        <div className="flex justify-center items-center">
                            <div className="mobile-image-bg">
                                <div className="mobile-inner-image-bg flex justify-center items-center">
                                    <img className="h-40" src="/images/cashex-2.png"/>
                                </div>
                            </div>
                            <div className="h-40 flex justify-center items-center">
                                <div className=" flex justify-center items-center bg-white h-28 w-64 text-center font-bold shadow-2xl shadow-500 aboutus-round text-4xl aboutus-anime-txt"><p>PAY</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="gap-4">
                        <div className="h-52 p-5 rounded-e-lg about-us-mobile-inner-text-bg px-12 py-6 text-4xl mb-8"><p></p></div>
                        <div className="flex justify-center items-center">
                            <div className="mobile-image-bg">
                                <div className="mobile-inner-image-bg flex justify-center items-center">
                                    <img className="h-44" src="/images/cashex-3.png"/>
                                </div>
                            </div>
                            <div className="h-40 flex justify-center items-center">
                                <div className=" flex justify-center items-center bg-white h-28 w-64 text-center font-bold shadow-2xl shadow-500 aboutus-round text-4xl aboutus-anime-txt"><p>TAKE OUT</p></div>
                       </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
    
    <div className="hidden sm:block">
        <div className="aboutus-outer-bg pl-24 ">
            <div className="bg-white shadow-inner pt-24 pb-16">
                <div className=" p-12">
                    <h1 className="aboutus-slogan-text font-extrabold text-3xl">ELEVATE  YOUR  MEAL  TIME,</h1>
                    <h1 className="aboutus-slogan-text font-extrabold text-3xl">ELIMINATE  THE  WAIT!!</h1>
                </div>
                <div className="flex flex-col gap-16 pt-8">
                    <div className="flex  gap-4">
                        <div className="h-40 p-5 rounded-e-lg about-us-inner-text-bg md:text-base font-medium lg:text-2xl xl:text-[28px] px-12 py-6"><p>A time efficient delivery app streamlines the ordering process ensuring swift transactions and prompt deliveries, optimizing for users on the go.</p></div>
                        <div className="flex">
                            <div className="image-bg">
                                <div className="inner-image-bg flex justify-center items-center">
                                    <img src="/images/cashex-1.png"/>
                                </div>
                            </div>
                            <div className="h-40  flex justify-center items-center">
                                <div className="flex justify-center items-center bg-white h-14 w-32 text-center font-bold shadow-2xl shadow-500 aboutus-round text-xl aboutus-anime-txt"><p>ORDER</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex  gap-4">
                        <div className="h-40 p-5 rounded-e-lg about-us-inner-text-bg md:text-base font-medium lg:text-2xl xl:text-[28px] px-12 py-6"><p>Users can effortlessly peruse menus, place orders, and promptly retrieve their meals, eliminating any waiting periods and elevating the overall dining experience.</p></div>
                        <div className="flex">
                            <div className="image-bg">
                                <div className="inner-image-bg flex justify-center items-center">
                                    <img src="/images/cashex-2.png"/>
                                </div>
                            </div>
                            <div className="h-40 flex justify-center items-center">
                                <div className=" flex justify-center items-center bg-white h-14 w-32 text-center font-bold shadow-2xl shadow-500 aboutus-round text-xl aboutus-anime-txt"><p>PAY</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex  gap-4">
                        <div className="h-40 p-5 rounded-e-lg about-us-inner-text-bg md:text-base font-medium lg:text-2xl xl:text-[28px] px-12 py-6"><p>This app is specifically crafted for takeout orders, with a primary emphasis on streamlining the pickup procedure.</p></div>
                        <div className="flex">
                            <div className="image-bg">
                                <div className="inner-image-bg flex justify-center items-center">
                                    <img src="/images/cashex-1.png"/>
                                </div>
                            </div>
                            <div className="h-40 flex justify-center items-center">
                                <div className=" flex justify-center items-center bg-white h-14 w-32 text-center bold shadow-2xl shadow-500 aboutus-round text-xl aboutus-anime-txt"><p>TAKE OUT</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
        </>
    )
}
