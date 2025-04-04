import React from "react";
import Listitmem from "./Listitmem";
import List from "./List";
import { Link } from "react-router-dom";

function ShopByBrand() {
  return (
    <List>
      <Listitmem style={"border-b border-[#F0F0F0]"}>
        <Link
          to="#"
          className={
            "flex items-center gap-x-2.5 py-2 text-xs font-normal text-t2color sm:text-base lg:py-5"
          }
        >
          Brand 1
        </Link>
      </Listitmem>
      <Listitmem style={"border-b border-[#F0F0F0]"}>
        <Link
          to="#"
          className={
            "flex items-center gap-x-2.5 py-2 text-xs font-normal text-t2color sm:text-base lg:py-5"
          }
        >
          Brand 2
        </Link>
      </Listitmem>
      <Listitmem style={"border-b border-[#F0F0F0]"}>
        <Link
          to="#"
          className={
            "flex items-center gap-x-2.5 py-2 text-xs font-normal text-t2color sm:text-base lg:py-5"
          }
        >
          Brand 3
        </Link>
      </Listitmem>
      <Listitmem style={"border-b border-[#F0F0F0]"}>
        <Link
          to="#"
          className={
            "flex items-center gap-x-2.5 py-2 text-xs font-normal text-t2color sm:text-base lg:py-5"
          }
        >
          Brand 4
        </Link>
      </Listitmem>
      <Listitmem style={"border-b border-[#F0F0F0]"}>
        <Link
          to="#"
          className={
            "flex items-center gap-x-2.5 py-2 text-xs font-normal text-t2color sm:text-base lg:py-5"
          }
        >
          Brand 5
        </Link>
      </Listitmem>
    </List>
  );
}

export default ShopByBrand;
