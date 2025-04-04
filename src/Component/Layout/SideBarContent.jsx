import React, { useState } from "react";
import { GoTriangleDown } from "react-icons/go";
import LeftSideBarItem from "./LeftSideBarItem";

function SideBarContent({ dropDwon, menuTittle }) {
  const [drop, SetDrop] = useState(dropDwon);
  const [show, SetShow] = useState(dropDwon);
  return (
    <div className="mb-14">
      {drop ? (
        <div
          className="mb-9 flex cursor-pointer items-center justify-between"
          onClick={() => SetShow(!show)}
        >
          <h3 className=" text-xl font-bold text-tcolor">{menuTittle}</h3>
          <GoTriangleDown />
        </div>
      ) : (
        <h3 className="mb-9 cursor-pointer text-xl font-bold text-tcolor">
          {menuTittle}
        </h3>
      )}

      {show && (
        <>
          <LeftSideBarItem SubdropDwon={true} tittle={"Catagory"} color={"red"}>
            <p className="cursor-pointer border-b border-[#F0F0F0] py-5 text-base font-normal text-t2color">
              category 1
            </p>
            <p className="cursor-pointer border-b border-[#F0F0F0] py-5 text-base font-normal text-t2color">
              category 2
            </p>
            <p className="cursor-pointer border-b border-[#F0F0F0] py-5 text-base font-normal text-t2color">
              category 3
            </p>
            <p className="cursor-pointer border-b border-[#F0F0F0] py-5 text-base font-normal text-t2color">
              category 4
            </p>
            <p className="cursor-pointer border-b border-[#F0F0F0] py-5 text-base font-normal text-t2color">
              category 5
            </p>
          </LeftSideBarItem>
          <LeftSideBarItem
            SubdropDwon={false}
            tittle={"Catagory"}
            color={"blue"}
          ></LeftSideBarItem>
          <LeftSideBarItem
            SubdropDwon={false}
            tittle={"Catagory"}
            color={"pink"}
          ></LeftSideBarItem>
          <LeftSideBarItem
            SubdropDwon={true}
            tittle={"Catagory"}
            color={"green"}
          >
            <p className="cursor-pointer border-b border-[#F0F0F0] py-5 text-base font-normal text-t2color">
              sub-category 1
            </p>
            <p className="cursor-pointer border-b border-[#F0F0F0] py-5 text-base font-normal text-t2color">
              sub-category 2
            </p>
            <p className="cursor-pointer border-b border-[#F0F0F0] py-5 text-base font-normal text-t2color">
              sub-category 3
            </p>
            <p className="cursor-pointer border-b border-[#F0F0F0] py-5 text-base font-normal text-t2color">
              sub-category 4
            </p>
            <p className="cursor-pointer border-b border-[#F0F0F0] py-5 text-base font-normal text-t2color">
              sub-category 5
            </p>
          </LeftSideBarItem>
        </>
      )}
      {!dropDwon && (
        <>
          <LeftSideBarItem SubdropDwon={true} tittle={"Catagory"} color={"red"}>
            <p className="cursor-pointer border-b border-[#F0F0F0] py-5 text-base font-normal text-t2color">
              sub-category
            </p>
          </LeftSideBarItem>
          <LeftSideBarItem
            SubdropDwon={false}
            tittle={"Catagory"}
            color={"green"}
          />

          <LeftSideBarItem
            SubdropDwon={true}
            tittle={"Catagory"}
            color={"yellow"}
          >
            <p className="cursor-pointer border-b border-[#F0F0F0] py-5 text-base font-normal text-t2color">
              sub-category
            </p>
          </LeftSideBarItem>
          <LeftSideBarItem
            SubdropDwon={false}
            tittle={"Catagory"}
            color={"pink"}
          />
          <LeftSideBarItem
            SubdropDwon={false}
            tittle={"Catagory"}
            color={"blue"}
          />
        </>
      )}
    </div>
  );
}

export default SideBarContent;
