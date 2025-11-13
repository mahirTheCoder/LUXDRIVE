"use client";
import React, { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";

const Hero = () => {
  const [formData, setFormData] = useState({
    pickupLocation: "",
    pickupDate: "",
    dropoffLocation: "",
    dropoffDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
    console.log("Search Data:", formData);
  };

  return (
    <section className="w-full bg-black py-6 sm:py-8 lg:py-10">
      <div className="container mx-auto px-4">
        {/* Main Wrapper */}
        <div className="flex justify-center items-center min-h-[145px]">
          <div
            className="
              flex flex-col sm:flex-row flex-wrap justify-between 
              items-stretch w-full bg-white rounded-xl shadow-lg 
              p-4 sm:p-6 gap-4 transition-all duration-300
            "
          >
            {/* Pick-up Location */}
            <div className="flex flex-col flex-1 min-w-[220px]">
              <label className="text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                Pick-up Location
              </label>
              <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
                <IoLocationSharp className="text-black text-lg sm:text-xl mr-2" />
                <input
                  type="text"
                  name="pickupLocation"
                  placeholder="Search location"
                  value={formData.pickupLocation}
                  onChange={handleChange}
                  className="flex-1 bg-transparent outline-none text-xs sm:text-sm text-gray-800"
                />
              </div>
            </div>

            {/* Pick-up Date */}
            <div className="flex flex-col flex-1 min-w-[180px]">
              <label className="text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                Pick-up Date
              </label>
              <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
                <input
                  type="date"
                  name="pickupDate"
                  value={formData.pickupDate}
                  onChange={handleChange}
                  className="flex-1 bg-transparent outline-none text-xs sm:text-sm text-gray-800"
                />
              </div>
            </div>

            {/* Drop-off Location */}
            <div className="flex flex-col flex-1 min-w-[220px]">
              <label className="text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                Drop-off Location
              </label>
              <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
                <IoLocationSharp className="text-black text-lg sm:text-xl mr-20" />
                <input
                  type="text"
                  name="dropoffLocation"
                  placeholder="Search location"
                  value={formData.dropoffLocation}
                  onChange={handleChange}
                  className="flex-1 bg-transparent outline-none text-xs sm:text-sm text-gray-800"
                />
              </div>
            </div>

            {/* Drop-off Date */}
            <div className="flex flex-col flex-1 min-w-[180px]">
              <label className="text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                Drop-off Date
              </label>
              <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
                <input
                  type="date"
                  name="dropoffDate"
                  value={formData.dropoffDate}
                  onChange={handleChange}
                  className="flex-1 bg-transparent outline-none text-xs sm:text-sm text-gray-800"
                />
              </div>
            </div>

            {/* Find Vehicle Button */}
            <div className="flex flex-1 sm:flex-none justify-center sm:justify-end items-end">
              <button
                onClick={handleSearch}
                className="
                  bg-[#2E7D32] text-white font-semibold 
                  px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg 
                  hover:bg-[#27672B] transition-all duration-200 text-sm
                  w-full sm:w-auto
                "
              >
                Find a Vehicle
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
