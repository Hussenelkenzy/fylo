import React, { useState } from "react";
import TestmonialBox from "./TestmonialBox";
import image1 from "/src/assets/images/profile-1.jpg"
import image2 from "/src/assets/images/profile-2.jpg"
import image3 from "/src/assets/images/profile-3.jpg"
import bgQuotes from "/src/assets/images/bg-quotes.png"

function Testimonials() {
  const [TestData, setTestData] = useState([
    {
      id: 1,
      desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt odio rem repellendus voluptatem magni, nihil quam vitae iste doloremque quia temporibus ducimus laborum excepturi suscipit laudantium culpa qui reprehenderit itaque.",
      image: image1,
      position: "Founder & CEO , Huddle",
      name: "Ahmed",
    },

    {
      id: 2,
      desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt odio rem repellendus voluptatem magni, nihil quam vitae iste doloremque quia temporibus ducimus laborum excepturi suscipit laudantium culpa qui reprehenderit itaque.",
      image: image2,
      position: "Founder & CEO , Huddle",
      name: "Mohammed",
    },

    {
      id: 3,
      desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt odio rem repellendus voluptatem magni, nihil quam vitae iste doloremque quia temporibus ducimus laborum excepturi suscipit laudantium culpa qui reprehenderit itaque.",
      image: image3,
      position: "Founder & CEO , Huddle",
      name: "Eman",
    },
  ]);
  return (
    <section className="pb-[350px]">
      <div className="container relative mx-auto px-4 md:px-8 lg:px-16 xl:px-20 2xl:px-24">
          <div className="absolute left-[20px] top-[-35px] lg:left-[90px]">
            <img src={bgQuotes} alt="bg-quotes" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] relative z-10">
            {TestData.map((item)=>(
              <TestmonialBox key={item.id} desc={item.desc} image={item.image} position={item.position} name={item.name}/>
            ))}
          </div>
      </div>
    </section>
  );
}

export default Testimonials;
