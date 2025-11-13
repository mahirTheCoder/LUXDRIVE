import React from "react";

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
          <div className="main w-[384px] h-[538px] ">
            <div className="imgpart w-full h-[260px] ">
              <img src={''} alt="audi car" />
            </div>
            <div className="contentPart"></div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Collection;
