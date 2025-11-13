import React from "react";
import { TbMenu } from "react-icons/tb";
import logo from "../../public/Images/Heading.png";
const Navbar = () => {
  return (
    <>
      <section id="navbar">
        <nav className="py-10 sticky bg-primary ">
          <div className="container">
            <div className="nav-content flex items-center justify-between">
              <div className="menuItems">
                <button className="text-white text-5xl ">
                  <TbMenu />
                </button>
              </div>
              <div className="logo text-white">
                <img src={logo} alt="logoImg" />
              </div>
              <div className="button">
                <button className="text-white border font-figtree font-bold py-2 px-6 rounded-full">
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
