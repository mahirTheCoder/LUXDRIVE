import React from "react";
import audi from "../assets/images/audi.png";
import { SlSpeedometer } from "react-icons/sl";
import { GiAutoRepair, GiElectricalCrescent } from "react-icons/gi";
import { PiPersonSimpleThrowFill } from "react-icons/pi";

const Collection = () => {
  return (
    <>
      <section id="Collections" className="w-full py-25 bg-[#F5F5F5]">
        <div className="container  ">
          <div className="content-part ">
            {/* --------text-part------- */}
            <h2 className="text-[48px] font-bold font-figtree text-primary mb-6 text-center ">
              Our Impressive Collection of Cars
            </h2>
            <p className="text-lg font-medium font-figtree text-primary w-[720px] m-auto text-center mb-12">
              Ranging from elegant sedans to powerful sports cars, all carefully
              selected to provide our customers with the ultimate driving
              experience.
            </p>

            {/* ---------button part------- */}
            <div className="button flex justify-center mb-16">
              <div className="buttonPArt w-full sm:w-[700px] md:w-[800px] flex justify-between items-center text-center gap-3 flex-wrap">
                <button className="py-2 px-4 border border-gray-200 rounded-4xl text-base text-primary font-bold font-figtree hover:bg-black hover:text-white duration-700">
                  Popular Car
                </button>
                <button className="py-2 px-4 border border-gray-200 rounded-4xl text-base text-primary font-bold font-figtree hover:bg-black hover:text-white duration-700">
                  Luxury Car
                </button>
                <button className="py-2 px-4 border border-gray-200 rounded-4xl text-base text-primary font-bold font-figtree hover:bg-black hover:text-white duration-700">
                  Vintage Car
                </button>
                <button className="py-2 px-4 border border-gray-200 rounded-4xl text-base text-primary font-bold font-figtree hover:bg-black hover:text-white duration-700">
                  Family Car
                </button>
                <button className="py-2 px-4 border border-gray-200 rounded-4xl text-base text-primary font-bold font-figtree hover:bg-black hover:text-white duration-700">
                  Off-Road Car
                </button>
              </div>
            </div>
          </div>


          {/* -------car details -------- */}
          <div className="main w-[384px] h-[540px] border-2 rounded-2xl py-2 px-2 border-gray-200 hover:drop-shadow-xl duration-700 shadow-xl">
            <div className="imgpart w-full h-[260px] mb-6 ">
              <img src={audi} alt="audi car" />
            </div>
            <div className="contentPart">
              <h2 className="text-xl font-semibold font-figtree text-primary mb-3">
                {" "}
                Audi A8 L 2022
              </h2>
              <h1 className="text-3xl font-extrabold text-black mb-4  ">
                78.90{" "}
                <span className="text-base font-normal text-gray-400 font-figtree">
                  /day
                </span>
              </h1>
              <div className="details w-full h-16 bg-gray-200 rounded-xl flex justify-between items-center px-4 mb-5 ">
                <div className="speed font-normal text-xs flex flex-col gap-1 items-center text-black">
                  <button>
                    <SlSpeedometer />
                  </button>
                  <p>4000</p>
                </div>

                <div className="speed font-normal text-xs flex flex-col gap-1 items-center text-black">
                  <button>
                    <GiAutoRepair />
                  </button>
                  <p>Auto</p>
                </div>

                <div className="speed font-normal text-xs flex flex-col gap-1 items-center text-black">
                  <button>
                    <PiPersonSimpleThrowFill />
                  </button>
                  <p>4 Person</p>
                </div>

                <div className="speed font-normal text-xs flex flex-col gap-1 items-center text-black">
                  <button>
                    <GiElectricalCrescent />
                  </button>
                  <p>Electric</p>
                </div>
              </div>

              {/* ----------button-------- */}
              <div className="buttonPart text-center">
                <button className="py-4 px-30 border border-gray-200 rounded-4xl text-base text-primary font-bold font-figtree hover:bg-black hover:text-white duration-700">
                  Vintage Car
                </button>
              </div>
            </div>
          </div>


          
        </div>
      </section>
    </>
  );
};

export default Collection;
