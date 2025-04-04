import React from "react";
import Listitmem from "./Listitmem";
import List from "./List";
import { Link } from "react-router-dom";

function ShopByPrice() {
  return (
    <List>
      <Listitmem style={"border-b border-[#F0F0F0]"}>
        <Link
          to="#"
          className={
            "flex items-center gap-x-2.5 py-2 text-xs font-normal text-t2color sm:text-base lg:py-5"
          }
        >
          $0.00 - $9.99
        </Link>
      </Listitmem>
      <Listitmem style={"border-b border-[#F0F0F0]"}>
        <Link
          to="#"
          className={
            "flex items-center gap-x-2.5 py-2 text-xs font-normal text-t2color sm:text-base lg:py-5"
          }
        >
          $10.00 - $19.99
        </Link>
      </Listitmem>
      <Listitmem style={"border-b border-[#F0F0F0]"}>
        <Link
          to="#"
          className={
            "flex items-center gap-x-2.5 py-2 text-xs font-normal text-t2color sm:text-base lg:py-5"
          }
        >
          $20.00 - $29.99
        </Link>
      </Listitmem>
      <Listitmem style={"border-b border-[#F0F0F0]"}>
        <Link
          to="#"
          className={
            "flex items-center gap-x-2.5 py-2 text-xs font-normal text-t2color sm:text-base lg:py-5"
          }
        >
          $30.00 - $39.99
        </Link>
      </Listitmem>
      <Listitmem style={"border-b border-[#F0F0F0]"}>
        <Link
          to="#"
          className={
            "flex items-center gap-x-2.5 py-2 text-xs font-normal text-t2color sm:text-base lg:py-5"
          }
        >
          $40.00 - $69.99
        </Link>
      </Listitmem>
    </List>
  );
}

export default ShopByPrice;
