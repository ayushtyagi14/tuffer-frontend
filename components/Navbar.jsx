import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="flex flex-row items-center justify-between bg-transparent text-black p-4">
        <div className="md:hidden block">
          <img
            src="https://img.icons8.com/ios-glyphs/26/000000/null/menu-rounded.png"
            onClick={handleMenuToggle}
          />
        </div>
        <div className="flex items-center">
          <Link href="/">
            <span className="text-[30px] font-semibold mr-4 uppercase">
              Tuffer
            </span>
          </Link>
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
        <div className="flex items-center">
          <button className="mx-3">Sign In</button>
          <button className="mx-3 bg-[#ace3fb] px-3 py-2 rounded-xl">
            Get Started
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="h-max flex flex-col md:px-10 px-5 text-black">
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
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
