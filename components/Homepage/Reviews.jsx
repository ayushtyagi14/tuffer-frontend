import React from "react";

const Reviews = () => {
  return (
    <div className="flex flex-row md:w-[90%] mx-auto justify-between mb-40">
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <div className="flex flex-col items-center text-center md:w-[70%] mx-auto bg-white px-4 py-10 rounded-lg">
        <p className="md:text-[24px] text-[18px]">
          &quot; I can still remember standing in the kitchen in March 2020 and
          watching the first $1.00 I made come through, from sharing my own
          research. A year later and it's now my full-time&apos;job&apos; &quot;
        </p>
        <h1 className="md:text-[18px] mt-4"> - Conor Mac, Investor Talk</h1>
      </div>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default Reviews;
