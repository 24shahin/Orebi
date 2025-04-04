import React from "react";

function Search({ style, placeholder }) {
  return <input type="text" className={style} placeholder={placeholder} />;
}

export default Search;
