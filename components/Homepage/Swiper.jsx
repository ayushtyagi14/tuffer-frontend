import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

const SwiperComponent = () => {
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

  const images = [
    "/creatives/creative1.jpeg",
    "/creatives/creative2.jpeg",
    "/creatives/creative3.jpeg",
    "/creatives/creative4.jpeg",
    "/creatives/creative5.jpeg",
    "/creatives/creative6.jpeg",
  ];
  const autoplayDelay = 100; // Autoplay delay in milliseconds
  const slideTransitionDuration = 1000; // Slide transition duration in milliseconds

  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={mobile ? 1 : 3}
      autoplay={{
        delay: autoplayDelay,
        disableOnInteraction: false, // Enable autoplay even when user interacts with slides
      }}
      speed={slideTransitionDuration}
      loop={true}
      centeredSlides={true}
      className="mySwiper w-[96%] mx-auto mt-0"
    >
      {images.map((item, index) => (
        <SwiperSlide key={index}>
          <img
            src={item}
            alt={`Image ${index}`}
            className="h-72 w-72 rounded shadow-xl shadow-purple-500 mb-10"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
