// // pages/index.js
// import { useState } from 'react';
// import Head from 'next/head';
// import Image from 'next/image';
// import logo from '../public/images/logo.png'; // Import your image file

// export default function Home() {
//     const [isActive, setIsActive] = useState(false);

//     const handleClick = () => {
//         setIsActive(!isActive);
//     };
//     const handleSidebarClose = () => {
//         setIsActive(false);
//     };
//     return (
//         <div>
//             <Head>
//                 <title>My Website</title>
//                 <meta name="description" content="My website description" />
//                 <link rel="icon" href="/favicon.ico" />
//                 <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
//                 <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,800" rel="stylesheet" />
//             </Head>

//             <header>
//                 <nav>
//                     <div className=Name="logo">
//                         <Image src={logo} alt="Cashex Logo" width={210} height={50} />
//                     </div>
//                     <ul className=Name={`gap-x-4 desktop p-3 ${isActive ? 'active' : ''}`}>
//                         <div className=Name="ul-desktop gap-x-5">
//                             <li className=Name="hide active nav-li-a">
//                                 <i className=Name="active-i nav-i"></i>
//                                 <a href="#">Home</a>
//                             </li>
//                             <li className=Name="hide nav-li-a"><a href="#">About Us</a></li>
//                             <li className=Name="hide nav-li-a"><a href="#">Merchants</a></li>
//                             <li className=Name="hide nav-li-a"><a href="#">Download</a></li>
//                             <li className=Name="hide nav-li-a"><a href="#">Contact Us</a></li>
//                         </div>
//                         <svg className=Name="menu" onClick={handleClick} fill="#381860" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="25px" height="25px">
//                             <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"/>
//                         </svg>
//                     </ul>
//                     <ul className=Name={`sidebar ${isActive ? 'active' : ''}`}>
//                         <li onClick={handleClick}><a href="" className=Name="sidebar-li flex justify-center">
//                             <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="26px" height="26px">
//                                 <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"/>
//                             </svg>
//                         </a></li>
//                         <div className=Name="flex justify-center mt-8">
//                             <div className=Name="flex-col text-center">
//                                 <li className=Name="font-medium"><a href="#">HOME</a></li>
//                                 <li><a href="#">ABOUT US</a></li>
//                                 <li><a href="#">MERCHANTS</a></li>
//                                 <li><a href="#">DOWNLOAD</a></li>
//                                 <li><a href="#">CONTACT US</a></li>
//                             </div>
//                         </div>
//                         <div className=Name="flex justify-start">
//                             <div className=Name="bottom flex-col">    
//                                 <ul className=Name="btm ml-4">
//                                     <li><a href="#"> Privacy Policy</a></li>
//                                     <li><a href="#"> Terms and Conditions</a></li>
//                                     <li><a href="#"> Return Refund & Cancellation Policy</a></li>
//                                     <li><a href="#"> Product / Service Purchase Flow</a></li>
//                                 </ul>
//                                 <div className=Name="icons ml-2">
//                                     {/* Your SVG icons */}
//                                 </div>
//                             </div>
//                         </div>
//                     </ul>
//                     {/* <script>
//                     function showSidebar()
//                 {
//                     const sidebar = document.querySelector('.sidebar')
//                     sidebar.style.display='flex'
//                 }

//                     function hideBar()
//                     {
//                         const sidebar = document.querySelector('.sidebar')
//                         sidebar.style.display='none'
//                     }
//                     </script> */}
//                 </nav>
//             </header>
//         </div>
//     );
// }
