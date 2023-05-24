import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="bg-transparent text-black">
      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-0 grid md:grid-cols-2 grid-cols-1">
        <div className="lg:flex items-center flex-wrap">
          <div className="lg:w-[80%]">
            <h1 className="text-[40px] font-extrabold leading-none mb-4">
              We are changing the way you hire
            </h1>
            <p className="text-[50px] uppercase my-5">
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
                  "CRO agencies",
                ]}
                speed={5}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              />
            </p>
            <p className="text-[22px] mb-8">
              Never spend a dollar on the wrong agency ever again!
            </p>
            <div className="flex flex-col lg:flex-row">
              <input
                type="email"
                placeholder="Email"
                className="rounded-l-lg px-4 py-2 w-full lg:w-64 mr-1 mb-4 lg:mb-0 text-gray-900"
              />
              <button className="bg-[#ace3fb] py-1 px-4 rounded-xl rounded-l-none">
                Sign up it's Free!
              </button>
            </div>
          </div>
        </div>
        <div>
          <img src="/hero-banner.png" alt="hero-banner" className="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
