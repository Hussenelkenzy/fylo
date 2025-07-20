import React, { useState } from "react";
import FeatruesBox from "./FeatruesBox";
function Featrues() {
  const [items, setItems] = useState([
    {
      icon: "icon-access-anywhere.svg",
      title: "Access your files, anywhare",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, labo",
    },

    {
      icon: "icon-security.svg",
      title: "Security you can trust",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, labo",
    },

    {
      icon: "icon-collaboration.svg",
      title: "Real-time collaboration",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, labo",
    },

    {
      icon: "icon-any-file.svg",
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
