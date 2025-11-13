import React from "react";
import audi from "../assets/images/audi.png";
import nissan from "../assets/images/nissan.png";
import porshe from "../assets/images/porshe.png";
import bmw from "../assets/images/bmw.png";
import x7 from "../assets/images/x7.png";
import p2 from "../assets/images/porshe2.png";
import { SlSpeedometer } from "react-icons/sl";
import { GiAutoRepair, GiElectricalCrescent } from "react-icons/gi";
import { PiPersonSimpleThrowFill } from "react-icons/pi";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";

const Collection = () => {
  const carData = [
    { img: audi, name: "Audi A8 L 2022", price: "78.90" },
    { img: nissan, name: "Nissan Maxima Platinum 2022", price: "78.90" },
    { img: porshe, name: "Porsche Cayenne GTS 2022", price: "78.90" },
    { img: bmw, name: "BMW M8 Coupe 2022", price: "78.90" },
    { img: x7, name: "BMW X7 M50i 2022", price: "78.90" },
    { img: p2, name: "Porsche Cayenne GTS 2022", price: "78.90" },
  ];

  const CarCard = ({ car }) => (
    <div className="w-full h-auto border-2 rounded-lg sm:rounded-2xl py-2 sm:py-3 px-2 sm:px-3 border-gray-200 hover:drop-shadow-xl duration-700 shadow-lg flex flex-col">
      <div className="w-full h-40 sm:h-52 md:h-60 mb-3 sm:mb-4 md:mb-6 overflow-hidden rounded-lg">
        <img
          src={car.img}
          alt={car.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col">
        <h2 className="text-sm sm:text-base md:text-lg font-semibold font-figtree text-primary mb-2 sm:mb-3 line-clamp-2">
          {car.name}
        </h2>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black mb-3 sm:mb-4">
          {car.price}{" "}
          <span className="text-xs sm:text-sm font-normal text-gray-400 font-figtree">
            /day
          </span>
        </h1>
        <div className="w-full bg-gray-200 rounded-lg sm:rounded-xl py-2 sm:py-3 px-2 sm:px-4 mb-3 sm:mb-4 flex justify-between items-center gap-1 sm:gap-2">
          <div className="font-normal text-xs flex flex-col gap-0.5 sm:gap-1 items-center text-black">
            <button>
              <SlSpeedometer className="text-sm sm:text-base" />
            </button>
            <p className="text-xs">4000</p>
          </div>
          <div className="font-normal text-xs flex flex-col gap-0.5 sm:gap-1 items-center text-black">
            <button>
              <GiAutoRepair className="text-sm sm:text-base" />
            </button>
            <p className="text-xs">Auto</p>
          </div>
          <div className="font-normal text-xs flex flex-col gap-0.5 sm:gap-1 items-center text-black">
            <button>
              <PiPersonSimpleThrowFill className="text-sm sm:text-base" />
            </button>
            <p className="text-xs">4 Person</p>
          </div>
          <div className="font-normal text-xs flex flex-col gap-0.5 sm:gap-1 items-center text-black">
            <button>
              <GiElectricalCrescent className="text-sm sm:text-base" />
            </button>
            <p className="text-xs">Electric</p>
          </div>
        </div>
        <div className="text-center">
          <button className="py-2 sm:py-3 px-4 sm:px-6 border border-gray-200 rounded-full text-xs sm:text-sm text-primary font-bold font-figtree hover:bg-black hover:text-white duration-700 w-full">
            Vintage Car
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="Collections"
      className="w-full py-10 sm:py-14 md:py-20 lg:py-28 bg-[#F5F5F5]"
    >
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-figtree text-primary mb-4 sm:mb-6 text-center">
            Our Impressive Collection of Cars
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-medium font-figtree text-primary max-w-3xl mx-auto text-center px-2">
            Ranging from elegant sedans to powerful sports cars, all carefully
            selected to provide our customers with the ultimate driving
            experience.
          </p>
        </div>

        {/* Category Buttons */}
        <div className="flex justify-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
          <div className="w-full flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
            {[
              "Popular Car",
              "Luxury Car",
              "Vintage Car",
              "Family Car",
              "Off-Road Car",
            ].map((cat) => (
              <button
                key={cat}
                className="py-2 px-3 sm:py-2.5 sm:px-5 border border-gray-200 rounded-full text-xs sm:text-sm md:text-base text-primary font-bold font-figtree hover:bg-black hover:text-white duration-700"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-10 sm:mb-12 md:mb-14 lg:mb-16">
          {carData.map((car, idx) => (
            <CarCard key={idx} car={car} />
          ))}
        </div>

        {/* See All Button */}
        <div className="flex justify-center">
          <Link
            to="/"
            className="text-xs sm:text-sm font-semibold font-figtree text-primary flex justify-center items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 border border-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300"
          >
            See all cars
            <FaArrowRight className="text-xs sm:text-sm" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Collection;
