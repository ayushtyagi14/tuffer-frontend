import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="bg-transparent text-black mb-0">
      <div className="pt-16 pb-0 px-0 flex flex-col w-full">
        <div className="lg:flex items-center flex-wrap justify-center mt-10 my-10">
          <div className="md:w-3/5 mx-auto">
            <h1 className="md:text-[65px] text-[32px] md:px-0 font-extrabold text-center leading-none mb-8">
              We Are Changing The Way You Hire
            </h1>
            <div className="md:text-4xl text-2xl uppercase my-4 leading-none text-center">
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
            <p className="text-lg w-[75%] md:w-full mx-auto text-center my-8">
              Never Spend A Dollar On The{" "}
              <span className="text-red-500"> Wrong Agency </span> Ever Again!
            </p>
            <div className="flex flex-col lg:flex-row justify-center w-[80%] mx-auto">
              <input
                type="email"
                placeholder="Email"
                className="md:rounded-l-lg rounded-lg md:rounded-none px-4 py-2 md:w-[70%] w-[90%] mx-auto md:mr-1 mb-2 lg:mb-0 text-gray-900"
              />
              <button className="bg-[#ace3fb] py-2 md:py-1 px-4 rounded-lg md:rounded-l-none md:w-[30%] w-[90%] mx-auto">
                Sign up it&apos;s Free!
              </button>
            </div>
          </div>
        </div>
        <img src="/hero-image.png" alt="hero image" className="w-full" />
      </div>
    </section>
  );
};

export default Hero;
