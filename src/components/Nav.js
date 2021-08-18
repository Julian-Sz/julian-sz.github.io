import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const NavLinkClasses =
    "p-2 border-solid border-4 rounded-md border-white hover:bg-white hover:text-black md:text-xl";
  return (
    <div className="w-full px-5 z-50 fixed">
      <div className="flex justify-around bg-gray-500 text-white mt-5 p-3 w-full">
        <NavLink
          exact={true}
          to="/"
          className={NavLinkClasses}
          activeClassName="activeNavLink"
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={NavLinkClasses}
          activeClassName="activeNavLink"
        >
          About me
        </NavLink>
        <NavLink
          to="/contact"
          className={NavLinkClasses}
          activeClassName="activeNavLink"
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
}
