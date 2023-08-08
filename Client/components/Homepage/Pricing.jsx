import React from "react";

const Pricing = () => {
  return (
    <div className="my-40">
      <div className="max-w-5xl mx-auto px-6 py-20 border-red-500 rounded-xl shadow-md">
        <h2 className="md:text-[44px] text-2xl font-extrabold uppercase text-center mb-10">
          Pricing
        </h2>
        <p className="text-center text-gray-600 text-[18px]">
          <span className="text-[28px]">
            It&apos;s <span className="text-red-500">FREE!</span>
          </span>
          <br />
          <br />
          We charge agencies, not brands. We find the best agencies and book a
          quick 15 min call with you to know more about your brand and needs,
          and we bring the best 3 options for you.
          <br />
          You don&apos;t need to choose from 75,000 agencies listed on the clutch,
          we&apos;ll bring the best 3 for you. All the work of vetting on us.
        </p>
      </div>
    </div>
  );
};

export default Pricing;
