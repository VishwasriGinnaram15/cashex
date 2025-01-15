import React  from "react"; 
import "@fontsource/montserrat";
import "@fontsource/montserrat/200.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "./api/footer";
export default function Merchant(){
    return(
        <>
        <Navbar />
        <div className="lg:mt-32 mt-24">
   <h1 className="text-2xl md:text-5xl mt-14 text-center bg semi-bold colour-merchant">
        How Our Merchant Panel Works?
    </h1>

    <div className="grid grid-cols-1 gap-y-5 md:grid-cols-2 gap-x-10 md:gap-y-28 lg:gap-y-40 xl:grid-cols-4 p-6">
        <div className="h-max md:h-64 xl:h-72">
            <h1 className="text-3xl md:text-9xl text-[#898989] medium mb-8 text-center">1</h1>
            <div className="border-purple-500  border-4 text-white rounded-xl lg:rounded-3xl p-4 lg:h-full md:h-5/6 bg-merchant">
                <h1 className="text-center semi-bold">RECEIVING THE ORDERS</h1>
                <p className="pt-4 max-w-xs">
                    The esteemed merchant eagerly receives your order through our user-friendly app, ensuring a seamless and efficient experience.
                </p>
            </div>
        </div>

        <div className="h-max md:h-64 xl:h-72">
            <h1 className="text-3xl md:text-9xl text-[#898989] medium mb-8  text-center">2</h1>
            <div className="text-base text-white border-purple-500 border-4  rounded-xl lg:rounded-3xl p-4 lg:h-full md:h-5/6 bg-merchant">
                <h1 className="text-center semi-bold">PREPARING</h1>
                <p className="pt-4 max-w-2">
                    Diligently, the merchant springs into action, meticulously preparing your order with a keen focus on both time efficiency and uncompromising quality.
                </p>
            </div>
        </div>

        <div className="h-max md:h-64 xl:h-72">
            <h1 className="text-3xl md:text-9xl text-[#898989] medium mb-8 text-center">3</h1>
            <div className="text-base text-white border-purple-500 border-4 rounded-xl lg:rounded-3xl p-4 sm:h-2/6 lg:h-full md:h-5/6 bg-merchant">
                <h1 className="text-center semi-bold"> VERIFICATION</h1>
                <p className="pt-4 max-w-2">
                    Upon receiving and preparing your order, we use cutting-edge technology to meticulously scan the QR code for precise verification. This ensures an extra layer of security and accuracy in cross-checking every detail of your transaction.
                </p>
            </div>
        </div>

        <div className="h-max md:h-64 xl:h-72">
            <h1 className="text-3xl md:text-9xl text-[#898989] medium mb-8 text-center">4</h1>
            <div className="text-base border-purple-500 border-4 text-white rounded-xl lg:rounded-3xl p-4 sm:h-2/6 lg:h-full md:h-5/6 bg-merchant">
                <h1 className="text-center semi-bold">TAKE OUT</h1>
                <p className="pt-4 max-w-2">
                    We take pride in presenting your order to you. The culmination of this process signifies not just a transaction but a seamless fusion of technology, efficiency, and dedication to delivering an item that aligns perfectly with your expectations.
                </p>
            </div>
        </div>
    </div>

    <div className="text-center lg:text-2xl semi-bold my-8 md:mt-52 md:mb-20 colour-merchant">YOUR SATISFACTION IS OUR PRIORITY.</div>
</div>
<Footer />       </>
    )
}