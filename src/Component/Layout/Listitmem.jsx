import React from "react";

function Listitmem({ children, style = "", onClick }) {
  return (
    <li onClick={onClick} className={style}>
      {children}
    </li>
  );
}

export default Listitmem;
