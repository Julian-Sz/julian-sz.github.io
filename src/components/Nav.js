import React, { useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Nav() {
  const NavLinkClasses =
    "navLink p-2 rounded-md hover:bg-white hover:text-black md:text-xl";

  function elementInViewport(el) {
    var top = el.offsetTop;
    var height = el.offsetHeight;

    while (el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
    }

    return (
      top >= window.pageYOffset &&
      top + height <= window.pageYOffset + window.innerHeight
    );
  }

  useEffect(() => {
    function handleClasses() {
      let navLinks = document.getElementsByClassName("navLink");

      for (let navLink of navLinks) {
        let el = document.getElementById(navLink.id.slice(3));
        if (el !== null) {
          if (elementInViewport(el)) {
            navLink.classList.add("activeNavLink");
          } else {
            navLink.classList.remove("activeNavLink");
          }
        }
      }
    }
    window.addEventListener("scroll", handleClasses);
    return () => {
      window.removeEventListener("scroll", handleClasses);
    };
  });

  useEffect(() => {
    let e = new Event("scroll");
    window.dispatchEvent(e);
  });

  console.log("hi");
  const location = useLocation();
  return (
    <header className="w-full px-5 z-50 fixed">
      <nav
        className="flex justify-around text-white mt-5 p-4 w-full mx-auto"
        style={{ maxWidth: "2000px", background: "#0B1016" }}
      >
        <NavLink
          exact={true}
          to="/"
          className={NavLinkClasses}
          id="NavhomeTopSection"
          // activeClassName="activeNavLink"
          onClick={() => {
            document.querySelector("#homeTopSection").scrollIntoView();
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/"
          className={NavLinkClasses}
          id="NavhomeFirstSection"
          // activeClassName="activeNavLink"
          onClick={() => {
            document.querySelector("#homeFirstSection").scrollIntoView();
          }}
        >
          About me
        </NavLink>
        <NavLink
          to="/"
          className={NavLinkClasses}
          id="NavhomeSkillSection"
          // activeClassName="activeNavLink"
          onClick={() => {
            document.querySelector("#homeSkillSection").scrollIntoView();
          }}
        >
          My Skills
        </NavLink>
        <NavLink
          to="/"
          className={NavLinkClasses}
          id="NavhomeProjectsSection"
          // activeClassName="activeNavLink"
          onClick={() => {
            document.querySelector("#homeProjectsSection").scrollIntoView();
          }}
        >
          My Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={NavLinkClasses}
          // activeClassName="activeNavLink"
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
}
