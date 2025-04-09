import React from "react";

function Location({ address, mobile, email, time }) {
  return (
    <div className=" w-full bg-white px-5 pb-7">
      <h3 className="mb-2.5 text-base text-t2color">{address}</h3>
      <h3 className="mb-2.5 text-base text-t2color">{mobile}</h3>
      <h3 className="mb-2.5 text-base text-t2color">{email}</h3>
      <h3 className="text-base text-t2color">{time}</h3>
    </div>
  );
}

export default Location;
