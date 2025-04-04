import React from "react";

function SelectedTable() {
  return (
    <div className="flex flex-col gap-x-1 sm:flex-row sm:items-center lg:gap-x-3.5">
      <span className="text-xs text-t2color lg:text-base">Sort by:</span>
      <form className="w-[110px] lg:w-[310px]">
        <select
          id="countries"
          className="block w-full  border border-[#F0F0F0] bg-gray-50 p-2.5 !text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 "
        >
          <option
            value={"selected"}
            className="font-regular font-dm text-xs text-t2color lg:text-base"
          >
            Featured
          </option>

          <option
            value="US"
            className="font-regular font-dm text-xs text-t2color lg:text-base"
          >
            United States
          </option>
          <option
            value="CA"
            className="font-regular font-dm text-xs text-t2color lg:text-base"
          >
            Canada
          </option>
          <option
            value="FR"
            className="font-regular font-dm text-xs text-t2color lg:text-base"
          >
            France
          </option>
          <option
            value="DE"
            className="font-regular font-dm text-xs text-t2color lg:text-base"
          >
            Germany
          </option>
        </select>
      </form>
    </div>
  );
}

export default SelectedTable;
