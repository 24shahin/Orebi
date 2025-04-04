import React from "react";

function List({ style, children }) {
  return <ul className={style}>{children}</ul>;
}

export default List;
