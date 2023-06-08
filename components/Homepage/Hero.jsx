import React from "react";
import { TypeAnimation } from "react-type-animation";
import AnimatedImageLoop from "../AnimateLoop";
import { useState, useEffect } from "react";

const Hero = () => {
  const images = ["/Email/email1.png", "/Email/email4.png"];
  const images2 = ["/Email/email3.png", "/Email/email2.png"];

  const [width, setWidth] = useState(null);
  let mobile = false;

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () => {
      window.removeEventListener("resize", () => setWidth(window.innerWidth));
    };
  }, []);

  if (width < 1000) {
    mobile = true;
  } else {
    mobile = false;
  }

  return (
    <section className="bg-transparent text-black mb-0">
      <div className="pt-16 pb-0 px-0 flex flex-col w-full">
        <div
          className={`lg:flex items-center ${
            mobile
              ? "h-max m-10 mx-0 flex-wrap"
              : "h-screen flex-row my-20 mx-8"
          }`}
        >
          <div className={` ${mobile ? "md:w-3/5 mx-auto" : "md:w-1/2"}`}>
            <h1
              className={`${
                mobile ? "md:text-[65px]" : "md:text-[50px]"
              } text-[32px] md:px-0 font-extrabold ${
                mobile ? "text-center" : "text-start"
              } leading-tight mb-8`}
            >
              We Are Changing {!mobile && <br />} The Way You Hire
            </h1>
            <div
              className={`md:text-4xl text-2xl uppercase my-4 leading-none ${
                mobile ? "text-center" : "text-start"
              }`}
            >
              <span style={{ whiteSpace: "nowrap" }}>
                <TypeAnimation
                  sequence={[
                    "Performance marketing",
                    2000,
                    "SEO",
                    2000,
                    "TikTok",
                    2000,
                    "Design",
                    2000,
                    "Branding",
                    2000,
                    "CRO",
                    2000,
                  ]}
                  speed={5}
                  wrapper="span"
                  cursor={false}
                  repeat={Infinity}
                />
              </span>
              <br />
              Agencies
            </div>
            <p
              className={`text-lg w-[75%] md:w-full mx-auto ${
                mobile ? "text-center" : "text-start"
              } my-8`}
            >
              Never Spend A Dollar On The{" "}
              <span className="text-red-500"> Wrong Agency </span> Ever Again!
            </p>
            <div
              className={`flex flex-col lg:flex-row justify-center w-[80%] ${
                mobile ? "mx-auto" : ""
              }`}
            >
              <input
                type="email"
                placeholder="Email"
                className="md:rounded-l-lg rounded-lg md:rounded-none px-4 py-2 md:w-[65%] w-[90%] mx-auto md:mr-1 mb-2 lg:mb-0 text-gray-900"
              />
              <button className="bg-[#ace3fb] py-2 md:py-1 px-4 rounded-lg md:rounded-l-none md:w-[35%] w-[90%] mx-auto">
                Sign up it&apos;s Free!
              </button>
            </div>
            <div className="flex flex-row items-center mt-6 w-[95%] mx-auto">
              <div className="flex flex-row items-center">
                <img
                  src="/person1.jpg"
                  alt="person1"
                  className="h-10 w-10 rounded-full"
                />
                <img
                  src="/person2.jpg"
                  alt="person2"
                  className="h-10 w-10 rounded-full"
                  style={{ marginLeft: "-14px" }}
                />
                <img
                  src="/person3.jpg"
                  alt="person3"
                  className="h-10 w-10 rounded-full"
                  style={{ marginLeft: "-14px" }}
                />
                <img
                  src="/person4.jpg"
                  alt="person4"
                  className="h-10 w-10 rounded-full"
                  style={{ marginLeft: "-14px" }}
                />
              </div>
              <p className="md:text-[20px] text-[14px] ml-2">20+ Founders Have Already Joined!</p>
            </div>
          </div>
          {!mobile && <AnimatedImageLoop images={images} />}
          {!mobile && <AnimatedImageLoop images={images2} reverse />}
        </div>
      </div>
    </section>
  );
};

export default Hero;
