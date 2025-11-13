import React from "react";
import bannerImg from "../../public/Images/Banner.png";

const Banner = () => {
  return (
    <section
      id="banner"
      className="relative w-full h-[450px] sm:h-[550px] md:h-[650px] lg:h-[833px] overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={bannerImg}
          alt="bannerImg"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Optional Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex justify-center items-start h-full pt-10 sm:pt-12 md:pt-16 lg:pt-20 px-4">
        <div className="text-center">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px]
                       font-bold font-figtree text-white
                       max-w-[95%] sm:max-w-[700px] md:max-w-[850px] lg:max-w-[982px] mx-auto"
          >
            Discover the world on wheels with our car rental service
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Banner;
