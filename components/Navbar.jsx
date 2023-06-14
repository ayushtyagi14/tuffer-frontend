import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <>
      <nav className="flex flex-row items-center justify-between bg-transparent text-black md:p-4 p-2 z-[999]">
        <div className="flex items-center">
          <Link href="/">
            <span className="text-[30px] font-semibold mr-4 uppercase">
              Tuffer
            </span>
          </Link>
        </div>
        <div className="flex-row items-center">
          <button className="md:mx-3 mx-1">Sign In</button>
          <button
            onClick={() => router.push("#waitlist")}
            className="md:mx-3 mx-1 bg-[#cc0049] text-white md:px-3 px-2 py-2 md:text-[16px] text-[14px] rounded-xl"
          >
            Get Started
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
