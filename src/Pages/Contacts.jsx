import React from "react";
import Container from "../Component/Layout/Container";
import Breadcumb from "../Component/Layout/Breadcumb";
import Headings from "../Component/Layout/Headings";
import Location from "../Component/Layout/Location";

function Contacts() {
  return (
    <Container>
      <Breadcumb />
      <Headings tittle={"Fill up a Form"} />
      <div className="mb-[140px]">
        <div className="mb-6 flex flex-col">
          <label htmlFor="" className="text-bold mb-4 text-base">
            Name
          </label>
          <input
            type="text"
            placeholder="Your name here"
            className="text-bold w-[780px] border-b border-[#F0F0F0] py-[17px] text-sm text-t2color outline-none"
          />
        </div>
        <div className="mb-6 flex flex-col">
          <label htmlFor="" className="text-bold mb-4 text-base">
            Email
          </label>
          <input
            type="text"
            placeholder="Your email here"
            className="text-bold w-[780px] border-b border-[#F0F0F0] py-[17px] text-sm text-t2color outline-none"
          />
        </div>
        <div className="mb-6 flex flex-col">
          <label htmlFor="" className="text-bold mb-4 text-base">
            Message
          </label>
          <textarea
            type="text"
            placeholder="Your message here"
            className="text-bold w-[780px] border-b border-[#F0F0F0] py-[17px] text-sm text-t2color outline-none"
          />
        </div>
        <button className="bg-tcolor px-[84px] py-4 text-sm font-bold text-white">
          Post
        </button>
      </div>
      <div
        className="w-full p-20"
        style={{ background: `url(../../public/assets/images/Location.png)` }}
      >
        <Location
          address={"575 Crescent Ave. Quakertown, PA 18951"}
          mobile={"+432 533 12 523"}
          email={"info@domain.com"}
          time={"Mon - Fri: 9am - 6pm"}
        />
      </div>
    </Container>
  );
}

export default Contacts;
