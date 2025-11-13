import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import comment from "../assets/images/comment.png";
const Customers = () => {
  return (
    <section
      id="Customer Reviews"
      className="w-full bg-white py-16 px-4 sm:px-6 lg:px-12"
    >
      <div className="max-w-6xl mx-auto">
        {/* ----Header-----  */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#0A0A0A] font-figtree">
            What Our Customers Say
          </h2>
        </div>

        {/*------ Review Text----- */}
        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-8 max-w-4xl font-figtree">
          “I was really impressed with the level of service I received from this
          car rental company. The process was smooth and easy, and the car I
          rented was in excellent condition. The staff was friendly and helpful,
          and I felt well taken care of throughout my rental period. I would
          definitely recommend this company to anyone looking for a premium car
          rental experience.”
        </p>

        {/* Profile */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden">
            <img src={comment} alt="img" />
          </div>
          <div>
            <h3 className="text-sm font-figtree sm:text-base font-semibold text-gray-900">
              Lokman Hossain
            </h3>
            <p className="text-xs font-figtree sm:text-sm text-gray-500">From Texas</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
