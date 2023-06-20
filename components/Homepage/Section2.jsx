import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

const Section2 = () => {
  const [key, setKey] = useState(1);
  const [mobile, setMobile] = useState(false);

  const scrolling = useSpring({
    from: { transform: "translate(100%,0)" },
    to: { transform: mobile ? "translate(-300%,0)" : "translate(-150%,0)" },
    config: { duration: 12000 },
    reset: true,
    loop: true,
    onRest: () => {
      setKey(key + 1);
    },
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 758) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };

    handleResize(); // Check initial width

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        key={key}
        className="bg-[#ace3fb] my-20 mt-0 max-h-min overflow-hidden"
      >
        <animated.div
          style={{
            ...scrolling,
            justifyContent: mobile ? "center" : "flex-start",
          }}
          className="w-full"
        >
          <div className="flex flex-row items-center justify-between md:w-full w-max py-2">
            <div className="flex flex-row items-center ml-4 md:ml-0">
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios-filled/50/meta.png"
                alt="meta"
              />
              <h1 className="text-[20px] ml-5 font-bold">Meta</h1>
            </div>
            <div className="flex flex-row items-center ml-4 md:ml-0">
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios-filled/50/youtube-play.png"
                alt="youtube-play"
              />
              <h1 className="text-[20px] ml-5 font-bold">YouTube</h1>
            </div>
            <div className="flex flex-row items-center ml-4 md:ml-0">
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios-glyphs/50/tiktok.png"
                alt="tiktok"
              />
              <h1 className="text-[20px] ml-5 font-bold">TikTok</h1>
            </div>
            <div className="flex flex-row items-center ml-4 md:ml-0">
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios-filled/50/google-logo.png"
                alt="google-logo"
              />
              <h1 className="text-[20px] ml-5 font-bold">Google</h1>
            </div>
            <div className="flex flex-row items-center ml-4 md:ml-0">
              <img width="50" height="50" src="/klaviyo.png" alt="klaviyo" />
              <h1 className="text-[20px] ml-5 font-bold">Klaviyo</h1>
            </div>
            <div className="flex flex-row items-center ml-4 md:ml-0">
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios-filled/50/shopify.png"
                alt="shopify"
              />
              <h1 className="text-[20px] ml-5 font-bold">Shopify</h1>
            </div>
            <div className="flex flex-row items-center ml-4 md:ml-0">
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios-filled/50/snapchat--v1.png"
                alt="snapchat--v1"
              />
              <h1 className="text-[20px] ml-5 font-bold">Snapchat</h1>
            </div>
            <div className="flex flex-row items-center ml-4 md:ml-0">
              <img
                width="50"
                height="50"
                src="/unbounce.png"
                alt="unbounce"
              />
              <h1 className="text-[20px] ml-5 font-bold">Unbounce</h1>
            </div>
          </div>
        </animated.div>
      </div>
      <p className="text-center md:text-[34px] text-[15px] px-2 md:px-0 font-bold">
        Finding a great agency is more difficult{" "}
        <span className="text-red-500">than ever</span> <br /> - but with
        Tuffer, it&apos;s <span className="text-red-500">not.</span>
      </p>
    </>
  );
};

export default Section2;
