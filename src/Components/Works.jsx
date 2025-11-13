import React from "react";
import cars from "../assets/images/cars.png";

const Works = () => {
  return (
    <section id="Works" className="mt-20 sm:mt-24 md:mt-28 lg:mt-32 px-4 sm:px-6 md:px-10">
      <div className="container mx-auto">
        {/* ---------- Header Part ---------- */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-figtree text-primary mb-4">
            How it works
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-medium font-figtree text-primary max-w-3xl mx-auto">
            Renting a luxury car has never been easier. Our streamlined process
            makes it simple for you to book and confirm your vehicle of choice online.
          </p>
        </div>

        {/* ---------- Image & Text Section ---------- */}
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-10 lg:gap-16">
          {/* ---------- Text Section ---------- */}
          <div className="flex flex-col gap-6 w-full lg:w-[55%]">
            {/* Card 1 */}
            <div className="w-full bg-white border border-gray-200 rounded-xl shadow-sm p-5 sm:p-6 md:p-8 hover:shadow-md transition-all duration-300">
              <h2 className="text-xl sm:text-2xl font-bold font-figtree text-primary mb-2">
                Browse and select
              </h2>
              <p className="text-base sm:text-lg font-normal font-figtree text-black leading-relaxed">
                Choose from our wide range of premium cars, select the pickup and return
                dates and locations that suit you best.
              </p>
            </div>

            {/* Card 2 */}
            <div className="w-full bg-white border border-gray-200 rounded-xl shadow-sm p-5 sm:p-6 md:p-8 hover:shadow-md transition-all duration-300">
              <h2 className="text-xl sm:text-2xl font-bold font-figtree text-primary mb-2">
                Book and confirm
              </h2>
              <p className="text-base sm:text-lg font-normal font-figtree text-black leading-relaxed">
                Book your desired car with just a few clicks and receive an instant confirmation
                via email or SMS.
              </p>
            </div>

            {/* Card 3 */}
            <div className="w-full bg-white border border-gray-200 rounded-xl shadow-sm p-5 sm:p-6 md:p-8 hover:shadow-md transition-all duration-300">
              <h2 className="text-xl sm:text-2xl font-bold font-figtree text-primary mb-2">
                Enjoy your ride
              </h2>
              <p className="text-base sm:text-lg font-normal font-figtree text-black leading-relaxed">
                Pick up your car at the designated location and enjoy your premium driving
                experience with our top-quality service.
              </p>
            </div>
          </div>

          {/* ---------- Image Section ---------- */}
          <div className="w-full lg:w-[45%] flex justify-center items-center">
            <img
              src={cars}
              alt="Car Illustration"
              className="w-full max-w-[500px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[740px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
