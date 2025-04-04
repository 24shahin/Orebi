import React from "react";
import Image from "./Image";
import Badge from "./Badge";
import { TiHeartFullOutline } from "react-icons/ti";
import { RiLoopRightFill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Product({
  badgeLink,
  link,
  badgrTittle,
  overlay,
  brandName,
  brandColor,
  style,
}) {
  return (
    <div className={style}>
      <div className="group  relative overflow-y-hidden">
        <Image link={link} />
        <Badge badgeTittle={badgrTittle} badge={badgeLink} />
        {overlay && (
          <div className="absolute bottom-0 left-[-100%] w-full bg-white px-4 py-3 duration-500 group-hover:left-0 md:h-40 lg:p-[30px]">
            <Link
              to="#"
              className="flex items-center justify-end gap-x-1 md:gap-x-4"
            >
              <p className="font-regular text-xs text-t2color lg:text-base">
                Add to Wish List
              </p>
              <TiHeartFullOutline className={" text-base text-tcolor"} />
            </Link>
            <Link
              to="#"
              className="my-2 flex items-center justify-end gap-x-1 md:gap-x-4 lg:my-5"
            >
              <p className="font-regular text-xs text-t2color lg:text-base">
                Compare
              </p>
              <RiLoopRightFill className={" text-base text-tcolor"} />
            </Link>
            <Link
              to="#"
              className="flex items-center justify-end gap-x-1 md:gap-x-4"
            >
              <p className="font-regular text-xs font-bold text-tcolor lg:text-base">
                Add to Cart
              </p>
              <FaShoppingCart className={" text-base text-tcolor"} />
            </Link>
          </div>
        )}
      </div>
      <h3 className="mb-2 mt-6 flex items-center justify-between font-bold text-tcolor sm:text-base lg:mb-4 lg:text-xl">
        Basic Crew Neck Tee{" "}
        <span className="text-xs text-t2color lg:text-base">$44.00</span>
      </h3>
      {brandColor && (
        <p className="font-regular text-base text-t2color">{brandName}</p>
      )}
    </div>
  );
}

export default Product;
