import React from "react";
import { TbMenu } from "react-icons/tb";
import logo from "../../public/Images/Heading.png";
import { Link } from "react-router";
const Navbar = () => {
  return (
    <>
      <section id="navbar">
        <nav className="py-5 sticky bg-black px-4">
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
                <Link to='/' className="text-white border border-gray-600 font-figtree py-2.5 px-3  lg:py-3.5 lg:px-6 rounded-full lg:text-base text-xs font-semibold">
                  {" "}
                  Login/Register{" "}
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
