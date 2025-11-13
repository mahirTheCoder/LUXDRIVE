import React from "react";
import { FaCarAlt, FaMoneyBillWave, FaLaptop } from "react-icons/fa";

const Service = () => {
  return (
    <section id="Service" className="bg-[#0E0E0E] text-white py-16 sm:py-20 md:py-24 px-4 sm:px-8 mt-25">
      <div className="container mx-auto text-center">
        {/* ---------- Header ---------- */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-figtree mb-4">
          Our Services & Benefits
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto mb-12">
          To make renting easy and hassle-free, we provide a variety of services and advantages.
          We have you covered with a variety of vehicles and flexible rental terms.
        </p>

        {/* ---------- Cards ---------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 md:gap-16">
          {/* --- Card 1 --- */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-14 h-14 flex justify-center items-center bg-white rounded-full text-black text-2xl">
              <FaCarAlt />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold font-figtree">
              Quality Choice
            </h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xs">
              We offer a wide range of high-quality vehicles to choose from, including luxury
              cars, SUVs, vans, and more.
            </p>
          </div>

          {/* --- Card 2 --- */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-14 h-14 flex justify-center items-center bg-white rounded-full text-black text-2xl">
              <FaMoneyBillWave />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold font-figtree">
              Affordable Prices
            </h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xs">
              Our rental rates are highly competitive and affordable, allowing our customers
              to enjoy their trips without breaking the bank.
            </p>
          </div>

          {/* --- Card 3 --- */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-14 h-14 flex justify-center items-center bg-white rounded-full text-black text-2xl">
              <FaLaptop />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold font-figtree">
              Convenient Online Booking
            </h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xs">
              With our easy-to-use online booking system, customers can quickly and conveniently
              reserve their rental car from anywhere, anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
