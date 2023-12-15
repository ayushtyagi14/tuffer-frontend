import React, { useState } from "react";
import { toast } from "react-toastify";

const Plans = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const [loading, setLoading] = useState(false);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  const handleJoinWaitlist = (e) => {
    e.preventDefault();

    setLoading(true);

    const data = {
      FirstName: firstName,
      LastName: lastName,
      email: email,
      type: selectedType,
    };

    fetch("https://tuffer.co/api/early-access", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        setLoading(false);
        if (response.status === 201) {
          toast.success(`Thank you for joining the waitlist!`, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1500,
          });
          setFirstName("");
          setLastName("");
          setEmail("");
          setSelectedType("");
        } else {
          toast.error(`Error: ${response.statusText}`, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1500,
          });
        }
      })
      .catch((error) => {
        toast.error(`Error: ${error.message}`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        });
      });
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
          <form onSubmit={handleJoinWaitlist}>
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
                      onChange={handleFirstNameChange}
                      className="px-4 py-2 border w-full border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ace3fb] focus:border-transparent"
                      required
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
                      onChange={handleLastNameChange}
                      className="px-4 py-2 border w-full border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ace3fb] focus:border-transparent"
                      required
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
                    required
                  >
                    <option value="">Select an option</option>
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
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="px-6 py-2 mt-2 rounded-lg bg-[#cc0049] text-white text-lg font-medium focus:outline-none"
              >
                {loading ? (
                  <span>Loading...</span>
                ) : (
                  <span>Request Early Access</span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Plans;
