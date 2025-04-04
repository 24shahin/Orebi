import React, { useState } from "react";
import { Link } from "react-router-dom";
import List from "./List";
import Listitmem from "./Listitmem";
import { FaPlus } from "react-icons/fa6";

function ShortMenu({ ByClick, tittle }) {
  const [Drop, SetDrop] = useState(ByClick);
  const [menuShow, SetMenuShow] = useState(true);
  return (
    <div className="relative">
      {Drop ? (
        <h3
          className="flex cursor-pointer items-center justify-between border-b border-[#F0F0F0] py-2 text-xs font-normal  text-t2color sm:text-base lg:py-5"
          onClick={() => SetMenuShow(!menuShow)}
        >
          {tittle} <FaPlus className="text-xs sm:text-base" />
        </h3>
      ) : (
        <Link
          className="block cursor-pointer border-b border-[#F0F0F0] py-2 text-xs font-normal text-t2color sm:text-base lg:py-5"
          to="#"
        >
          {tittle}
        </Link>
      )}

      {Drop && !menuShow && (
        <List
          style={
            "absolute top-full bg-[#fbfbfb] w-[80%] md:w-[60%] right-0 z-10"
          }
        >
          <Listitmem
            style={"hover:bg-[#e8e8e8] duration-500 sm:px-5 sm:py-3 px-3 py-1"}
          >
            <Link to="#"> sub cata</Link>
          </Listitmem>
          <Listitmem
            style={"hover:bg-[#e8e8e8] duration-500 sm:px-5 sm:py-3 px-3 py-1"}
          >
            <Link to="#"> sub cata</Link>
          </Listitmem>
          <Listitmem
            style={"hover:bg-[#e8e8e8] duration-500 sm:px-5 sm:py-3 px-3 py-1"}
          >
            <Link to="#"> sub cata</Link>
          </Listitmem>
          <Listitmem
            style={"hover:bg-[#e8e8e8] duration-500 sm:px-5 sm:py-3 px-3 py-1"}
          >
            <Link to="#"> sub cata</Link>
          </Listitmem>
        </List>
      )}
    </div>
  );
}

export default ShortMenu;
