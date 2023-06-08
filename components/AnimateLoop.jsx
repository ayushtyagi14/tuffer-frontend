import React from "react";

const AnimatedImageLoop = ({ images, reverse }) => {
  const animationClass = reverse ? "animate-slide-reverse" : "animate-slide";

  return (
    <div className="flex flex-col overflow-hidden h-full">
      {images.map((imageUrl, index) => (
        <img
          key={index}
          src={imageUrl}
          alt={`Image ${index}`}
          className={`h-full w-60 mx-10 my-8 border shadow-lg shadow-purple-500 transform -translate-y-full ease-linear scroll-smooth ${animationClass}`}
        />
      ))}
    </div>
  );
};

export default AnimatedImageLoop;
