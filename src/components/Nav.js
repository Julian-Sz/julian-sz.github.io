import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  useEffect(() => {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navHeader").style.transform = "translateY(0)";
      } else {
        document.getElementById("navHeader").style.transform =
          "translateY(-100px)";
      }
      prevScrollpos = currentScrollPos;
    };
  }, []);

  return (
    <header id="navHeader" className="w-full px-5 z-50 fixed">
      <nav
        className="flex justify-around text-white mt-5 p-4 w-full mx-auto rounded-xl text-xl"
        style={{ background: "rgba(0, 0, 0, 0.8)", maxWidth: 1500 }}
      >
        <NavLink to="/" className="flex items-center px-3" exact>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
            />
            <path
              fillRule="evenodd"
              d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
            />
          </svg>
          <span className="pl-4">Home</span>
        </NavLink>
        <NavLink to="/contact" className="flex items-center px-3">
          <span>Contact</span>
        </NavLink>
      </nav>
    </header>
  );
}
