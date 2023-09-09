import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const handleScrollToWaitlist = () => {
    const waitlistSection = document.getElementById("waitlist");
    waitlistSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="flex flex-row items-center justify-between bg-transparent text-black md:p-4 p-2 z-[999]">
      <div className="flex items-center">
        <Link href="/">
          <Image src={"/logo.png"} width={150} height={150} alt="Tuffer Logo" />
        </Link>
      </div>
      <button
        onClick={handleScrollToWaitlist}
        className="md:mx-3 mx-1 bg-[#cc0049] text-white md:px-3 px-2 py-2 md:text-[16px] text-[14px] rounded-xl"
      >
        Request Early Access!
      </button>
    </nav>
  );
};

export default Navbar;
