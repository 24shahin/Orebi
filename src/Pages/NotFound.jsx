import React from "react";
import Container from "../Component/Layout/Container";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="mt-20">
        <h3 className="text-[100px] font-bold text-tcolor sm:pl-20 md:pl-0 md:text-[140px] lg:text-[200px]">
          404
        </h3>
        <p className="w-full text-base text-t2color sm:px-20 md:w-[644px] md:px-0">
          The page you were looking for couldn't be found. The page could be
          removed or you misspelled the word while searching for it. Maybe try a
          search?
        </p>
        <div className="relative mb-[60px] mt-[50px] w-2/3 sm:pl-20 md:pl-0 lg:w-[644px]">
          <input
            type="text"
            name=""
            id=""
            className=" w-full border border-bordercolor p-3 outline-none md:p-5"
          />
          <div className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer">
            <FaSearch />
          </div>
        </div>
        <button
          className="h-9 w-32 border border-[#2b2b2b] bg-tcolor text-sm font-bold text-white transition-all duration-200 ease-linear hover:bg-white hover:text-tcolor sm:ml-20 md:ml-0 md:h-[50px] md:w-[200px] md:text-base"
          onClick={() => navigate("/")}
        >
          Back to Home
        </button>
      </div>
    </Container>
  );
}

export default NotFound;
