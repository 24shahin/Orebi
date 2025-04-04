import React from "react";

function Image({ link, style, ...all }) {
  return <img src={link} alt="" {...all} className={style} />;
}

export default Image;
