import React, { useState } from "react";
import FeatruesBox from "./FeatruesBox";
import icon1 from "/src/assets/images/icon-access-anywhere.svg"
import icon2 from "/src/assets/images/icon-security.svg"
import icon3 from "/src/assets/images/icon-collaboration.svg"
import icon4 from "/src/assets/images/icon-any-file.svg"


function Featrues() {
  const [items, setItems] = useState([
    {
      icon: icon1,
      title: "Access your files, anywhare",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, labo",
    },

    {
      icon: icon2,
      title: "Security you can trust",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, labo",
    },

    {
      icon: icon3,
      title: "Real-time collaboration",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, labo",
    },

    {
      icon: icon4,
      title: "Store any tipe of file",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, labo",
    },
  ]);
  return (
    <div className="container pb-[180px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[100px] w-[865px] mx-auto max-w-full">
        {items.map((item) => (
          <FeatruesBox
            key={item.title}
            title={item.title}
            icon={item.icon}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
}

export default Featrues;
