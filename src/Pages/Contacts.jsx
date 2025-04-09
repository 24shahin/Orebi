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
        <button className="bg-tcolor px-[84px] py-4 text-sm font-bold text-white">
          Post
        </button>
      </div>
      <div
        className="w-full p-20"
        style={{ background: `url(${LocationImage})` }}
      >
        <div className="w-[450px] bg-white ">
          <div className="border-b border-[#f0f0f0]">
            <h3
              className="flex cursor-pointer items-center justify-between  px-5 py-[30px] text-base font-bold text-tcolor"
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
              className="flex cursor-pointer items-center justify-between  px-5 py-[30px] text-base font-bold text-tcolor"
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

          <h3 className="flex cursor-pointer items-center justify-between px-5 py-[30px] text-base font-bold text-tcolor">
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
