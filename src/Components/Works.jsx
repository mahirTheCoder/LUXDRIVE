import React from "react";
import cars from "../assets/images/cars.png";
const Works = () => {
  return (
    <>
      <section id="Works " className="mt-30">
        <div className="container">
          <div className="content">
            {/* -----------header part-------- */}
            <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-figtree text-primary mb-4 sm:mb-6 text-center">
                How it woks
              </h2>
              <p className="text-sm sm:text-base md:text-lg font-medium font-figtree text-primary max-w-3xl mx-auto text-center px-2">
                Renting a luxury car has never been easier. Our streamlined
                process makes it simple for you to book and confirm your vehicle
                of choice online
              </p>

              {/* ---------img and text------ */}
              <div className="img&Content flex justify-between  items-center mt-14">
                {/* ---------text part------- */}
                <div className="text flex flex-col gap-5 ">
                  <div className="partOne w-[592px] py-8 bg-white px-5 rounded-xl border-2 border-gray-200 ">
                    <h2 className="text-2xl font-bold font-figtree text-primary mb-3 ">
                      Browse and select
                    </h2>
                    <p className="w-[454px] text-lg font-normal font-figtree text-black ">
                      Choose from our wide range of premium cars, select the
                      pickup and return dates and locations that suit you best.
                    </p>
                  </div>

                  <div className="partOne w-[592px] py-8 bg-white px-5 rounded-xl border-2 border-gray-200">
                    <h2 className="text-2xl font-bold font-figtree text-primary mb-3 ">
                      Book and confirm
                    </h2>
                    <p className="w-[454px] text-lg font-normal font-figtree text-black ">
                      Book your desired car with just a few clicks and receive
                      an instant confirmation via email or SMS.
                    </p>
                  </div>

                  <div className="partOne w-[592px] py-8 bg-white px-5 rounded-xl border-2 border-gray-200 ">
                    <h2 className="text-2xl font-bold font-figtree text-primary mb-3 ">
                      Enjoy your ride
                    </h2>
                    <p className="w-[454px] text-lg font-normal font-figtree text-black ">
                      Pick up your car at the designated location and enjoy your
                      premium driving experience with our top-quality service.
                    </p>
                  </div>
                </div>

                {/* ------------img part---------- */}
                <div className="imgPart w-[740px] h-[638px]  flex justify-center items-center ">
                  <img src={cars} alt="carimg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Works;
