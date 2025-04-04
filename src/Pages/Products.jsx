import React, { useState } from "react";
import Breadcumb from "../Component/Layout/Breadcumb";
import Container from "../Component/Layout/Container";
import Flex from "../Component/Layout/Flex";
import Pagination from "../Component/Layout/Pagination";
import SelectedTable from "../Component/Layout/SelectedTable";
import LeftSideBar from "../Component/Layout/LeftSideBar";
import { BiBorderAll } from "react-icons/bi";
import { FaListUl } from "react-icons/fa6";

function Products() {
  const [itemPerPage, SetItemPerPAge] = useState(12);
  const ItemsInPage = (e) => {
    SetItemPerPAge(+e.target.value);
  };
  return (
    <Container>
      <Breadcumb />
      <Flex style={"lg:gap-x-10 gap-x-3"}>
        <div className="w-[42%] sm:w-[30%] lg:w-[25%]">
          <LeftSideBar />
        </div>
        <div className="w-[58%] sm:w-[70%] lg:w-[75%]">
          <Flex
            style={
              "lg:mb-[60px] mb-7 justify-between sm:flex-row flex-col md:items-center gap-y-2"
            }
          >
            <div className="">
              <Flex style={"items-center gap-x-5"}>
                {" "}
                <div className="border border-[#F0F0F0] bg-white px-2 py-1 text-t2color duration-500 hover:bg-black hover:text-white sm:px-3 sm:py-2.5 ">
                  <BiBorderAll />
                </div>
                <div className="border border-[#F0F0F0] bg-white px-2 py-1 text-t2color duration-500 hover:bg-black hover:text-white sm:px-3 sm:py-2.5 ">
                  <FaListUl />
                </div>
              </Flex>
            </div>
            <div className="flex items-center gap-x-2 lg:gap-x-10 ">
              <SelectedTable />
              <div className="flex flex-col gap-x-3.5 sm:flex-row sm:items-center">
                <span className="text-xs text-t2color lg:text-base">Show:</span>
                <form className="w-14 lg:w-[139px]">
                  <select
                    id="countries"
                    className="block w-full  border border-[#F0F0F0] bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 "
                    onChange={ItemsInPage}
                    value={"DEFAULT"}
                  >
                    <option selected value={12}>
                      12
                    </option>
                    <option value={24}>24</option>
                    <option value={36}>36</option>
                    <option value={48}>48</option>
                  </select>
                </form>
              </div>
            </div>
          </Flex>
          <Pagination itemsPerPage={itemPerPage} />
        </div>
      </Flex>
    </Container>
  );
}

export default Products;
