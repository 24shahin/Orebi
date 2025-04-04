import React, { useState } from "react";
import List from "./List";
import Listitmem from "./Listitmem";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import ShortMenu from "./ShortMenu";
import { GoTriangleDown } from "react-icons/go";
import ShopByColor from "./ShopByColor";
import ShopByBrand from "./ShopByBrand";
import ShopByPrice from "./ShopByPrice";

function LeftMenu({ ByClick, title, color, brand, price }) {
  const [Drop, SetDrop] = useState(ByClick);
  const [menuShow, SetMenuShow] = useState(true);

  return (
    <div className="mb-[30px] md:mb-[53px]">
      {ByClick ? (
        <>
          <h3
            className="mb-4 flex cursor-pointer justify-between text-sm font-bold lg:mb-9 lg:text-xl"
            onClick={() => SetMenuShow(!menuShow)}
          >
            {title}
            <GoTriangleDown />
          </h3>
          {ByClick && menuShow && (
            <>
              {color && <ShopByColor />}
              {brand && <ShopByBrand />}
              {price && <ShopByPrice />}
            </>
          )}
        </>
      ) : (
        <>
          <h3 className="cursor-pointe mb-4 text-sm font-bold lg:mb-9 lg:text-xl">
            {title}
          </h3>
        </>
      )}
      {!ByClick && (
        <List>
          <Listitmem>
            <ShortMenu ByClick={true} tittle={"Catagory 1"} />
          </Listitmem>
          <Listitmem>
            <ShortMenu ByClick={false} tittle={"Catagory 2"} />
          </Listitmem>
          <Listitmem>
            <ShortMenu ByClick={true} tittle={"Catagory 3"} />
          </Listitmem>
          <Listitmem>
            <ShortMenu ByClick={false} tittle={"Catagory 4"} />
          </Listitmem>
          <Listitmem>
            <ShortMenu ByClick={false} tittle={"Catagory 5"} />
          </Listitmem>
        </List>
      )}
    </div>
  );
}

export default LeftMenu;
