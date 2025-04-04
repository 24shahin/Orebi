import React from "react";

function Badge({ badge, badgeTittle }) {
  return (
    badge && (
      <span
        className={
          "absolute left-5 top-5 w-[92px] bg-tcolor py-4 text-center text-white"
        }
      >
        {badgeTittle}
      </span>
    )
  );
}

export default Badge;
