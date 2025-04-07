import React from "react";
import Container from "./Layout/Container";
import Breadcumb from "./Layout/Breadcumb";
import Headings from "./Layout/Headings";
import Flex from "./Layout/Flex";

function Login() {
  return (
    <Container>
      <Breadcumb />
      <div className="border-bordercolor mb-[57px] border-b">
        <h3 className="w-[644px] pb-[62px] text-base text-t2color">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the.
        </h3>
      </div>
      <div className="border-bordercolor border-b pb-[70px]">
        <Headings tittle={"Returning Customer"} />
        <Flex style={"gap-x-10 mb-[30px]"}>
          <div className="flex w-[508px] flex-col">
            <label
              htmlFor=""
              className="mb-2.5 text-base font-bold text-tcolor"
            >
              Email Address
            </label>
            <input
              type="Email"
              placeholder="example@Gmail.com"
              className="border-bordercolor w-full border-b py-4 text-sm text-t2color outline-none"
            />
          </div>
          <div className="flex w-[508px] flex-col">
            <label
              htmlFor=""
              className="mb-2.5 text-base font-bold text-tcolor"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="******"
              className="border-bordercolor w-full border-b py-4 text-sm text-t2color outline-none"
            />
          </div>
        </Flex>
        <button className="boder h-[50px] w-[200px] border border-[#2b2b2b] bg-white font-bold transition-all duration-200 ease-linear hover:bg-tcolor hover:text-white">
          Log in
        </button>
      </div>
      <div className="mt-[58px]">
        <Headings tittle={"New Customer"} />
        <div className="mt-9">
          <h3 className="w-[644px] pb-[62px] text-base text-t2color">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </h3>
          <button className="boder h-[50px] w-[200px] border border-[#2b2b2b] bg-tcolor font-bold text-white transition-all duration-200 ease-linear hover:bg-white hover:text-tcolor">
            Continue
          </button>
        </div>
      </div>
    </Container>
  );
}

export default Login;
