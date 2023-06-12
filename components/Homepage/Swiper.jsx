import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

const SwiperComponent = ({ images, reverse, horizontal }) => {
  const autoplayDelay = 10; // Autoplay delay in milliseconds
  const slideTransitionDuration = 1500; // Slide transition duration in milliseconds

  return (
    <>
      {horizontal ? (
        <div>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
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
                  className="h-72 w-72 rounded-lg shadow-lg mt-20"
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
            slidesPerView={1.7}
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
                  className={`h-72 w-72 rounded-lg shadow-lg my-28 ${
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
