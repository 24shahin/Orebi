import React from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";

function Breadcumb() {
  return (
    <div className="my-7 lg:my-28">
      <div>
        <h2 className="text-3xl font-bold capitalize text-tcolor lg:text-5xl">
          {window.location.pathname.split("/")}
        </h2>
      </div>
      <p className="mt-2 flex items-center gap-x-1.5 text-xs text-t2color lg:mt-3 lg:gap-x-2">
        <Link to="/">Home</Link>
        <FaAngleRight /> {window.location.pathname.split("/")}
      </p>
    </div>
  );
}

export default Breadcumb;
