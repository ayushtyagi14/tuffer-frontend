import React from "react";

const Benefits = () => {
  return (
    <div className="grid grid-cols-1 gap-10 mt-10 mb-40">
      <div className="flex md:flex-row flex-col-reverse items-center w-[90%] mx-auto md:w-full">
        <div className="md:w-1/2">
          <img src="/benifit1.webp" alt="Benefit 1" className="w-full" />
        </div>
        <div className="md:w-2/3">
          <h3 className="md:text-[36px] text-[18px] text-center md:text-start font-bold mb-2 w-full">
            We Only List Trusted Agencies That
            <br />
            <span className=" text-red-500">
              Founders Actually Love.
              {/* <span
                className="after absolute bg-no-repeat bg-contain"
                style={{
                  backgroundImage:
                    'url("data:image/svg+xml;utf8,<svg width=\\"248\\" height=\\"11\\" viewBox=\\"0 0 248 11\\" fill=\\"none\\" preserveAspectRatio=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"><path d=\\"M0.797333 1.78147C82.9219 1.14873 165.07 0.885894 247.211 0.992974C167.288 1.75227 87.4927 4.7505 8.58902 9.97793\\" stroke=%22%23F224F2%22 stroke-width=%222%22 stroke-linecap=%22square%22 stroke-linejoin=%22round%22/></svg>")',
                  bottom: "-8px",
                  left: "0",
                  width: "100%",
                  height: "13px",
                  backgroundPosition: "bottom",
                }}
              ></span> */}
            </span>
          </h3>

          <p className="md:text-[20px] text-[14px] text-center md:text-start mt-6 md:w-[80%]">
            Finding the right agency can be a daunting task, which is why
            we&apos;ve done the hard work for you. Our vetting process ensures
            that we only list the best agencies with integrity, who have a
            proven track record of success.
          </p>
        </div>
      </div>

      <div className="flex md:flex-row flex-col items-center w-[90%] mx-auto">
        <div className="md:w-2/3">
          <h3 className="md:text-[36px] text-[18px] text-center md:text-start font-bold mb-2 w-full">
            Agencies Are Endorsed By
            <br />
            Real Founders And Business Owners
            <br />
            <span className="text-red-500">You Can Trust.</span>
          </h3>

          <p className="md:text-[20px] text-[14px] text-center md:text-start mt-6 md:w-[70%]">
            You can see what agencies that top brands are working with and how
            many founders or business owners endorsed a particular agency.
          </p>
        </div>
        <div className="md:w-1/3">
          <img src="/benifit2.webp" alt="Benefit 2" className="w-full" />
        </div>
      </div>

      <div className="flex md:flex-row flex-col-reverse items-center w-[90%] mx-auto md:w-full">
        <div className="md:w-[45%]">
          <img src="/benifit3.webp" alt="Benefit 3" className="w-full" />
        </div>

        <div className="md:w-[55%]">
          <h3 className="md:text-[36px] text-[18px] text-center md:text-start font-bold mb-2 w-full">
            Message And Talk To
            <br />
            Founders Who <span className="text-red-500"> Already Worked </span>
            <br />
            With Those Agencies.
          </h3>

          <p className="md:text-[20px] text-[14px] text-center md:text-start mt-6 md:w-[80%]">
            Connecting with these founders lets you learn about their
            experiences and gain valuable insights into the agency&apos;s
            strengths and weaknesses.
          </p>
        </div>
      </div>

      <div className="flex md:flex-row flex-col items-center w-[90%] mx-auto">
        <div className="md:w-2/3">
          <h3 className="md:text-[36px] text-[18px] text-center md:text-start font-bold mb-2 w-full">
            <span className="text-red-500">Ask Personalized Questions</span>
            <br />
            About The Problems You&apos;re Facing
            <br />
            Before Getting On A Call With Agencies.
          </h3>

          <p className="md:text-[20px] text-[14px] text-center md:text-start mt-6 md:w-[80%]">
            We offer a unique way to ask questions to agencies, be clear about
            the problems you&apos;re facing, and ask them for a hypothesis of
            the problem. If the answers resonate with you, jump on a call and
            meet; otherwise, move to the next one. Interview at least 3
            agencies.
          </p>
        </div>
        <div className="md:w-1/3">
          <img src="/benifit4.webp" alt="Benefit 4" className="w-full" />
        </div>
      </div>

      <div className="flex md:flex-row flex-col-reverse items-center w-[90%] mx-auto mt-20">
        <div className="md:w-[45%]">
          <img src="/benifit5.webp" alt="Benefit 5" className="w-full" />
        </div>
        <div className="md:w-[55%]">
          <h3 className="md:text-[36px] text-[18px] text-center md:text-start font-bold mb-2 w-full">
            Choose <span className="text-red-500"> Niche Experts </span> By
            Looking At A{" "}
            <span className="text-red-500"> Detailed Portfolio </span> Of Each
            Agency.
          </h3>

          <p className="md:text-[20px] text-[14px] text-center md:text-start mt-6 md:w-[80%]">
            Don&apos;t get swept up by just case studies; we have a detailed
            portfolio for every niche a particular agency worked with - apparel,
            food, health-wellness, SaaS, etc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
