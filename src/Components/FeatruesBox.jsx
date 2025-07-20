import React from "react";

function FeatruesBox({ title, desc, icon }) {
  return (
    <div className="text-white flex flex-col justify-center items-center text-center">
      <img
        src={`${icon}`}
        className="w-[80px] h-[80px] object-contain"
      />
      <h4 className="font-semibold text-xl my-[15px]">{title}</h4>
      <p className="font-normal text-sm">{desc}</p>
    </div>
  );
}

export default FeatruesBox;
