import React from "react";

function Dropdown({ children, style, dropref }) {
  return (
    <div className={style} ref={dropref}>
      {children}
    </div>
  );
}

export default Dropdown;
