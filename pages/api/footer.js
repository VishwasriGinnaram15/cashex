import React from "react";
import "@fontsource/montserrat";
import "@fontsource/montserrat/200.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800.css";
import Link from "next/link";
import Image from "next/image"     
export default function Footer() {
    return (
        <>
    <div className="hidden md:block">
        <div className="flex items-center justify-between footer-bg py-4 lg:py-7 xl:py-10 px-10 lg:px-16 xl:px-36">
            <div className="flex justify-center flex-col items-center">
                    <img className="h-auto md:w-36 lg:w-44 xl:w-48" src="/images/footerlogo.png"/>
                    <h1 className="footer-bg-logo-name text-[30px] lg:text-[36px] xl:text-[40px] font-semibold text-white mt-4">CASHEX</h1>
                </div>
            <div className="flex items-center gap-x-8 lg:gap-x-11">
            <div className="vl h-[260px] lg:h-[320px] xl:h-[363px]"></div>
            <div className="flex">
                <div className="flex flex-col justify-center text-white">
                    <div>
                        <h1 className="footer-logo-name font-medium md:text-sm lg:text-lg xl:text-xl text-white mb-2">
                            Privacy Policy
                        </h1>     
                    </div>
                    <div className="flex flex-col mb-2 font-thin sm:text-xs md:text-xs lg:text-sm xl:text-base text-white">
                        <ul className="footer-logo-name thin">
                            <li><a className="" href="">Cookies</a></li> 
                            <li><a href="">Log Data</a></li>
                            <li><a href="">Service provider</a></li>
                            <li><a href="">Security</a></li>
                            <li><a href=""> Link To Othersites</a></li>
                            <li><a href=""> Children&apos;s Privacy</a></li>    
                        </ul>
                    </div>
                    <div className="flex flex-col footer-logo-name font-medium md:text-sm lg:text-lg xl:text-xl  gap-y-1" >
                    <Link href={"/terms"}> <p>
                            Terms & Condition 
                        </p></Link>
                        <p>
                            Return,Refund & Cancellation Policy
                        </p>
                        <p>
                            Product/Service Purchase Flow
                        </p>
                    </div>
                    <div className="flex flex-col thin footer-logo-name font-thin sm:text-xs md:text-xs lg:text-sm xl:text-base mt-2">
                        <p>For Customers</p>
                        <p>For Merchants</p>
                    </div>
                    </div>
                </div>
            <div className="vl h-[260px] lg:h-[320px] xl:h-[363px]"></div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="flex justify-center items-center mb-6 lg:mb-9 gap-x-6 lg:gap-x-4">
                    <div className=""><img className="w-auto h-8 xl:h-10" src="/images/insta.png"/></div>
                    <div className=""><img className="w-auto h-8 xl:h-10" src="/images/linkedin.png"/></div>
                    <div className=""><img className="w-auto h-8 xl:h-14" src="/images/email.png"/></div>  
                </div>
                <div className="flex flex-col gap-y-6 justify-center items-center">
                <div><img src="/images/appstore.png" className="h-auto md:w-40 lg:w-48 xl:w-56"/>      
                    </div>    
                    <div><img src="/images/gp.png" className="h-auto md:w-40 lg:w-48 xl:w-56"/></div>
                </div>
            </div>
        </div>
    </div>
    
 

    </>
);
}
