import React from "react";
import introImg from "/src/assets/images/illustration-intro.png"
import curvyDesk from "/src/assets/images/bg-curvy-desktop.svg"

const Landing = () => {
  return (
    <section className="bg-[#1c2230]">
      <div className="container">
        <div className="flex flex-col justify-center items-center pt-[200px]">
          <div className="w-[750px] max-w-full">
            <img
              src={introImg}
              className="w-full h-fit"
              alt="landing-img"
            />
          </div>

          <div className="text-white text-center">
            <h1 className="text-[30px] md:text-[40px] font-semibold mb-[15px]">
              All your files in one secure location <br /> accessible anywhare
            </h1>

            <p className="font-normal text-lg px-[15px] md:w-[600px] max-w-full md:mx-auto mb-[20px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              iste deserunt totam itaque nisi veniam voluptas vet, eos aliquam
              nulla impedit commodi.
            </p>
          </div>
          <a href="" className="bg-[#42b0d1] hover:bg-[#8cdae4] transition-all duration-200 w-[280px] h-[60px] rounded-[30px] flex justify-center items-center text-white font-medium">
            Get Started
          </a>
        </div>
      </div>

      <div className="w-full h-[200px]">
        <img src={curvyDesk} alt="img" className="w-full h-full" />
      </div>
    </section>
  );
};

export default Landing;
