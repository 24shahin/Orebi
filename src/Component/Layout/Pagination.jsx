import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Product from "./Product";
import Flex from "./Flex";

const items = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
  17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 17,
  18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
  12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item, index) => (
          <Flex style={"w-full lg:w-[31%] flex-wrap sm:w-[48%]"} key={index}>
            <Product
              style={""}
              link={"../src/assets/images/arr1.png"}
              overlay={true}
              brandName={"Black"}
              brandColor={true}
            />
          </Flex>
        ))}
    </>
  );
}

function Pagination({ itemsPerPage }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`,
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Flex style="justify-between flex-wrap gap-y-8">
        <Items currentItems={currentItems} />
      </Flex>
      <div className=" flex flex-wrap items-end justify-between gap-y-2">
        <ReactPaginate
          breakLabel="..."
          breakClassName="flex items-end"
          onPageChange={handlePageClick}
          pageRangeDisplayed={4}
          pageCount={pageCount}
          previousLabel=" "
          renderOnZeroPageCount={null}
          previousClassName="hidden"
          nextClassName="hidden"
          pageClassName="page-item border border-solid boder-[#F0F0F0] lg:py-2 lg:px-3 py-1.5 px-2 text-tcolor font-dm font-regular text-sm"
          pageLinkClassName="page-link"
          containerClassName="flex lg:gap-x-3.5 mt-12 flex-wrap gap-y-2"
          activeClassName="active bg-tcolor !text-white"
        />
        <p className="text-sm text-t2color">
          {" "}
          {`Products from ${itemOffset} to ${endOffset} of ${items.length}`}
        </p>
      </div>
    </>
  );
}

export default Pagination;
