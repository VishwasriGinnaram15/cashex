import React from "react"
import Image from "next/image"
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useMedia } from "use-media";
import "@fontsource/montserrat";
import "@fontsource/montserrat/200.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import Link from "next/link";
export default function Homepage(){

  const [ref, inView] = useInView({ threshold: 0 });
  const isMobile = useMedia({ maxWidth: 640 });
    return(
        <>
<div className="mt-20">
    <div className="homepage-img-animation">
      <img src="images/people.png" className="h-auto w-[100%]"/>
    </div>
    <div className="bg-[#381860] md:h-40 h-16 flex flex-col justify-center items-center">
      <div className="md:h-[70px] w-3/4 h-8 border-solid border-2 border-[#898989] rounded-lg md:rounded-xl shadow-[0_4px_4px_0px_rgba(0,0,0,0.5)] flex flex-col justify-center items-center">
        <h1 className="text-white font-bold lg:text-[30px] md:text-[24px] xl:text-[40px] text-[10px] home-page-text-shadow">Welcome To Cashex: From Queue To Quick!</h1>
      </div>
    </div>
    <div className="flex justify-center">
      <div className="flex justify-between md:py-6 mt-4 xl:gap-x-12 p-3 xs:p-0">
        <div>
          <div className="flex">
            <h1 className="text-[#363333] text-[12px] semi-bold md:medium md:text-2xl lg:text-3xl xl:text-4xl md:pb-8 pb-3 mt-6">Transforming your campus experience!</h1>
            <img src="/images/home.png" alt="" className="md:hidden h-[74px] w-auto"/>
          </div>
          <p className="text-[#363333] font-medium xl:text-2xl lg:text-xl md:text-[16px] xl:max-w-[58rem] lg:max-w-[40rem] md:max-w-[32rem] text-[10px] max-w-[21rem]">Introducing cashex,the revolutionary app designed to simplify and expedite your pickup process. No more hassle of standing in queues . With Cashex, <span className="font-bold">you can pre-order and pay for your meals, stationery, photocopies, and more in advance</span>, making your campus life smoother and more enjoyable.</p>
        </div>
        <div>
          <img src="/images/home.png" alt="" className="hidden md:block lg:h-[18rem] w-auto md:h-[14rem]"/>
        </div>
      </div>
    </div>
    <div className="flex justify-between md:px-8 md:pt-10 lg:pt-20 lg:px-12 mt-11 purple-bg hidden md:block lg:pb-16 pb-10">
      <h1 className="text-white font-bold font-[Montserrat] xl:text-4xl lg:text-3xl md:text-xl md:pb-6 xl:pb-12">How Cashex works :</h1>
      <div className="flex items-center justify-between">     
        <div className="flex flex-col items-center md:gap-y-8 lg:gap-y-12 xl:gap-y-16">
          <div className="flex flex-col md:gap-y-8 lg:gap-y-12 xl:gap-y-16">
            <p  className="text-white font-medium font-[Montserrat] xl:text-xl lg:text-base md:text-xs">Save time by pre-ordering not just <br/>meals but also stationery,<br/> photocopies, and other essentials <br/>with a few taps.</p>
            <button className="bg-white rounded-[50px] text-[#381860] font-bold xl:text-[21px] lg:text-base md:text-sm font-[Montserrat] xl:h-16 xl:w-80 lg:h-12 lg:w-64 md:h-10 md:w-52 shadow-[0px_4px_11.5px_0px_rgba(0,0,0,0.5)] home-page-text-shadow">Versatile Pre-Ordering</button>
          </div>
          <motion.div
          ref={ref}
          initial={{ y: isMobile ? "50%" : "75%" }}
          animate={inView ? { y: 0 } : { y: isMobile ? 100 : "" }}
          transition={{ duration: 2 }}>
          <img src="/images/h1.png" alt="" className="xl:h-32 lg:h-24 w-auto md:h-20 home-logo-anime"/>
        </motion.div>
        </div>
        <div className="flex flex-col items-center md:gap-y-8 lg:gap-y-12 xl:gap-y-16">
        <div className="flex flex-col md:gap-y-8 lg:gap-y-12 xl:gap-y-16">
          <p  className="text-white font-medium font-[Montserrat] xl:text-xl lg:text-base md:text-xs">Make hassle-free payments directly<br/> through the app. Your transactions <br/>are secure, and you can track your<br/> spending effortlessly.</p>
          <button className="bg-white rounded-[50px] text-[#381860] font-bold xl:text-[21px] lg:text-base md:text-sm font-[Montserrat] xl:h-16 xl:w-80 lg:h-12 lg:w-64 md:h-10 md:w-52 shadow-[0px_4px_11.5px_0px_rgba(0,0,0,0.5)] home-page-text-shadow">Secure Payments</button>
        </div>  
          <motion.div
          ref={ref}
          initial={{ y: isMobile ? "50%" : "75%" }}
          animate={inView ? { y: 0 } : { y: isMobile ? 100 : "" }}
          transition={{ duration: 2 }}>
          <img src="/images/h2.png" alt="" className="xl:h-32 lg:h-24 w-auto md:h-20 home-logo-anime"/>
        </motion.div>
        </div>
        <div className="flex flex-col items-center md:gap-y-8 lg:gap-y-12 xl:gap-y-16">
        <div className="flex flex-col md:gap-y-8 lg:gap-y-12 xl:gap-y-16">
          <p  className="text-white font-medium font-[Montserrat] xl:text-xl lg:text-base md:text-xs">Upon successful payment, receive a<br/> unique QR code. Flash it at the<br/> designated pickup point, and your <br/>pre-ordered items are ready for pickup!</p>
          <button className="bg-white rounded-[50px] text-[#381860] font-bold xl:text-[21px] lg:text-base md:text-sm font-[Montserrat] xl:h-16 xl:w-80 lg:h-12 lg:w-64 md:h-10 md:w-52 shadow-[0px_4px_11.5px_0px_rgba(0,0,0,0.5)] home-page-text-shadow">Instant QR Code</button>
        </div> 
          <motion.div
          ref={ref}
          initial={{ y: isMobile ? "75%" : "75%" }}
          animate={inView ? { y: 0 } : { y: isMobile ? 100 : "" }}
          transition={{ duration: 2 }}>
          <img src="/images/h3.png" alt="" className="xl:h-32 lg:h-24 w-auto md:h-20 home-logo-anime"/>
        </motion.div>
        </div>
      </div>
      {/* <motion.div
          ref={ref}
          initial={{ y: isMobile ? "50%" : "75%" }}
          animate={inView ? { y: 0 } : { y: isMobile ? 100 : "" }}
          transition={{ duration: 2 }} className="flex justify-center mt-10 md:gap-x-40 lg:gap-x-60 xl:gap-x-[420px]">
          <img src="/images/h1.png" alt="" className="xl:h-32 lg:h-24 w-auto md:h-20 home-logo-anime"/>
          <img src="/images/h2.png" alt="" className="xl:h-32 lg:h-24 w-auto  md:h-20 home-logo-anime"/>
          <img src="/images/h3.png" alt="" className="xl:h-32 lg:h-24 w-auto  md:h-20 home-logo-anime"/>
      </motion.div> */}
    </div>
    <div className="mobile-home-bg block md:hidden py-16 mt-6 pt-20 px-4">
      <h1 className="text-white font-bold font-[Montserrat] px-4 text-right text-lg">How Cashex works :</h1>
    <div>
        <div className="flex">
          <img src="/images/h1.png" alt="" className="h-20 w-auto"/>
          <div className="flex flex-col justify-center">
            <div className="flex">
              <hr className="h-0.5 w-16 bg-white mt-3"/>
              <button className="bg-white rounded-xl font-semibold text-[#381860] text-xs w-44 h-7 font-[Montserrat] shadow-[0px_4px_11.5px_0px_rgba(0,0,0,0.5)] home-page-text-shadow" >Versatile Pre-Ordering</button>
          </div>
          </div>
        </div>
        <p className="font-[Montserrat] text-white text-[12px] mt-4">Save time by pre-ordering not just meals but also stationery, photocopies, and other essentials with a few taps.</p>
      </div>
    <div>
        <div className="flex flex-row justify-end mt-6">
          <div className="flex flex-col justify-center">
            <div className="flex">
              <button className="bg-white rounded-xl font-semibold text-[#381860] text-xs w-36 h-7 font-[Montserrat] shadow-[0px_4px_11.5px_0px_rgba(0,0,0,0.5)] home-page-text-shadow">Secure Payments</button>
              <hr className="h-0.5 w-16 bg-white mt-3"/>
            </div>
          </div>
          <img src="/images/h2.png" alt="" className="h-20 w-auto"/>
        </div>
        <p className="font-[Montserrat] text-white text-[12px]">Make hassle-free payments directly through the app. Your transactions are secure, and you can track your spending effortlessly.</p>
      </div>
      <div>
        <div className="flex justify-start mt-6">
          <img src="/images/h3.png" alt="" className="h-20 w-auto"/>
        <div className="flex flex-col justify-center">
          <div className="flex">
            <hr className="h-0.5 w-16 bg-white mt-3"/>
            <button className="bg-white rounded-xl font-semibold [50px] text-[#381860] text-xs  w-36 h-7 font-[Montserrat]  shadow-[0px_4px_11.5px_0px_rgba(0,0,0,0.5)] home-page-text-shadow">Instant QR Code </button>
          </div>
        </div>
    </div>
        <p className="font-[Montserrat] text-white text-[12px] mt-4">Upon successful payment, receive a unique QR code. Flash it at the designated pickup point, and your pre-ordered items are ready for pickup!</p>
      </div>
      </div>
</div>
    </>
    )
}