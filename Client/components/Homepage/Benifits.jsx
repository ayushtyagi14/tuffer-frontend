import React from "react";

const Benefits = () => {
  return (
    <div className=" w-[90%] mx-auto px-6">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mb-32 items-center w-full mt-20">
        <div className="w-full">
          <img src="/benifit1.png" alt="Benefit 1" className="w-full" />
        </div>
        <div className="w-full">
          <h3 className="md:text-3xl text-xl text-center md:text-start font-bold mb-2">
            We Only List Trusted And Vetted <br /> High-Performing Agencies That
            <br />
            <span className="text-red-500">Founders Actually Love.</span>
          </h3>

          <p className="md:text-lg text-sm text-center md:text-start mt-6">
            Finding the right agency can be a daunting task, which is why
            we&apos;ve done the hard work for you. Our vetting process ensures
            that we only accept the best agencies with integrity, who have a
            proven track record of success.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mb-32 items-center w-full">
        <div className="w-full">
          <h3 className="md:text-3xl text-xl text-center md:text-start font-bold mb-2">
            Agencies Are Endorsed By
            <br />
            Real Founders And Business Owners
            <br />
            <span className="text-red-500">You Can Trust.</span>
          </h3>

          <p className="md:text-lg text-sm text-center md:text-start mt-6">
            You can see what agencies that top brands are working with and how
            many founders or business owners endorsed a particular agency.
          </p>
        </div>
        <div className="w-full">
          <img src="/benifit2.png" alt="Benefit 2" className="w-full" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mb-32 items-center w-full">
        <div className="w-full">
          <img src="/benifit3.png" alt="Benefit 3" className="w-full" />
        </div>

        <div className="w-full">
          <h3 className="md:text-3xl text-xl text-center md:text-start font-bold mb-2">
            Message Or Get On Call And Talk To
            <br />
            The Founders Who{" "}
            <span className="text-red-500"> Already Worked </span>
            <br />
            With Those Agencies.
          </h3>

          <p className="md:text-lg text-sm text-center md:text-start mt-6">
            Connecting with these founders lets you learn about their
            experiences and gain valuable insights into the agency&apos;s
            strengths and weaknesses.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mb-32 items-center w-full">
        <div className="w-full">
          <h3 className="md:text-3xl text-xl text-center md:text-start font-bold mb-2">
            No More Useless Discovery Calls <br /> With Tens Of Agencies, Give
            An Assignment, And
            <span className="text-red-500"> Ask Personalized</span>
            <br />
            <span className="text-red-500"> Questions </span>
            To Pre-Vetted
            <br />
            High-Performing Agencies.
          </h3>

          <p className="md:text-lg text-sm text-center md:text-start mt-6">
            We offer a unique way to ask questions to agencies, be clear what
            are the problems you&apos;re facing, and ask them for a hypothesis
            of the problem. If you love the answers, jump on a call and meet.
          </p>
        </div>
        <div className="w-full">
          <img src="/benifit4.png" alt="Benefit 4" className="w-full" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mb-32 items-center w-full mt-20">
        <div className="w-full">
          <img src="/benifit5.png" alt="Benefit 5" className="w-full" />
        </div>
        <div className="w-full">
          <h3 className="md:text-3xl text-xl text-center md:text-start font-bold mb-2">
            Choose <span className="text-red-500"> Niche Experts </span> By
            Looking At A{" "}
            <span className="text-red-500"> Detailed Portfolio </span> Of Each
            Agency.
          </h3>

          <p className="md:text-lg text-sm text-center md:text-start mt-6">
            Don&apos;t get swept up by just case studies, big logos, and awards,
            we have a detailed portfolio for every niche a particular agency
            worked with, and have expertise - apparel, beauty, food, SAAS, etc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
