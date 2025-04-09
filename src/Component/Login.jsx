import React from "react";
import Container from "./Layout/Container";
import Breadcumb from "./Layout/Breadcumb";
import Headings from "./Layout/Headings";
import Flex from "./Layout/Flex";

function Login() {
  return (
    <Container>
      <Breadcumb />
      <div className="mb-9 border-b border-bordercolor md:mb-[57px]">
        <h3 className="w-full pb-9 text-base text-t2color md:w-[644px] md:pb-[62px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the.
        </h3>
      </div>
      <div className="border-b border-bordercolor pb-[70px]">
        <Headings tittle={"Returning Customer"} />
        <div className={"mb-[30px] flex flex-col gap-x-10 gap-y-7 md:flex-row"}>
          <div className="flex w-full flex-col md:w-[508px]">
            <label
              htmlFor=""
              className="mb-2.5 text-base font-bold text-tcolor"
            >
              Email Address
            </label>
            <input
              type="Email"
              placeholder="example@Gmail.com"
              className="w-full border-b border-bordercolor py-4 text-sm text-t2color outline-none"
            />
          </div>
          <div className="flex w-full flex-col md:w-[508px]">
            <label
              htmlFor=""
              className="mb-2.5 text-base font-bold text-tcolor"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="******"
              className="w-full border-b border-bordercolor py-4 text-sm text-t2color outline-none"
            />
          </div>
        </div>
        <button className="boder h-9 w-32 border border-[#2b2b2b] bg-white font-bold transition-all duration-200 ease-linear hover:bg-tcolor hover:text-white md:h-[50px] md:w-[200px]">
          Log in
        </button>
      </div>
      <div className="mt-9 md:mt-[58px]">
        <Headings tittle={"New Customer"} />
        <div className="mt-9">
          <h3 className="w-full pb-9 text-base text-t2color md:w-[644px] md:pb-[62px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </h3>
          <button className="h-9 w-32 border border-[#2b2b2b] bg-tcolor font-bold text-white transition-all duration-200 ease-linear hover:bg-white hover:text-tcolor md:h-[50px] md:w-[200px]">
            Continue
          </button>
        </div>
      </div>
    </Container>
  );
}

export default Login;
