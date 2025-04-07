import React from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";

function formatPathname(path) {
  if (!path) return "";
  // Remove slashes and get the last part of the path
  const parts = path.split("/").filter(Boolean);
  const last = parts[parts.length - 1] || "";

  // Add space before any uppercase letter (if needed) and fix lowercase words
  const formatted = last
    .replace(/([A-Z])/g, " $1") // add space before capital letters
    .toLowerCase()
    .replace(/^\w/, (c) => c.toUpperCase()); // capitalize first letter

  return formatted;
}

function Breadcumb() {
  const pathname = window.location.pathname;
  const pageName = formatPathname(pathname);

  return (
    <div className="my-7 lg:my-28">
      <div>
        <h2 className="text-3xl font-bold capitalize text-tcolor lg:text-5xl">
          {pageName}
        </h2>
      </div>
      <p className="mt-2 flex items-center gap-x-1.5 text-xs text-t2color lg:mt-3 lg:gap-x-2">
        <Link to="/">Home</Link>
        <FaAngleRight /> {pageName}
      </p>
    </div>
  );
}

export default Breadcumb;
