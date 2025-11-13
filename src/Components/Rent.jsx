import React from "react";
import { FaArrowRight } from "react-icons/fa";
import {
  SiAudi,
  SiBmw,
  SiChevrolet,
  SiFord,
  SiHonda,
  SiHyundai,
  SiMercedes,
  SiNissan,
  SiTesla,
  SiToyota,
  SiWwe,
} from "react-icons/si";
import { Link } from "react-router";
import { SiKia } from "react-icons/si";

const Rent = () => {
  return (
    <section id="rent" className="w-full py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
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
              <span className="text-3xl sm:text-5xl lg:text-6xl text-primary">
                <SiToyota />
              </span>
              <h2 className="text-xs sm:text-sm lg:text-base font-medium font-figtree text-primary text-center">
                Toyota
              </h2>
            </div>
            <div className="brand flex flex-col justify-center items-center bg-[#F5F5F5] rounded-xl sm:rounded-2xl py-4 sm:py-6 gap-2 sm:gap-4 cursor-pointer hover:shadow-lg transition-all duration-300">
              <span className="text-3xl sm:text-5xl lg:text-6xl text-primary">
                <SiFord />
              </span>
              <h2 className="text-xs sm:text-sm lg:text-base font-medium font-figtree text-primary text-center">
                Ford
              </h2>
            </div>
            <div className="brand flex flex-col justify-center items-center bg-[#F5F5F5] rounded-xl sm:rounded-2xl py-4 sm:py-6 gap-2 sm:gap-4 cursor-pointer hover:shadow-lg transition-all duration-300">
              <span className="text-3xl sm:text-5xl lg:text-6xl text-primary">
                <SiTesla />
              </span>
              <h2 className="text-xs sm:text-sm lg:text-base font-medium font-figtree text-primary text-center">
                Tesla
              </h2>
            </div>
            <div className="brand flex flex-col justify-center items-center bg-[#F5F5F5] rounded-xl sm:rounded-2xl py-4 sm:py-6 gap-2 sm:gap-4 cursor-pointer hover:shadow-lg transition-all duration-300">
              <span className="text-3xl sm:text-5xl lg:text-6xl text-primary">
                <SiHonda />
              </span>
              <h2 className="text-xs sm:text-sm lg:text-base font-medium font-figtree text-primary text-center">
                Honda
              </h2>
            </div>
            <div className="brand flex flex-col justify-center items-center bg-[#F5F5F5] rounded-xl sm:rounded-2xl py-4 sm:py-6 gap-2 sm:gap-4 cursor-pointer hover:shadow-lg transition-all duration-300">
              <span className="text-3xl sm:text-5xl lg:text-6xl text-primary">
                <SiNissan />
              </span>
              <h2 className="text-xs sm:text-sm lg:text-base font-medium font-figtree text-primary text-center">
                Nissan
              </h2>
            </div>
            <div className="brand flex flex-col justify-center items-center bg-[#F5F5F5] rounded-xl sm:rounded-2xl py-4 sm:py-6 gap-2 sm:gap-4 cursor-pointer hover:shadow-lg transition-all duration-300">
              <span className="text-3xl sm:text-5xl lg:text-6xl text-primary">
                <SiChevrolet />
              </span>
              <h2 className="text-xs sm:text-sm lg:text-base font-medium font-figtree text-primary text-center">
                Chevrolet
              </h2>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
            <div className="brand flex flex-col justify-center items-center bg-[#F5F5F5] rounded-xl sm:rounded-2xl py-4 sm:py-6 gap-2 sm:gap-4 cursor-pointer hover:shadow-lg transition-all duration-300">
              <span className="text-3xl sm:text-5xl lg:text-6xl text-primary">
                <SiBmw />
              </span>
              <h2 className="text-xs sm:text-sm lg:text-base font-medium font-figtree text-primary text-center">
                BMW
              </h2>
            </div>
            <div className="brand flex flex-col justify-center items-center bg-[#F5F5F5] rounded-xl sm:rounded-2xl py-4 sm:py-6 gap-2 sm:gap-4 cursor-pointer hover:shadow-lg transition-all duration-300">
              <span className="text-3xl sm:text-5xl lg:text-6xl text-primary">
                <SiMercedes />
              </span>
              <h2 className="text-xs sm:text-sm lg:text-base font-medium font-figtree text-primary text-center">
                Mercedes-Benz
              </h2>
            </div>
            <div className="brand flex flex-col justify-center items-center bg-[#F5F5F5] rounded-xl sm:rounded-2xl py-4 sm:py-6 gap-2 sm:gap-4 cursor-pointer hover:shadow-lg transition-all duration-300">
              <span className="text-3xl sm:text-5xl lg:text-6xl text-primary">
                <SiHyundai />
              </span>
              <h2 className="text-xs sm:text-sm lg:text-base font-medium font-figtree text-primary text-center">
                Hyundai
              </h2>
            </div>
            <div className="brand flex flex-col justify-center items-center bg-[#F5F5F5] rounded-xl sm:rounded-2xl py-4 sm:py-6 gap-2 sm:gap-4 cursor-pointer hover:shadow-lg transition-all duration-300">
              <span className="text-3xl sm:text-5xl lg:text-6xl text-primary">
                <SiAudi />
              </span>
              <h2 className="text-xs sm:text-sm lg:text-base font-medium font-figtree text-primary text-center">
                Audi
              </h2>
            </div>
            <div className="brand flex flex-col justify-center items-center bg-[#F5F5F5] rounded-xl sm:rounded-2xl py-4 sm:py-6 gap-2 sm:gap-4 cursor-pointer hover:shadow-lg transition-all duration-300">
              <span className="text-3xl sm:text-5xl lg:text-6xl text-primary">
                <SiKia />
              </span>
              <h2 className="text-xs sm:text-sm lg:text-base font-medium font-figtree text-primary text-center">
                KIA
              </h2>
            </div>
            <div className="hidden lg:flex brand flex-col justify-center items-center bg-[#F5F5F5] rounded-xl sm:rounded-2xl py-4 sm:py-6 gap-2 sm:gap-4 cursor-pointer hover:shadow-lg transition-all duration-300">
              <span className="text-3xl sm:text-5xl lg:text-6xl text-primary">
                <SiHyundai />
              </span>
              <h2 className="text-xs sm:text-sm lg:text-base font-medium font-figtree text-primary text-center">
                Extra Brand
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rent;
