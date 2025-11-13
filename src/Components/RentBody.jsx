import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
import img1 from "../assets/images/1.png";
import img2 from "../assets/images/2.png";
import img3 from "../assets/images/3.png";
import img4 from "../assets/images/4.png";
import img5 from "../assets/images/5.png";
import img6 from "../assets/images/6.png";
import img7 from "../assets/images/7.png";
import img8 from "../assets/images/8.png";
import img9 from "../assets/images/9.png";
import img10 from "../assets/images/10.png";
import img11 from "../assets/images/11.png";
import img12 from "../assets/images/12.png";
const RentBody = () => {
  return (
    <>
      <section id="rent" className="w-full py-8 sm:py-12 lg:py-16 mb-17">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="mb-8 sm:mb-10 lg:mb-12">
            <div className="flex justify-between  sm:flex-row sm:justify-between sm:items-center gap-4">
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-primary font-bold font-figtree">
                Rent by Brands
              </h2>
              <Link
                to="/"
                className="text-xs sm:text-sm font-semibold font-figtree text-primary flex justify-center items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 border border-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300 w-fit"
              >
                View all
                <FaArrowRight className="text-xs sm:text-sm" />
              </Link>
            </div>
          </div>

          {/* Brand Grid */}
          <div className="space-y-6 sm:space-y-8">
            {/* First Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
              <div className="brand flex flex-col justify-center items-center bg-[#F5F5F5] rounded-xl sm:rounded-2xl py-4 sm:py-6 gap-2 sm:gap-4 cursor-pointer hover:shadow-lg transition-all duration-300">
                <img src={img1} alt="img" />
                <h2 className="text-xs sm:text-sm lg:text-base font-medium font-figtree text-primary text-center">
                  SUV
                </h2>
              </div>

              <div className="brand flex flex-col justify-center items-center bg-[#F5F5F5] rounded-xl sm:rounded-2xl py-4 sm:py-6 gap-2 sm:gap-4 cursor-pointer hover:shadow-lg transition-all duration-300">
                <img src={img1} alt="img" />
                <h2 className="text-xs sm:text-sm lg:text-base font-medium font-figtree text-primary text-center">
                  Crossover
                </h2>
              </div>

              <div className="brand flex flex-col justify-center items-center bg-[#F5F5F5] rounded-xl sm:rounded-2xl py-4 sm:py-6 gap-2 sm:gap-4 cursor-pointer hover:shadow-lg transition-all duration-300">
                <img src={img3} alt="img" />
                <h2 className="text-xs sm:text-sm lg:text-base font-medium font-figtree text-primary text-center">
                  Wagon
                </h2>
              </div>

              <div className="brand flex flex-col justify-center items-center bg-[#F5F5F5] rounded-xl sm:rounded-2xl py-4 sm:py-6 gap-2 sm:gap-4 cursor-pointer hover:shadow-lg transition-all duration-300">
                <img src={img4} alt="img" />
                <h2 className="text-xs sm:text-sm lg:text-base font-medium font-figtree text-primary text-center">
                  Family MBP
                </h2>
              </div>

              <div className="brand flex flex-col justify-center items-center bg-[#F5F5F5] rounded-xl sm:rounded-2xl py-4 sm:py-6 gap-2 sm:gap-4 cursor-pointer hover:shadow-lg transition-all duration-300">
                <img src={img5} alt="img" />
                <h2 className="text-xs sm:text-sm lg:text-base font-medium font-figtree text-primary text-center">
                  Sport Coupe{" "}
                </h2>
              </div>

              <div className="brand flex flex-col justify-center items-center bg-[#F5F5F5] rounded-xl sm:rounded-2xl py-4 sm:py-6 gap-2 sm:gap-4 cursor-pointer hover:shadow-lg transition-all duration-300">
                <img src={img6} alt="img" />
                <h2 className="text-xs sm:text-sm lg:text-base font-medium font-figtree text-primary text-center">
                  Compact
                </h2>
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
              <div className="brand flex flex-col justify-center items-center bg-[#F5F5F5] rounded-xl sm:rounded-2xl py-4 sm:py-6 gap-2 sm:gap-4 cursor-pointer hover:shadow-lg transition-all duration-300">
                <img src={img7} alt="img" />
                <h2 className="text-xs sm:text-sm lg:text-base font-medium font-figtree text-primary text-center">
                  Coup
                </h2>
              </div>

              <div className="brand flex flex-col justify-center items-center bg-[#F5F5F5] rounded-xl sm:rounded-2xl py-4 sm:py-6 gap-2 sm:gap-4 cursor-pointer hover:shadow-lg transition-all duration-300">
                <img src={img8} alt="img" />
                <h2 className="text-xs sm:text-sm lg:text-base font-medium font-figtree text-primary text-center">
                  BMW{" "}
                </h2>
              </div>

              <div className="brand flex flex-col justify-center items-center bg-[#F5F5F5] rounded-xl sm:rounded-2xl py-4 sm:py-6 gap-2 sm:gap-4 cursor-pointer hover:shadow-lg transition-all duration-300">
                <img src={img9} alt="img" />
                <h2 className="text-xs sm:text-sm lg:text-base font-medium font-figtree text-primary text-center">
                  Sedan
                </h2>
              </div>

              <div className="brand flex flex-col justify-center items-center bg-[#F5F5F5] rounded-xl sm:rounded-2xl py-4 sm:py-6 gap-2 sm:gap-4 cursor-pointer hover:shadow-lg transition-all duration-300">
                <img src={img10} alt="img" />
                <h2 className="text-xs sm:text-sm lg:text-base font-medium font-figtree text-primary text-center">
                  Limousine
                </h2>
              </div>

              <div className="brand flex flex-col justify-center items-center bg-[#F5F5F5] rounded-xl sm:rounded-2xl py-4 sm:py-6 gap-2 sm:gap-4 cursor-pointer hover:shadow-lg transition-all duration-300">
                <img src={img11} alt="img" />
                <h2 className="text-xs sm:text-sm lg:text-base font-medium font-figtree text-primary text-center">
                  Convertible
                </h2>
              </div>

              <div className="hidden lg:flex brand flex-col justify-center items-center bg-[#F5F5F5] rounded-xl sm:rounded-2xl py-4 sm:py-6 gap-2 sm:gap-4 cursor-pointer hover:shadow-lg transition-all duration-300">
                <img src={img12} alt="img" />
                <h2 className="text-xs sm:text-sm lg:text-base font-medium font-figtree text-primary text-center">
                  Crossover
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RentBody;
