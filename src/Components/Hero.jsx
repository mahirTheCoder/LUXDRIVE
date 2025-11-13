import React, { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";

const Hero = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");

  const handleSearch = () => {
    console.log({ pickupLocation, pickupDate, dropoffLocation, dropoffDate });
  };

  return (
    <section className="w-full bg-black py-6 sm:py-8 lg:py-0">
      <div className="container mx-auto px-4">
        {/* Search Form Container */}
        <div className="min-h-[145px] flex items-center">
          <div className="w-full bg-white rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row items-stretch justify-between gap-3 sm:gap-4">
            {/* Pick-up Location */}
            <div className="flex flex-col gap-2 flex-1">
              <label className="text-xs sm:text-sm font-semibold text-black">
                Pick-up Location
              </label>
              <div className="flex items-center gap-2 bg-gray-100 rounded px-3 py-2 flex-1">
                <IoLocationSharp className="text-black text-lg sm:text-xl flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search location"
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                  className="bg-gray-100 outline-none w-full text-xs sm:text-sm"
                />
              </div>
            </div>

            {/* Pick-up Date */}
            <div className="flex flex-col gap-2 flex-1">
              <label className="text-xs sm:text-sm font-semibold text-black">
                Pick-up Date
              </label>
              <div className="flex items-center gap-2 bg-gray-100 rounded px-3 py-2 flex-1">
                <input
                  type="date"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  className="bg-gray-100 outline-none w-full text-xs sm:text-sm"
                />
              </div>
            </div>

            {/* Drop-off Location */}
            <div className="flex flex-col gap-2 flex-1">
              <label className="text-xs sm:text-sm font-semibold text-black">
                Drop-off Location
              </label>
              <div className="flex items-center gap-2 bg-gray-100 rounded px-3 py-2 flex-1">
                <IoLocationSharp className="text-black text-lg sm:text-xl flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search location"
                  value={dropoffLocation}
                  onChange={(e) => setDropoffLocation(e.target.value)}
                  className="bg-gray-100 outline-none w-full text-xs sm:text-sm"
                />
              </div>
            </div>

            {/* Drop-off Date */}
            <div className="flex flex-col gap-2 flex-1">
              <label className="text-xs sm:text-sm font-semibold text-black">
                Drop-off Date
              </label>
              <div className="flex items-center gap-2 bg-gray-100 rounded px-3 py-2 flex-1">
                <input
                  type="date"
                  value={dropoffDate}
                  onChange={(e) => setDropoffDate(e.target.value)}
                  className="bg-gray-100 outline-none w-full text-xs sm:text-sm"
                />
              </div>
            </div>

            {/* Find Vehicle Button */}
            <div className="flex items-end">
              <button
                onClick={handleSearch}
                className="w-full sm:w-auto bg-black text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-gray-800 transition text-xs sm:text-sm whitespace-nowrap"
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
