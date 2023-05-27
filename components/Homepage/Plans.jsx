import React, { useState } from "react";

const Plans = () => {
  const [agency, setAgency] = useState(true);
  const [brands, setBrands] = useState(false);
  const [email, setEmail] = useState("");

  const handleAgencyClick = () => {
    setAgency(true);
    setBrands(false);
  };

  const handleBrandsClick = () => {
    setAgency(false);
    setBrands(true);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleJoinWaitlist = () => {
    // Perform action on joining the waitlist, e.g., submit the email
    console.log("Email:", email);
    // Reset the email input field
    setEmail("");
  };

  return (
    <div className="text-center mb-40 flex flex-col items-center mx-5">
      <h1 className="md:text-[44px] text-[28px] font-extrabold">
        Join The Waitlist To Get Early Access
      </h1>
      <p className="text-gray-700 mb-4">
        Sign up now to be the first to know when we launch!
      </p>

      <div className="flex flex-row bg-gradient-to-r from-[#ffeded] via-[#fff1f1] to-[#e6f8ff] p-1 rounded-lg my-10">
        <button
          onClick={handleAgencyClick}
          className={`px-[32px] py-[12px] focus:outline-none rounded-lg text-[18px] hover:text-gray-500 ${
            agency ? "bg-[#ace3fb]" : "bg-white"
          }`}
        >
          For Agencies
        </button>
        <button
          onClick={handleBrandsClick}
          className={`px-[32px] py-[12px] focus:outline-none rounded-lg text-[18px] hover:text-gray-500 ${
            brands ? "bg-[#ace3fb]" : "bg-white"
          }`}
        >
          For Brands
        </button>
      </div>

      {brands && (
        <div>
          <p className="text-lg text-gray-700 mt-4">
            Enter your email below to join the waitlist:
          </p>
          <div className="flex flex-row mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              className="px-4 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ace3fb] focus:border-transparent"
            />
            <button
              onClick={handleJoinWaitlist}
              className="px-6 md:py-2 ml-1 rounded-lg bg-[#ace3fb] text-white text-lg font-medium focus:outline-none hover:bg-[#7fc9ea]"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      )}
      {agency && (
        <div>
          <p className="text-lg text-gray-700 mt-4">
            Enter your email below to join the waitlist:
          </p>
          <div className="flex flex-row mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              className="px-4 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ace3fb] focus:border-transparent"
            />
            <button
              onClick={handleJoinWaitlist}
              className="px-6 md:py-2 ml-1 rounded-lg bg-[#ace3fb] text-white text-lg font-medium focus:outline-none hover:bg-[#7fc9ea]"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Plans;
