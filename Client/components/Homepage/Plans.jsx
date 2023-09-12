import React, { useState } from "react";

const Plans = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedType, setSelectedType] = useState("brand");

  const handleNameChange = (e) => {
    const { name, value } = e.target;
    if (name === "firstName") {
      setFirstName(value);
    } else if (name === "lastName") {
      setLastName(value);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  const handleJoinWaitlist = () => {
    // Perform action on joining the waitlist, e.g., submit the name, email, and type
    console.log("Name:", firstName, lastName);
    console.log("Email:", email);
    console.log("Selected Type:", selectedType);
    // Reset the input fields
    setFirstName("");
    setLastName("");
    setEmail("");
    setSelectedType("brand");
  };

  return (
    <div id="waitlist">
      <div className="text-center mb-40 flex flex-col items-center mx-5">
        <h1 className="md:text-4xl text-2xl font-extrabold">
          Ready to find the <span className="text-red-500"> best agency </span>{" "}
          for your brand?
        </h1>
        <p className="text-gray-700 mb-4 lg:w-[50%] mx-auto mt-3">
          We talk to{" "}
          <span className="text-red-500"> hundreds of founders </span> to find
          out{" "}
          <span className="text-red-500">
            {" "}
            which agency they work with, trust, and rely on.{" "}
          </span>{" "}
          And, we list only them. Doesn&apos;t matter if your monthly budget is
          $10K, $100K, or $500K, you&apos;ll find the best match for yourself.
        </p>
        <div>
          <p className="text-[20px] text-gray-700 mt-4 font-bold">
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
                    name="firstName"
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
                    name="lastName"
                    value={lastName}
                    onChange={handleNameChange}
                    className="px-4 py-2 border w-full border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ace3fb] focus:border-transparent"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start w-full mb-4">
                <label htmlFor="selectedType" className="font-bold mb-1">
                  Type:
                </label>
                <select
                  name="selectedType"
                  value={selectedType}
                  onChange={handleTypeChange}
                  className="px-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ace3fb] focus:border-transparent"
                >
                  <option value="brand">Brand</option>
                  <option value="agency">Agency</option>
                </select>
              </div>
              <div className="flex flex-col items-start mt-2 w-full">
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
    </div>
  );
};

export default Plans;
