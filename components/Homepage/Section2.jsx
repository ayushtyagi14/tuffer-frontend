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
        <p className="md:text-[50px] text-[30px] uppercase whitespace-nowrap">
          Finding a great agency is more difficult than ever - but with Tuffer,
          it&apos;s not.
        </p>
      </animated.div>
    </div>
  );
};

export default Section2;
