import React from "react";

function StayProductive() {
  return (
    <section className="pb-[150px] ">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-[30px] place-items-center">
        <div>
          <img
            src="/src/assets/images/illustration-stay-productive.png"
            alt="Stay-productive"
          />
        </div>

        <div className="text-white px-[20px]">
          <h3 className="font-medium text-[35px] leading-[50px]">
            Stay Productive,
            <br />
            Wherever you are
          </h3>
          <div className="my-[15px] font-normal text-sm tracking-[0.8px]">
            <p className="mb-[15px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
              dolorum natus maxime rerum possimus ad, beatae optio voluptatibus
              atque veniam praesentium et nisi quos quia a, quisquam, animi
              doloribus! Explicabo!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui sint
              deserunt temporibus placeat necessitatibus, distinctio libero
              nihil reiciendis beatae aperiam iure vero repellendus ea.
              Inventore in porro molestiae minus dignissimos?
            </p>
          </div>
          <a href="" className="text-[#67dbda] hover:text-[#42b0d1] tracking-[0.8px] border-b-2 border-solid border-primary pb-[5px] flex items-center gap-[15px] w-fit transition-all duration-200">
            See how fylo works
            <img src="/src/assets/images/icon-arrow.svg" alt="arrow-img" className="w-[20px] h-[20px] object-contain animate-bounce-x" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default StayProductive;



// primaryColor : #67dbda