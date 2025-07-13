import React from "react";

function GetStarted() {
  return (
    <section>
      <div className="relative mx-auto px-4 md:px-8 lg:px-16 xl:px-20 2xl:px-24">
        <div className="text-white bg-[#1c2230] absolute left-[50%] translate-x-[-50%] top-[-150px] rounded-[5px] flex justify-center items-center flex-col w-[865px] min-h-[275px] max-w-full text-center p-[30px]">
          <h3 className="text-[25px] md:text-[35px] font-semibold mb-[15px]">Get early access today</h3>
          <p className="w-[620px] max-w-full mx-auto mb-[30px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
            error reiciendis ipsum atque accusantium tempore voluptate ipsa hic!
          </p>

          <form className="w-full flex justify-between items-center flex-wrap md:px-[60px] gap-[30px]" action="">
            <input type="email" name="email" placeholder="email@example.com" className="w-full md:flex-1 h-[50px] rounded-[30px] pl-[30px] outline-none border-none text-sm text-black font-medium bg-white"/>
            <button type="submit" className="w-full md:w-[200px] h-[50px] bg-[#42b0d1] hover:bg-[#8cdae4] transition-all duration-200  rounded-[30px]">Get Started For Free</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
