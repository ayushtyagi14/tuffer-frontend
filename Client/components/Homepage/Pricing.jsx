import React from "react";

const Pricing = () => {
  return (
    <div className="my-40 bg-white">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="md:text-[44px] text-2xl font-extrabold text-center mb-10">
          Pricing
        </h2>
        <p className="text-center text-gray-600 text-[18px] md:w-[90%] w-full mx-auto">
          <span className="text-[28px]">
            It&apos;s <span className="text-red-500 text-[30px]">FREE!</span>{" "}
            <br className="md:hidden block" />
            (yes it&apos;s <i>free</i> )
          </span>
          <br />
          <br />
          We charge agencies, not brands. We book{" "}
          <span className="text-red-500"> a quick 15 min call </span> to learn
          more about your brand and needs, and{" "}
          <span className="text-red-500">
            {" "}
            we bring the best 3 agencies for your brand{" "}
          </span>
          .
          <br />
          You don&apos;t need to choose from 75,000 agencies listed on the
          clutch, we&apos;ll bring the best 3 for you—all the pre-vetting on us.
        </p>
      </div>
    </div>
  );
};

export default Pricing;
