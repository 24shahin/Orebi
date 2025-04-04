import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

function LeftSideBarItem(props) {
  const [drop, SetDrop] = useState(props.SubdropDwon);
  const [show, SetShow] = useState(false);
  return (
    <>
      {drop ? (
        <div
          className="flex cursor-pointer items-center justify-between border-b border-[#F0F0F0]"
          onClick={() => SetShow(!show)}
        >
          <h3 className="py-5 text-base font-normal text-t2color">
            <span
              className="inline-block h-[11px] w-[11px] rounded-full"
              style={{ background: props.color }}
            ></span>
            {props.tittle}
          </h3>
          <FaPlus
            className="text-t2color
          "
          />
        </div>
      ) : (
        <h3 className="cursor-pointer border-b border-[#F0F0F0] py-5 text-base font-normal text-t2color">
          <span
            className="inline-block h-[11px] w-[11px] rounded-full"
            style={{ background: props.color }}
          ></span>
          {props.tittle}
        </h3>
      )}

      {props.SubdropDwon && show && <div>{props.children}</div>}
    </>
  );
}

export default LeftSideBarItem;
