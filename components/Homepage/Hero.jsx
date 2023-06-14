import React from "react";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";
import SwiperComponent from "./Swiper";
import { useRouter } from "next/router";

const Hero = () => {
  const router = useRouter();

  const images = [
    "/creatives/creative1.jpeg",
    "/creatives/creative2.jpeg",
    "/creatives/creative3.jpeg",
    "/creatives/creative10.jpeg",
    "/creatives/creative13.jpeg",
  ];
  const images2 = [
    "/creatives/creative4.jpeg",
    "/creatives/creative5.jpeg",
    "/creatives/creative6.jpeg",
    "/creatives/creative11.jpeg",
    "/creatives/creative14.jpeg",
  ];
  const images3 = [
    "/creatives/creative7.jpeg",
    "/creatives/creative8.jpeg",
    "/creatives/creative9.jpeg",
    "/creatives/creative12.jpeg",
    "/creatives/creative15.jpeg",
  ];

  const imagesAll = [
    "/creatives/creative1.jpeg",
    "/creatives/creative6.jpeg",
    "/creatives/creative3.jpeg",
    "/creatives/creative2.jpeg",
    "/creatives/creative4.jpeg",
    "/creatives/creative5.jpeg",
  ];

  return (
    <section className="bg-transparent text-[#001b38] mb-0">
      <div className="pt-20 flex md:flex-row flex-col justify-between w-[90%] mx-auto">
        <div className="md:w-[75%] w-full mt-16 flex flex-col md:items-start items-center">
          <h1 className="md:text-[40px] text-[32px] md:px-0 font-extrabold md:text-start text-center leading-tight md:mb-8 mb-2">
            We Are Changing <br className="md:block hidden" /> The Way You Hire
          </h1>
          <div className="md:text-4xl text-2xl my-4 leading-none md:text-start text-center">
            <span style={{ whiteSpace: "nowrap" }}>
              <TypeAnimation
                sequence={[
                  "Performance Marketing",
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
          <p className="md:text-[22px] w-full md:w-[80%] md:mx-0 mx-auto md:text-start text-center md:mt-8">
            Never Spend A Dollar On The{" "}
            <span className="text-red-500"> Wrong Agency </span> Ever Again!
          </p>
          <button
            onClick={() => router.push("#waitlist")}
            className="bg-[#cc0049] text-white py-2 px-4 rounded-lg mt-4"
          >
            Request Early Access!
          </button>
          <div className="flex flex-row items-center mt-4 w-[95%]">
            <div className="flex flex-row items-center">
              <img
                src="/person1.jpg"
                alt="person1"
                className="h-6 w-6 rounded-full"
              />
              <img
                src="/person2.jpg"
                alt="person2"
                className="h-6 w-6 rounded-full ml-[-10px]"
              />
              <img
                src="/person3.jpg"
                alt="person3"
                className="h-6 w-6 rounded-full ml-[-10px]"
              />
              <img
                src="/person4.jpg"
                alt="person4"
                className="h-6 w-6 rounded-full ml-[-10px]"
              />
            </div>
            <p className="md:text-[16px] text-[14px] ml-2">
              20+ Founders Have Already Joined!
            </p>
          </div>
        </div>
        <div className="md:grid md:grid-cols-3 md:gap-8 hidden">
          <div className="w-full h-[600px] md:h-[90vh] mx-auto">
            <SwiperComponent images={images} />
          </div>
          <div className="w-full h-[600px] md:h-[90vh] mx-auto">
            <SwiperComponent images={images2} reverse />
          </div>
          <div className="w-full h-[600px] md:h-[90vh] mx-auto">
            <SwiperComponent images={images3} />
          </div>
        </div>
        <div className="md:hidden block">
          <SwiperComponent images={imagesAll} horizontal />
        </div>
      </div>
    </section>
  );
};

export default Hero;
