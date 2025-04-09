import React from "react";
import Container from "./Layout/Container";
import Breadcumb from "./Layout/Breadcumb";
import Headings from "./Layout/Headings";
import Flex from "./Layout/Flex";

function Registration() {
  return (
    <Container>
      <Breadcumb />
      <div className="border-b border-bordercolor">
        <h3 className="w-full pb-9 text-base text-t2color md:w-[644px] md:pb-[62px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the.
        </h3>
      </div>
      <div className="mt-9 md:mt-[57px]">
        <Headings tittle={"Your Personal Details"} />
        <div
          className={
            "flex flex-col gap-x-10 gap-y-6 border-b border-bordercolor pb-[70px] md:flex-row "
          }
        >
          <div className="">
            <div className="mb-6 flex w-full flex-col md:w-[508px]">
              <label
                htmlFor=""
                className="mb-2.5 text-base font-bold text-tcolor"
              >
                First Name
              </label>
              <input
                type="text"
                placeholder="First Name"
                className="w-full border-b border-bordercolor py-4 text-sm text-t2color outline-none"
              />
            </div>
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
          </div>
          <div className="">
            <div className="mb-6 flex w-full flex-col md:w-[508px]">
              <label
                htmlFor=""
                className="mb-2.5 text-base font-bold text-tcolor"
              >
                Last Name
              </label>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full border-b border-bordercolor py-4 text-sm text-t2color outline-none"
              />
            </div>
            <div className="flex w-full flex-col md:w-[508px]">
              <label
                htmlFor=""
                className="mb-2.5 text-base font-bold text-tcolor"
              >
                Telephone
              </label>
              <input
                type="text"
                placeholder="Your Phone Number"
                className="w-full border-b border-bordercolor py-4 text-sm text-t2color outline-none"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[57px]">
        <Headings tittle={"New Customer"} />
        <div className="flex flex-col gap-x-10 gap-y-6 border-b border-bordercolor pb-[70px] md:flex-row">
          <div className="">
            <div className="mb-6 flex w-full flex-col md:w-[508px]">
              <label
                htmlFor=""
                className="mb-2.5 text-base font-bold text-tcolor"
              >
                Address 1
              </label>
              <input
                type="text"
                placeholder="4279 Zboncak Port Suite 6212"
                className="w-full border-b border-bordercolor py-4 text-sm text-t2color outline-none"
              />
            </div>
            <div className="mb-6 flex w-full flex-col md:w-[508px]">
              <label
                htmlFor=""
                className="mb-2.5 text-base font-bold text-tcolor"
              >
                City
              </label>
              <input
                type="text"
                placeholder="Your city"
                className="w-full border-b border-bordercolor py-4 text-sm text-t2color outline-none"
              />
            </div>
            <div className="flex w-full flex-col md:w-[508px]">
              <label
                htmlFor=""
                className="mb-2.5 text-base font-bold text-tcolor"
              >
                Country
              </label>
              <select className="w-full text-sm text-t2color">
                <option value="" defaultChecked>
                  Please select
                </option>
                <option value="">U.S.A</option>
                <option value="">U.K</option>
                <option value="">Bangladesh</option>
                <option value="">India</option>
                <option value="">Pakistan</option>
                <option value="">Chain</option>
              </select>
            </div>
          </div>
          <div className="">
            <div className="mb-6 flex w-full flex-col md:w-[508px]">
              <label
                htmlFor=""
                className="mb-2.5 text-base font-bold text-tcolor"
              >
                Address 2
              </label>
              <input
                type="text"
                placeholder="----"
                className="w-full border-b border-bordercolor py-4 text-sm text-t2color outline-none"
              />
            </div>
            <div className="mb-6 flex w-full flex-col md:w-[508px]">
              <label
                htmlFor=""
                className="mb-2.5 text-base font-bold text-tcolor"
              >
                Post Code
              </label>
              <input
                type="text"
                placeholder="05228"
                className="w-full border-b border-bordercolor py-4 text-sm text-t2color outline-none"
              />
            </div>
            <div className="flex w-full flex-col md:w-[508px]">
              <label
                htmlFor=""
                className="mb-2.5 text-base font-bold text-tcolor"
              >
                Region/State
              </label>
              <select className="text-sm text-t2color">
                <option value="" defaultChecked>
                  Please select
                </option>
                <option value="">U.S.A</option>
                <option value="">U.K</option>
                <option value="">Bangladesh</option>
                <option value="">India</option>
                <option value="">Pakistan</option>
                <option value="">Chain</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[57px] pb-9 md:mb-[65px] md:border-b md:border-bordercolor md:pb-[70px]">
        <Headings tittle={"Your Password"} />
        <div
          className={"mb-[30px] flex flex-col gap-x-10 gap-y-10 md:flex-row"}
        >
          <div className="flex w-full flex-col md:w-[508px]">
            <label
              htmlFor=""
              className="mb-2.5 text-base font-bold text-tcolor"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="w-full border-b border-bordercolor py-4 text-sm text-t2color outline-none"
            />
          </div>
          <div className="flex w-full flex-col md:w-[508px]">
            <label
              htmlFor=""
              className="mb-2.5 text-base font-bold text-tcolor"
            >
              Repeat Password
            </label>
            <input
              type="password"
              placeholder="Repeat Password"
              className="w-full border-b border-bordercolor py-4 text-sm text-t2color outline-none"
            />
          </div>
        </div>
      </div>
      <div>
        <Flex style={"gap-x-4"}>
          <input type="checkbox" />
          <h3 className=" text-sm text-t2color">
            I have read and agree to the Privacy Policy
          </h3>
        </Flex>
        <Flex style={" gap-x-5 md:gap-x-9 items-center mt-6 mb-7"}>
          <h3 className=" text-sm text-t2color">Subscribe Newsletter</h3>
          <div className="flex gap-x-3">
            <input type="radio" name="subscribe" className="square-radio" />
            <label htmlFor="" className="text-base font-bold text-tcolor">
              Yes
            </label>
          </div>
          <div className="flex gap-x-3">
            <input type="radio" name="subscribe" className="square-radio" />
            <label htmlFor="" className="text-base font-bold text-tcolor">
              No
            </label>
          </div>
        </Flex>
      </div>
      <button className="h-9 w-32 border border-[#2b2b2b] bg-tcolor font-bold text-white transition-all duration-200 ease-linear hover:bg-white hover:text-tcolor md:h-[50px] md:w-[200px]">
        Sign Up
      </button>
    </Container>
  );
}

export default Registration;
