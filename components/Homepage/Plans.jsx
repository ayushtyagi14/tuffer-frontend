import React, { useState } from "react";

const Plans = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (e) => {
    setFirstName(e.target.value);
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleJoinWaitlist = () => {
    // Perform action on joining the waitlist, e.g., submit the name and email
    console.log("Name:", firstName);
    console.log("Email:", email);
    // Reset the input fields
    setFirstName("");
    setLastName("");
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
        <div className="flex flex-col mt-4">
          <div className="flex flex-col items-center mb-8">
            <div className="flex md:flex-row flex-col items-center w-full mb-4">
              <div className="flex flex-col items-start w-full">
                <label htmlFor="firstName" className="font-bold mb-1">
                  First Name:
                </label>
                <input
                  type="text"
                  value={firstName}
                  onChange={handleNameChange}
                  className="px-4 py-2 border w-full border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ace3fb] focus:border-transparent"
                />
              </div>
              <div className="flex flex-col items-start w-full ml-2 mt-4 md:mt-0">
                <label htmlFor="lastName" className="font-bold mb-1">
                  Last Name:
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={handleNameChange}
                  className="px-4 py-2 border w-full border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ace3fb] focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex flex-col items-start w-full">
              <label htmlFor="lastName" className="font-bold mb-1">
                Work Email:
              </label>
              <input
                type="email"
                placeholder="name@company.com"
                value={email}
                onChange={handleEmailChange}
                className="px-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ace3fb] focus:border-transparent"
              />
            </div>
          </div>
          <button
            onClick={handleJoinWaitlist}
            className="px-6 py-2 mt-2 rounded-lg bg-[#cc0049] text-white text-lg font-medium focus:outline-none"
          >
            Request Early Access
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plans;
