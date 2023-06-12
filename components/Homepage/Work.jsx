import React from "react";

const Work = () => {
  return (
    <>
      <div className="flex flex-col md:mx-10 mx-5 items-center text-center mb-40">
        <h1 className="md:text-4xl text-2xl font-extrabold">
          How Does Tuffer Work?
        </h1>
        <p className="md:text-xl mt-4 md:w-[90%] md:mx-auto">
          We find the best agencies based on the budget of brands and help
          brands to find the right agency and agencies to find the right brand
          based on their niche expertise, so it&apos;s a win-win for both.
        </p>
        <div className="grid md:grid-cols-3 grid-cols-1 mt-14 gap-8">
          <div className="flex flex-col items-center shadow-lg rounded-lg p-5">
            <span className="text-4xl bg-[#ace3fb] py-4 px-8 rounded-full">
              1
            </span>
            <p className="text-2xl mt-8">Buy Credits</p>
            <p className="text-center mt-4">
              Buy credits to give assignments to agencies and ask personalized
              questions.
            </p>
          </div>
          <div className="flex flex-col items-center shadow-lg rounded-lg p-5">
            <span className="text-4xl bg-[#ace3fb] py-4 px-8 rounded-full">
              2
            </span>
            <p className="text-2xl mt-8">Give Assignment To Agencies</p>
            <p className="text-center mt-4">
              Give an assignment and ask personalized questions about the
              problems you&apos;re facing at the moment.
            </p>
          </div>
          <div className="flex flex-col items-center shadow-lg rounded-lg p-5">
            <span className="text-4xl bg-[#ace3fb] py-4 px-8 rounded-full">
              3
            </span>
            <p className="text-2xl mt-8">
              Schedule A Call And Hire The Right Agency
            </p>
            <p className="text-center mt-4">
              Based on the response you get from agencies schedule a call, so
              you don&apos;t waste time with the wrong one, and choose the right one.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
