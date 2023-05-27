import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav
        className={`flex flex-row items-center justify-between bg-transparent text-black md:p-4 p-2 z-[999] ${
          isMenuOpen ? "bg-white" : "bg-transparent"
        }`}
      >
        <div className="flex items-center">
          <Link href="/">
            <span className="text-[30px] font-semibold mr-4 uppercase">
              Tuffer
            </span>
          </Link>
        </div>
        <div className="md:hidden block">
          <img
            src="https://img.icons8.com/ios-glyphs/26/000000/null/menu-rounded.png"
            onClick={handleMenuToggle}
          />
        </div>
        <div className="flex-grow md:flex md:items-center md:w-auto md:ml-16 hidden">
          <ul className="flex flex-col md:flex-row md:space-x-6">
            <li>
              <Link href="/">
                <span className="hover:text-gray-300">Product</span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span className="hover:text-gray-300">Solution</span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span className="hover:text-gray-300">Pricing</span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span className="hover:text-gray-300">Resources</span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span className="hover:text-gray-300">Contact Us</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:flex hidden flex-row items-center">
          <button className="md:mx-3 mx-1">Sign In</button>
          <button className="md:mx-3 mx-1 bg-[#ace3fb] md:px-3 px-2 py-2 md:text-[16px] text-[14px] rounded-xl">
            Get Started
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="h-max flex flex-col md:px-10 px-5 text-black bg-white pb-4">
          <ul className="flex flex-col">
            <li>
              <Link href="/">
                <span className="hover:text-gray-300">Product</span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span className="hover:text-gray-300">Solution</span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span className="hover:text-gray-300">Pricing</span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span className="hover:text-gray-300">Resources</span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span className="hover:text-gray-300">Contact Us</span>
              </Link>
            </li>
            <li>
              <div className="flex flex-row items-center justify-around w-full mt-3">
                <button className="">Sign In</button>
                <button className="md:mx-3 mx-1 bg-[#ace3fb] md:px-3 px-2 py-2 md:text-[16px] text-[14px] rounded-xl">
                  Get Started
                </button>
              </div>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
