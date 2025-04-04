import React from "react";

function Headings({ tittle }) {
  return (
    <h2
      className={"mb-6 text-2xl font-bold text-tcolor lg:mb-12 lg:text-[39px]"}
    >
      {tittle}
    </h2>
  );
}

export default Headings;
