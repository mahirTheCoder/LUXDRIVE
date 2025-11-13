import React from "react";
import bannerImg from "../../public/Images/Banner.png";

const Banner = () => {
  return (
    <section id="banner" className=" w-full h-[833px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={bannerImg}
          alt="bannerImg"
          className="w-full h-[833px] object-cover"
        />
      </div>

      {/* Content */}
      <div className="container relative z-20 flex justify-center items-start h-full pt-5">
        <div className="bannerContent text-center">
          <h1 className="text-[48px] font-bold font-figtree text-white max-w-[982px] mx-auto">
            Discover the world on wheels with our car rental service
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Banner;
