"use client";
import Link from "next/link";
import { useState } from "react";

const NavbarNew = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="relative bg-primary w-full text-white text-base p-3">
      {/* <!-- Flex Container For All Items --> */}
      <div className="flex items-center justify-between">
        {/* BRAND LOGO */}
        <p>BS</p>

        {/* DESKTOP - LINKS */}
        <div className="hidden space-x-8 font-bold md:flex">
          <Link href="#" className="text-grayishViolet hover:text-veryDarkViolet">
            Home
          </Link>

          <Link href="#work" className="text-grayishViolet hover:text-veryDarkViolet">
            Work Projects
          </Link>

          <Link href="#personal" className="text-grayishViolet hover:text-veryDarkViolet">
            Personal Projects
          </Link>

          <Link href="#about" className="text-grayishViolet hover:text-veryDarkViolet">
            About
          </Link>

          <Link href="#contact" className="text-grayishViolet hover:text-veryDarkViolet">
            Contact
          </Link>

          <Link href="./files/Bartosz_Swierzynski.pdf" className="text-grayishViolet hover:text-veryDarkViolet">
            Resume
          </Link>
          {/* </div> */}
        </div>

        {/* HAMBURGER - MENU BUTTON */}
        <button
          id="menu-btn"
          type="button"
          className="block hamburger md:hidden focus:outline-none"
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* MOBILE - MENU */}
      <div id="menu" className={`${toggleMenu ? "" : "hidden"} absolute p-6 rounded-lg bg-primary left-0 right-0 top-10 z-40`}>
        <div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
          <Link href="#" className="w-full text-center">
            Home
          </Link>
          <Link href="#work" className="w-full text-center">
            Work Projects
          </Link>
          <Link href="#personal" className="w-full text-center">
            Personal Projects
          </Link>
          <Link href="#about" className="w-full pt-6 border-t border-gray-400 text-center">
            About
          </Link>
          <Link href="#contact" className="w-full py-3 text-center rounded-full bg-cyan">
            Contact
          </Link>
          <Link href="./files/Bartosz_Swierzynski.pdf" className="text-grayishViolet hover:text-veryDarkViolet" target="_blank">
            Resume2
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarNew;

// const NavbarNew = () => {
//   const [toggleMenu, setToggleMenu] = useState(false);

//   return (
//     // <div className="bg-primary">
//     <nav className="fixed flex items-center justify-between font-bold text-white p-2 bg-primary z-[9999] w-full">
//       {/* <img src="images/logo.svg" alt="" /> */}
//       <p>BS</p>
//       {/* <!-- DESKTOP MENU --> */}
//       <div className="hidden md:flex md:space-x-8 p-2">
//         {/* <div className={`hidden md:flex md:space-x-8 p-2 ${toggleMenu && "flex-col justify-center"} b`}> */}
//         <div className="group">
//           <a href="#">About</a>
//           <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
//         </div>
//         <div className="group">
//           <a href="#">Careers</a>
//           <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
//         </div>
//         <div className="group">
//           <a href="#">Events</a>
//           <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
//         </div>
//         <div className="group">
//           <a href="#">Products</a>
//           <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
//         </div>
//         <div className="group">
//           <a href="#">Support</a>
//           <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
//         </div>
//       </div>
//       {/* <!-- @TODO Hamburger Button -we dont want this shown on medium screens so we hide it/ z-40 is z-index of 40 so it ALWAYS STAYS AT THE TOP --> */}
//       <div className="md:hidden">
//         <button
//           id="menu-btn"
//           type="button"
//           className={`z-40 block hamburger focus:outline-none`}
//           onClick={() => setToggleMenu(!toggleMenu)}
//         >
//           <span className={`${toggleMenu ? "open" : ""}hamburger-top`}></span>
//           <span className={`${toggleMenu ? "open" : ""}hamburger-middle`}></span>
//           <span className={`${toggleMenu ? "open" : ""}hamburger-bottom`}></span>
//           {/* <span className="hamburger-middle"></span>
//             <span className="hamburger-bottom"></span> */}
//         </button>
//       </div>

//       {/* MOBILE MENU */}
//       <div
//         id="menu"
//         className="fixed inset-0 z-20 flex flex-col items-center self-end w-full h-full m-h-screen px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase divide-y divide-gray-500 opacity-90 bg-veryDarkBlue"
//       >
//         <div className="w-full py-3 text-center">
//           <a href="#features" className="block hover:text-softRed">
//             Features
//           </a>
//           <a href="#download" className="block hover:text-softRed">
//             Download
//           </a>
//           <a href="#faq" className="block hover:text-softRed">
//             FAQ
//           </a>
//           <a href="#" className="block hover:text-softRed">
//             Login
//           </a>
//         </div>
//       </div>
//     </nav>
//     // </div>
//   );
// };

// export default NavbarNew;
