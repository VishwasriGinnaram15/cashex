import React from "react"
import { useState } from 'react';
import "@fontsource/montserrat";
import "@fontsource/montserrat/200.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import Image from "next/image"
import Link from "next/link";
import Footer from "./api/footer";
import Navbar from "../components/navbar";
export default function Contact(){
    const [message, setMessage] = useState('');
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        const scriptURL = 'https://script.google.com/macros/s/AKfycbyvLN0j26jiMB2FAiS1FNzazZUkaGkAxSRHv13lQOx65kEIci4ydC0Wn1wEQ9F8WaL8/exec';
        const form = e.target;
        const formData = new FormData(form);

        try {
            const response = await fetch(scriptURL, { method: 'POST', body: formData });
            if (response.ok) {
                setMessage('Message sent successfully');
                form.reset();
                setTimeout(() => {
                    setMessage('');
                }, 5000);
            } else {
                throw new Error('Network response was not ok');
            }
        } catch (error) {
            console.error('Error!', error.message);
            setMessage('Error sending message');
        }
    };

    return(
        <>
        <Navbar />
            <div>
                <h1 className="contact-us-heading font-semibold xl:text-5xl lg:text-4xl md:text-3xl text-md lg:py-40 md:py-32 py-20">WE WOULD LOVE TO HEAR FROM YOU!</h1>
            </div>
        <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
            <div className="hidden md:block">
                <div className="contact-us-input-container flex flex-col pt-16 pb-8"> 
                    <div>
                        <select name="Selected" className="contact-us-input-box lg:text-[16px] md:text-[14px] h-12 w-3/5 flex items-center p-2 mt-20">
                            <option selected>I need help with my order</option>
                            <option>I need to raise a complaint on a merchant</option>
                            <option>I found incorrect information in app/website</option>
                            <option>I would like to give feedback/suggestions</option>
                            <option>Others</option>
                        </select>
                        <input name="Name" type="text" required placeholder="Full Name" className="contact-us-input-box p-4 contact h-12 w-3/5"/>
                        <input name="Email" type="email" required placeholder="Email Address" className="contact-us-input-box p-4 contact h-12 w-3/5"/>
                        <input name="Number" type="tel" required placeholder="Mobile Number" className="contact-us-input-box p-4 contact h-12 w-3/5"/>
                        <textarea name="Text" type="text" rows="8" placeholder="Type Text" className="contact-us-input-box p-4  contact h-40 w-3/5"></textarea>
                        <div>
                            <button type="submit" className="feedback-button h-14 w-56">Send Feedback</button>
                        </div>
                        {message && <p className="msg font-semibold mt-3">{message}</p>}
                    </div>
                    <div className="py-8">
                        <div className="flex gap-x-14">
                            <div>
                                <div className="text-white text-lg font-semibold">Designed by</div>
                                <div className="text-white text-md">shivaveerappagari@gmail.com</div>
                                <div className="text-white text-md">shivanivishwakarma0610@gmail.com</div>
                            </div>
                            <div>
                                <div className="text-white text-lg font-semibold">Developed by</div>
                                <div className="text-white text-md">vishnubhupathiamudha@gmail.com</div>
                                <div className="text-white text-md">ganeshgokani555@gmail.com</div>
                                <div className="text-white text-md">ginnaramvishwasri@gmail.com</div>
                                <div className="text-white text-md">harshithabharadi7104@gmail.com</div>
                                <div className="text-white text-md">kadarikoushik2005@gmail.com</div>
                                <div className="text-white text-md">allemanoj9@gmail.com</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
            <div className="md:hidden xs:block bg-[#381860] rounded-2xl flex flex-col px-8 mx-4 mb-20 shadow-contact">
                    <select name="Selected" className="bg-white border-solid text-[12px] border-1 border-[564444] items-center p-1 mt-16 rounded-lg flex justify-between h-8 w-11/12 shadow-[0px_5px_5px_0px_rgba(0,0,0,0.849)]">
                        <option selected>I need help with my order</option>
                        <option>I need to raise a complaint on a merchant</option>
                        <option>I found incorrect information in app/website</option>
                        <option>I would like to give feedback/suggestions</option>
                        <option>Others</option>
                    </select>
                <div>
                    <input name="Name" type="text" placeholder="Full Name" required className="bg-white text-[12px] border-solid border-1 border-[#564444] contact placeholder:text-[14px] rounded-lg h-8 w-11/12 mt-4 p-2 shadow-[0px_5px_5px_0px_rgba(0,0,0,0.849)]"/>
                    <input name="Email" type="email" placeholder="Email Address" required className="bg-white text-[12px] border-solid border-1 border-[#564444] contact placeholder:text-[14px] rounded-lg h-8 w-11/12 mt-4 p-2 shadow-[0px_5px_5px_0px_rgba(0,0,0,0.849)]"/>
                    <input name="Number" type="tel" placeholder="Mobile Number" required className="bg-white text-[12px] border-solid border-1 border-[#564444] contact placeholder:text-[14px] rounded-lg h-8 w-11/12 mt-4 p-2 shadow-[0px_5px_5px_0px_rgba(0,0,0,0.849)]"/>
                    <textarea name="Text" type="text" placeholder="Type Text" className="bg-white text-[12px] border-solid border-1 border-[#564444]  contact placeholder:text-[14px] rounded-lg h-24 w-11/12 mt-4 p-2 shadow-[0px_5px_5px_0px_rgba(0,0,0,0.849)]"></textarea>
                    <button type="submit" className="bg-white border-solid border-1 border-[564444] rounded-lg h-8 w-36 font-mont text-[#000] text-[12px] mt-4 p-2 mb-4 shadow-[0px_5px_5px_0px_rgba(0,0,0,0.849)]">Send Feedback</button>
                    {message && <p className="text-[#ffffff] font-semibold text-sm mb-5">{message}</p>}
                </div>
                <div className="py-4">
                        <div className="flex flex-col gap-y-3">
                            <div>
                                <div className="text-white text-sm font-semibold">Designed by</div>
                                <div className="text-white text-xs">shivaveerappagari@gmail.com</div>
                                <div className="text-white text-xs">shivanivishwakarma0610@gmail.com</div>
                            </div>
                            <div>
                                <div className="text-white text-sm font-semibold">Developed by</div>
                                <div className="text-white text-xs">vishnubhupathiamudha@gmail.com</div>
                                <div className="text-white text-xs">ganeshgokani555@gmail.com</div>
                                <div className="text-white text-xs">ginnaramvishwasri@gmail.com</div>
                                <div className="text-white text-xs">harshithabharadi7104@gmail.com</div>
                                <div className="text-white text-xs">kadarikoushik2005@gmail.com</div>
                                <div className="text-white text-xs">allemanoj9@gmail.com</div>
                            </div>
                        </div>
                    </div>
            </div>
        </form>
            <div>
                <img src="/images/contact-1.png" alt="" className="contact-us-help-person xl:h-96 w-auto lg:h-80 md:h-64 md:mt-[170px] mt-[100px] h-36"/>
            </div>
            <Footer />   
        </>
    )
}