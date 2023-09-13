import React from "react";

const Benefits = () => {
  return (
    <div className=" w-[90%] mx-auto px-6">
      <div className="md:grid md:grid-cols-2 flex flex-col-reverse md:gap-10 gap-10 mb-32 items-center w-full mt-20">
        <div className="w-full">
          <img src="/benifit1.png" alt="Benefit 1" className="w-auto" />
        </div>
        <div className="w-full">
          <h3 className="md:text-3xl text-lg text-center md:text-start font-bold mb-2">
            We only list trusted and vetted <br /> high-performing agencies that
            <br />
            <span className="text-red-500">founders actually love.</span>
          </h3>

          <p className="md:text-lg text-sm text-center md:text-start mt-6">
            Finding the right agency can be a daunting task, which is why
            we&apos;ve done the hard work for you. Our vetting process ensures
            that we only accept the best agencies with integrity, who have a
            proven track record of success.
          </p>
        </div>
      </div>

      <div className="md:grid md:grid-cols-2 flex flex-col md:gap-20 gap-10 mb-32 items-center w-full">
        <div className="w-full">
          <h3 className="md:text-3xl text-lg text-center md:text-start font-bold mb-2">
            Agencies are endorsed by
            <br />
            real founders and business owners
            <br />
            <span className="text-red-500">you can trust.</span>
          </h3>

          <p className="md:text-lg text-sm text-center md:text-start mt-6">
            You can see what agencies that top brands are working with and how
            many founders or business owners endorsed a particular agency.
          </p>
        </div>
        <div className="w-full flex justify-end">
          <img
            src="/benifit2.png"
            alt="Benefit 2"
            className="md:w-auto w-full md:h-[300px] h-auto"
          />
        </div>
      </div>

      <div className="md:grid md:grid-cols-2 flex flex-col-reverse md:gap-10 gap-10 mb-32 items-center w-full">
        <div className="w-full flex justify-start">
          <img
            src="/benifit3.png"
            alt="Benefit 3"
            className="md:w-auto w-full md:h-[350px] h-auto"
          />
        </div>

        <div className="w-full">
          <h3 className="md:text-3xl text-lg text-center md:text-start font-bold mb-2">
            Message or get on call and talk to
            <br />
            the founders who{" "}
            <span className="text-red-500"> already worked </span>
            <br />
            with those agencies.
          </h3>

          <p className="md:text-lg text-sm text-center md:text-start mt-6">
            After we hop on a quick 15 min call with you, we&apos;ll connect you
            with the best 3 agencies for your brand. Connecting with agencies
            lets you access the founders they already worked with. You learn
            about their experiences and gain valuable insights into the
            agency&apos;s strengths and weaknesses.
          </p>
        </div>
      </div>

      <div className="md:grid md:grid-cols-2 flex flex-col md:gap-20 gap-10 mb-32 items-center w-full">
        <div className="w-full">
          <h3 className="md:text-3xl text-xl text-center md:text-start font-bold mb-2">
            No more useless discovery calls <br /> with tens of agencies, give
            an assignment, and
            <span className="text-red-500"> ask personalized</span>
            <br />
            <span className="text-red-500"> questions </span>
            to pre-vetted
            <br />
            high-performing agencies.
          </h3>

          <p className="md:text-lg text-sm text-center md:text-start mt-6">
            We offer a unique way to ask questions to agencies, be clear what
            are the problems you&apos;re facing, and ask them for a hypothesis
            of the problem. If you love the answers, jump on a call and meet.
          </p>
        </div>
        <div className="w-full flex justify-end">
          <img
            src="/benifit4.png"
            alt="Benefit 4"
            className="md:w-auto w-full md:h-[300px] h-auto"
          />
        </div>
      </div>

      <div className="md:grid md:grid-cols-2 flex flex-col-reverse md:gap-10 gap-10 mb-32 items-center w-full mt-20">
        <div className="w-full flex justify-start">
          <img
            src="/benifit5.png"
            alt="Benefit 5"
            className="md:w-auto w-full md:h-[300px] h-auto"
          />
        </div>
        <div className="w-full">
          <h3 className="md:text-3xl text-lg text-center md:text-start font-bold mb-2">
            Choose <span className="text-red-500"> niche experts </span> by
            looking at a{" "}
            <span className="text-red-500"> detailed portfolio </span> of each
            agency.
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
