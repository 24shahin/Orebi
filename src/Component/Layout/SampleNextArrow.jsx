import React from "react";
import { FaArrowRight } from "react-icons/fa";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={
        "absolute right-0 top-[25%] !flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#979797] text-white md:h-16 md:w-16"
      }
      style={{
        ...style,
      }}
      onClick={onClick}
    >
      <FaArrowRight />
    </div>
  );
}

export default SampleNextArrow;
