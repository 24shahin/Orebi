import React from "react";
import LeftMenu from "./LeftMenu";
import SideBarContent from "./SideBarContent";

function LeftSideBar() {
  return (
    <div>
      <LeftMenu ByClick={false} title={"Shop by Category"} />
      <LeftMenu ByClick={true} title={"Shop by Color"} color={true} />
      <LeftMenu ByClick={true} title={"Shop by Brand"} brand={true} />
      <LeftMenu ByClick={true} title={"Shop by Price"} price={true} />

      {/* <SideBarContent dropDwon={false} menuTittle={"Shop By Catagory"} />
      <SideBarContent dropDwon={true} menuTittle={"Shop By Color"} /> */}
    </div>
  );
}

export default LeftSideBar;
