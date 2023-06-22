import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

const SwiperComponent = ({ images, reverse, horizontal, homepage }) => {
  const autoplayDelay = 10; // Autoplay delay in milliseconds
  const slideTransitionDuration = 1500; // Slide transition duration in milliseconds

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
    <>
      {horizontal ? (
        <div>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={mobile ? (homepage ? 2 : 1) : homepage ? 4 : 1}
            autoplay={{
              delay: autoplayDelay,
              disableOnInteraction: false, // Enable autoplay even when the user interacts with slides
            }}
            speed={slideTransitionDuration}
            loop={true}
            centeredSlides={false}
            className="mySwiper"
          >
            {images.map((item, index) => (
              <SwiperSlide key={index}>
                <img
                  src={item}
                  alt={`Image ${index}`}
                  className={`rounded-lg shadow-lg ${
                    homepage ? "h-[500px] w-max mb-20" : "h-72 w-72 mt-20"
                  }`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className={`${reverse ? "swiper-container" : ""}`}>
          <Swiper
            modules={[Autoplay]}
            direction="vertical"
            spaceBetween={50}
            slidesPerView={2}
            autoplay={{
              delay: autoplayDelay,
              disableOnInteraction: false, // Enable autoplay even when the user interacts with slides
            }}
            speed={slideTransitionDuration}
            loop={true}
            centeredSlides={false}
            className="mySwiper h-[90vh]"
          >
            {images.map((item, index) => (
              <SwiperSlide key={index}>
                <img
                  src={item}
                  alt={`Image ${index}`}
                  className={`h-60 w-72 rounded-lg shadow-lg my-28 ${
                    reverse ? "rotate-180" : ""
                  }`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
};

export default SwiperComponent;
