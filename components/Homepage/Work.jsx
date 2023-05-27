import React from "react";

const Work = () => {
  return (
    <>
      <div className="flex flex-col md:mx-10 mx-5 items-center text-center mb-40">
        <h1 className="md:text-[50px] text-[26px] font-extrabold">
          How We Work ?
        </h1>
        <p className="md:text-[24px] mt-4">
          Adipisicing elit. Laboriosam Quaerat perspiciatis eius fugiat neque!
        </p>
        <div className="grid md:grid-cols-3 grid-cols-1 mt-14">
          <div className="flex flex-col items-center shadow-lg md:mx-10 my-10 rounded-lg p-5">
            <span className="text-[30px] bg-[#ace3fb] py-4 px-8 rounded-full">
              1
            </span>
            <p className="text-[20px] mt-8">Buy Credits</p>
          </div>
          <div className="flex flex-col items-center shadow-lg md:mx-10 my-10 rounded-lg p-5">
            <span className="text-[30px] bg-[#ace3fb] py-4 px-8 rounded-full">
              2
            </span>
            <p className="text-[20px] mt-8">Ask Questions To Agencies</p>
          </div>
          <div className="flex flex-col items-center shadow-lg md:mx-10 my-10 rounded-lg p-5">
            <span className="text-[30px] bg-[#ace3fb] py-4 px-8 rounded-full">
              3
            </span>
            <p className="text-[20px] mt-8">
              Get Response From Agencies And Schedule Interview{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
