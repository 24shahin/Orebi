import React from "react";
import Container from "../Component/Layout/Container";
import Breadcumb from "../Component/Layout/Breadcumb";
import { Link } from "react-router-dom";
import Headings from "../Component/Layout/Headings";

function CheckOut() {
  return (
    <Container>
      <Breadcumb />
      <div>
        <h3 className="text-base text-t2color md:mb-20 lg:mb-[120px]">
          Have a coupon?{" "}
          <Link to={"#"} className="text-tcolor">
            Click here to enter your code
          </Link>
        </h3>
        <div className="mt-7 lg:mt-[57px]">
          <Headings tittle={"Billing Details"} />
          <div className="flex flex-col gap-x-10 gap-y-6 md:flex-row">
            <div className="w-full lg:w-auto">
              <div className="flex w-full flex-col md:mb-6  lg:w-[508px]">
                <label
                  htmlFor=""
                  className="text-base font-bold text-tcolor md:md:mb-2.5"
                >
                  First Name *
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full border-b border-bordercolor py-4 text-sm text-t2color outline-none"
                />
              </div>
            </div>
            <div className="w-full ">
              <div className="mb-6 flex w-full flex-col  lg:w-[508px]">
                <label
                  htmlFor=""
                  className="text-base font-bold text-tcolor md:mb-2.5"
                >
                  Last Name *
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full border-b border-bordercolor py-4 text-sm text-t2color outline-none"
                />
              </div>
            </div>
          </div>
          <div className="mb-6 flex w-full flex-col ">
            <label
              htmlFor=""
              className="text-base font-bold text-tcolor md:mb-2.5"
            >
              Companye Name (optional)
            </label>
            <input
              type="text"
              placeholder="Companye Name"
              className="w-full border-b border-bordercolor py-4 text-sm text-t2color outline-none"
            />
          </div>

          <div className="mb-6 flex w-full flex-col">
            <label
              htmlFor=""
              className="text-base font-bold text-tcolor md:mb-2.5"
            >
              Country *
            </label>
            <select className="bg-transparent text-sm text-t2color">
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
          <div className="mb-6 flex w-full flex-col ">
            <label
              htmlFor=""
              className="text-base font-bold text-tcolor md:mb-2.5"
            >
              Street Address *
            </label>
            <input
              type="text"
              placeholder="House number and street name"
              className="w-full border-b border-bordercolor py-4 text-sm text-t2color outline-none"
            />
            <input
              type="text"
              placeholder="Apartment, suite, unit etc. (optional)"
              className="w-full border-b border-bordercolor py-4 text-sm text-t2color outline-none"
            />
          </div>
          <div className="mb-6 flex w-full flex-col ">
            <label
              htmlFor=""
              className="text-base font-bold text-tcolor md:mb-2.5"
            >
              Town/City *
            </label>
            <input
              type="text"
              placeholder="Town/City"
              className="w-full border-b border-bordercolor py-4 text-sm text-t2color outline-none"
            />
          </div>
          <div className="mb-6 flex w-full flex-col  ">
            <label
              htmlFor=""
              className="text-base font-bold text-tcolor md:mb-2.5"
            >
              Post Code *
            </label>
            <input
              type="text"
              placeholder="Post Code"
              className="w-full border-b border-bordercolor py-4 text-sm text-t2color outline-none"
            />
          </div>
          <div className="mb-6 flex w-full flex-col  ">
            <label
              htmlFor=""
              className="text-base font-bold text-tcolor md:mb-2.5"
            >
              Phone *
            </label>
            <input
              type="text"
              placeholder="Phone"
              className="w-full border-b border-bordercolor py-4 text-sm text-t2color outline-none"
            />
          </div>
          <div className="mb-6 flex w-full flex-col  ">
            <label
              htmlFor=""
              className="text-base font-bold text-tcolor md:mb-2.5"
            >
              Email Address *
            </label>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border-b border-bordercolor py-4 text-sm text-t2color outline-none"
            />
          </div>
        </div>
        <div className="my-16 lg:my-[130px]">
          <Headings tittle={"Additional Information"} />
          <div className="mb-6 flex w-full flex-col  ">
            <label
              htmlFor=""
              className="text-base font-bold text-tcolor md:mb-2.5"
            >
              Other Notes (optional)
            </label>
            <input
              type="text"
              placeholder="Notes about your order, e.g. special notes for delivery."
              className="w-full border-b border-bordercolor py-4 text-sm text-t2color outline-none"
            />
          </div>
        </div>
        <div className="mb-[60px]">
          <Headings tittle={"Your Order"} />
          <div className="mt-8 w-full sm:w-[400px] lg:mt-[54px] lg:w-[646px] ">
            <div className="mb-[30px]">
              <div className="flex w-full items-center border border-bordercolor">
                <p className="w-1/2 border-r border-bordercolor px-5 py-3 text-base font-bold text-tcolor">
                  Product
                </p>
                <p className="w-1/2 px-5 py-3 text-base text-t2color">Total</p>
              </div>
              <div className="flex w-full items-center border-b border-l border-r border-bordercolor">
                <p className="w-1/2 border-r border-bordercolor px-5 py-3 text-base font-bold text-tcolor">
                  Product name x 1
                </p>
                <p className="w-1/2 px-5 py-3 text-base text-t2color">
                  389.99 $
                </p>
              </div>
              <div className="flex w-full items-center border-b border-l border-r border-bordercolor">
                <p className="w-1/2 border-r border-bordercolor px-5 py-3 text-base font-bold text-tcolor">
                  Subtotal
                </p>
                <p className="w-1/2 px-5 py-3 text-base text-tcolor">
                  389.99 $
                </p>
              </div>
              <div className="flex w-full items-center border-b border-l border-r border-bordercolor">
                <p className="w-1/2 border-r border-bordercolor px-5 py-3 text-base font-bold text-tcolor">
                  Total
                </p>
                <p className="w-1/2 px-5 py-3 text-base text-tcolor">
                  389.99 $
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-bordercolor px-3 py-6 md:px-8">
          <div className="relative flex gap-x-3 pb-[104px]">
            <input type="radio" name="bank" className="" id="bank1" />
            <label htmlFor="bank1" className="text-base font-bold text-tcolor">
              Bank
            </label>
            <div className="translate absolute left-0 top-12 bg-[#F7F8F9] px-6 py-4 after:absolute after:-top-3 after:left-10 after:h-6 after:w-6 after:rotate-45 after:bg-[#F7F8F9] after:content-['']">
              <p className="text-sm text-[#979797]">
                Pay via Bank; you can pay with your credit card if you don’t
                have a Bank account.
              </p>
            </div>
          </div>
          <div className="flex gap-x-3">
            <input type="radio" name="bank" className="" id="bank2" />
            <label htmlFor="bank2" className="text-base font-bold text-tcolor">
              Bank 2
            </label>
          </div>
          <h3 className="mb-6 mt-4 text-base text-t2color">
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our <span className="text-tcolor">privacy policy.</span>
          </h3>
          <button className="mb-2 h-9 w-[200px] border border-[#2b2b2b] bg-tcolor font-bold text-white transition-all duration-200 ease-linear hover:bg-white hover:text-tcolor lg:h-[50px]">
            Proceed to Bank
          </button>
        </div>
      </div>
    </Container>
  );
}

export default CheckOut;
