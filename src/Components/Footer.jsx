import React, { useState } from "react";
import {FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";

function footer() {
  const [contact, setContact] = useState([
    {
      icon: "icon-phone.svg",
      text: "01203599838",
    },
    {
      icon: "icon-email.svg",
      text: "fylo@example.com",
    },
  ]);

  const [links, setLinks] = useState([
    "About Us",
    "Contact Us",
    "Jops",
    "Terms",
    "Press",
    "Privacy",
    "Blog",
  ]);

  const [socialIcons, setSocialIcons] = useState([
    "facebook",
    "twitter",
    "instagram",
  ]);
  return (
    <section className=" bg-[#0c1524] pt-[320px] md:pt-[200px] pb-[100px] text-white">
      <div className="mx-auto px-4 md:px-8 lg:px-16 xl:px-20 2xl:px-24">
        <a href="#">
          <img
            src="/src/assets/images/logo.svg"
            alt="logo-img"
            className="w-[175px] h-[66px] object-contain"
          />
        </a>
        <div className="mt-[30px] flex justify-between flex-wrap flex-col md:flex-row gap-[30px]">
          <div className="flex items-start gap-[15px] w-[340px] max-w-full">
            <img
              src="/src/assets/images/icon-location.svg"
              alt="location-img"
              className="w-[18px] h-[18px] object-contain"
            />
            <p className="font-normal text-sm tracking-[0.8px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              et. Tempore molestiae iste blanditiis dolorum id vitae, cumque ex
              nam!
            </p>
          </div>
          <div>
            {contact.map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-[15px] mb-[15px] last-of-type:mb-0"
              >
                <img
                  src={`/src/assets/images/${item.icon}`}
                  alt="icon"
                  className="w-[18px] h-[18px]"
                />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href={`/${link.toLowerCase}`}
                    className="hover:text-shadow-cyan-400 transition-colors duration-200 text-base"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
                        <ul className="flex gap-[15px] w-full justify-center md:w-auto">
              {socialIcons.map((item) => (
                <li key={item}>
                  <a href="" className="group">
                    <div className="w-[40px] h-[40px] flex justify-center items-center border border-white rounded-full">
                      {item === "facebook" ? (
                        <FaFacebookF className="group-hover:text-cyan-300 transition-colors duration-200"/>
                      ) : item === "twitter" ? (
                        <FaTwitter className="group-hover:text-cyan-300 transition-colors duration-200" />
                      ) : (
                        <FaInstagram  className="group-hover:text-cyan-300 transition-colors duration-200"/>
                      )}
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default footer;
