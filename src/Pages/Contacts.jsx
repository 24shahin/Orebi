import React, { useRef, useState } from "react";
import Container from "../Component/Layout/Container";
import Breadcumb from "../Component/Layout/Breadcumb";
import Headings from "../Component/Layout/Headings";
import Location from "../Component/Layout/Location";
import OutSideClick from "../feature/function/click";
import LocationImage from "../../public/assets/images/Location.png";

function Contacts() {
  const [slovakiaOfficeShow, setSlovakiaOfficeShow] = useState(false);
  const [germanyOfficeShow, setGermanyOfficeShow] = useState(false);
  const slovakiaRef = useRef(null);
  const germanyRef = useRef(null);
  OutSideClick(slovakiaRef, () => setSlovakiaOfficeShow(false));
  OutSideClick(germanyRef, () => setGermanyOfficeShow(false));
  return (
    <Container>
      <Breadcumb />
      <Headings tittle={"Fill up a Form"} />
      <div className="mb-24 md:mb-[140px]">
        <div className="mb-6 flex flex-col">
          <label htmlFor="" className="text-bold text-base md:mb-4">
            Name
          </label>
          <input
            type="text"
            placeholder="Your name here"
            className="text-bold w-full border-b border-[#F0F0F0] py-[17px] text-sm text-t2color outline-none md:w-[780px]"
          />
        </div>
        <div className="mb-6 flex flex-col">
          <label htmlFor="" className="text-bold  text-base md:mb-4">
            Email
          </label>
          <input
            type="text"
            placeholder="Your email here"
            className="text-bold w-full border-b border-[#F0F0F0] py-[17px] text-sm text-t2color outline-none md:w-[780px]"
          />
        </div>
        <div className="mb-6 flex flex-col">
          <label htmlFor="" className="text-bold  text-base md:mb-4">
            Message
          </label>
          <textarea
            type="text"
            placeholder="Your message here"
            className="text-bold w-full resize-none border-b border-[#F0F0F0] py-[17px] text-sm text-t2color outline-none md:w-[780px]"
          />
        </div>
        <button className="h-9 w-32 border border-[#2b2b2b] bg-tcolor font-bold text-white transition-all duration-200 ease-linear hover:bg-white hover:text-tcolor md:h-[50px] md:w-[200px]">
          Post
        </button>
      </div>
      <div
        className="w-full p-10 md:p-20"
        style={{ background: `url(${LocationImage})` }}
      >
        <div className="w-[250px] bg-white md:w-[450px] ">
          <div className="border-b border-[#f0f0f0]">
            <h3
              className="flex cursor-pointer items-center justify-between px-4 py-3  text-base font-bold text-tcolor md:px-5 md:py-[30px]"
              onClick={() => setGermanyOfficeShow(true)}
            >
              Germany Office <span>+</span>
            </h3>
            {germanyOfficeShow && (
              <div ref={germanyRef}>
                <Location
                  address={"575 Crescent Ave. Quakertown, PA 18951"}
                  mobile={"+432 533 12 523"}
                  email={"info@domain.com"}
                  time={"Mon - Fri: 9am - 6pm"}
                />
              </div>
            )}
          </div>
          <div className="border-b border-[#f0f0f0]">
            <h3
              className="flex cursor-pointer items-center justify-between px-4 py-3  text-base font-bold text-tcolor md:px-5 md:py-[30px]"
              onClick={() => setSlovakiaOfficeShow(true)}
            >
              Slovakia Office <span>+</span>
            </h3>
            {slovakiaOfficeShow && (
              <div ref={slovakiaRef}>
                <Location
                  address={"575 Crescent Ave. Quakertown, PA 18951"}
                  mobile={"+432 533 12 523"}
                  email={"info@domain.com"}
                  time={"Mon - Fri: 9am - 6pm"}
                />
              </div>
            )}
          </div>

          <h3 className="fflex cursor-pointer items-center justify-between px-4 py-3  text-base font-bold text-tcolor md:px-5 md:py-[30px]">
            Lithuania Office
          </h3>
          <Location
            address={"575 Crescent Ave. Quakertown, PA 18951"}
            mobile={"+432 533 12 523"}
            email={"info@domain.com"}
            time={"Mon - Fri: 9am - 6pm"}
          />
        </div>
      </div>
    </Container>
  );
}

export default Contacts;
