import React, { useState } from "react";

const Plans = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleJoinWaitlist = () => {
    // Perform action on joining the waitlist, e.g., submit the name and email
    console.log("Name:", name);
    console.log("Email:", email);
    // Reset the input fields
    setName("");
    setEmail("");
  };

  return (
    <div
      className="text-center mb-40 flex flex-col items-center mx-5"
      id="waitlist"
    >
      <h1 className="md:text-4xl text-2xl font-extrabold">
        Join The Waitlist To Get Early Access
      </h1>
      <p className="text-gray-700 mb-4">
        Sign up now to be the first to know when we launch!
      </p>
      <div>
        <p className="text-lg text-gray-700 mt-4">
          Enter your name and work email below to join the waitlist:
        </p>
        <div className="flex flex-col md:flex-row mt-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={handleNameChange}
            className="px-4 py-2 md:mr-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ace3fb] focus:border-transparent"
          />
          <input
            type="email"
            placeholder="name@company.com"
            value={email}
            onChange={handleEmailChange}
            className="px-4 py-2 md:mr-2 mt-2 md:mt-0 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ace3fb] focus:border-transparent"
          />
          <button
            onClick={handleJoinWaitlist}
            className="px-6 py-2 mt-2 md:mt-0 rounded-lg bg-[#ace3fb] text-white text-lg font-medium focus:outline-none hover:bg-[#7fc9ea]"
          >
            Request Early Access
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plans;
