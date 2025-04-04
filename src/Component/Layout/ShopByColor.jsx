import React from "react";
import Listitmem from "./Listitmem";
import List from "./List";
import { Link } from "react-router-dom";

function ShopByColor() {
  return (
    <List>
      <Listitmem style={"border-b border-[#F0F0F0]"}>
        <Link
          to={"#"}
          className={
            "flex items-center gap-x-2.5 py-2 text-xs font-normal text-t2color sm:text-base lg:py-5"
          }
        >
          <span className="h-3 w-3 rounded-full bg-black"></span> color 1
        </Link>
      </Listitmem>
      <Listitmem style={"border-b border-[#F0F0F0]"}>
        <Link
          to={"#"}
          className={
            "flex items-center gap-x-2.5 py-2 text-xs font-normal text-t2color sm:text-base lg:py-5"
          }
        >
          <span className="h-3 w-3 rounded-full bg-[#FF8686]"></span> color 2
        </Link>
      </Listitmem>
      <Listitmem style={"border-b border-[#F0F0F0]"}>
        <Link
          to={"#"}
          className={
            "flex items-center gap-x-2.5 py-2 text-xs font-normal text-t2color sm:text-base lg:py-5"
          }
        >
          <span className="h-3 w-3 rounded-full bg-[#7ED321]"></span> color 3
        </Link>
      </Listitmem>
      <Listitmem style={"border-b border-[#F0F0F0]"}>
        <Link
          to={"#"}
          className={
            "flex items-center gap-x-2.5 py-2 text-xs font-normal text-t2color sm:text-base lg:py-5"
          }
        >
          <span className="h-3 w-3 rounded-full bg-[#B6B6B6]"></span> color 4
        </Link>
      </Listitmem>
      <Listitmem style={"border-b border-[#F0F0F0]"}>
        <Link
          to={"#"}
          className={
            "flex items-center gap-x-2.5 py-2 text-xs font-normal text-t2color sm:text-base lg:py-5"
          }
        >
          <span className="h-3 w-3 rounded-full bg-[#15CBA5]"></span> color 5
        </Link>
      </Listitmem>
    </List>
  );
}

export default ShopByColor;
