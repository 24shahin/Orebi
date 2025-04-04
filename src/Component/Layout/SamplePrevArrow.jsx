import React from "react";
import { FaArrowLeft } from "react-icons/fa";

function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className={
        "absolute left-[0%] top-[25%] z-50 !flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#979797] text-white md:h-16 md:w-16"
      }
      style={{
        ...style,
      }}
      onClick={onClick}
    >
      <FaArrowLeft />
    </div>
  );
}

export default SamplePrevArrow;
