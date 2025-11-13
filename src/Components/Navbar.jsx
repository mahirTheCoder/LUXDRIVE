import React from "react";
import { TbMenu } from "react-icons/tb";
import logo from "../../public/Images/Heading.png";
const Navbar = () => {
  return (
    <>
      <section id="navbar">
        <nav className="py-5 sticky bg-[#000] px-4">
          <div className="container">
            <div className="nav-content flex items-center justify-between">

              {/* ----menu item--------- */}
              <div className="menuItems">
                <button className="text-white lg:text-5xl text-3xl ">
                  <TbMenu />
                </button>
              </div>

              {/* -------logo part----- */}
              <div className="logo lg:w-44.5 w-25  lg:block text-white">
                <img src={logo} alt="logoImg" />
              </div>

              {/* -----login button-------- */}
              <div className="button">
                <button className="text-white border font-figtree py-1 px-2  lg:py-2 lg:px-6 rounded-full lg:text-base text-xs font-semibold">
                  {" "}
                  Login/Register{" "}
                </button>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
