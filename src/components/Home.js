import React, { useEffect } from "react";
import HomeSpaceWindow from "./HomeSpaceWindow";

export default function Home() {
  useEffect(() => {
    let triangleContainer = document.getElementById("triangleContainer");
    const resizeFunction = () => {
      let width = window.innerWidth / 2;
      let triangleHeight = parseInt(
        getComputedStyle(triangleContainer).getPropertyValue(
          "--triangle-height"
        )
      );
      let angle = Math.asin(triangleHeight / width);
      let angleVal = String(angle) + "rad";
      triangleContainer.style.setProperty("--rotate-left", angleVal);

      let hypotenuse =
        String(Math.sqrt(width ** 2 + triangleHeight ** 2)) + "px";
      triangleContainer.style.setProperty("--triangle-hypotenuse", hypotenuse);
    };
    window.addEventListener("resize", resizeFunction);
    return () => {
      window.removeEventListener("resize", resizeFunction);
    };
  }, []);

  useEffect(() => {
    let event = new Event("resize");
    window.dispatchEvent(event);
  });

  return (
    <div
      id="Home"
      className="flex flex-col justify-center align-center text-center text-white relative w-full"
    >
      <div className="absolute h-screen w-full top-0">
        <HomeSpaceWindow />
      </div>
      <div className="z-10 h-screen flex flex-col justify-center">
        <h1 className="text-6xl mb-5">Hi, I am Julian Szigethy</h1>
        <h2 className="text-2xl">And I'm learning web development!</h2>
      </div>
      <div id="homeFirstSection" className="pb-5 z-20 h-96 w-full">
        <div id="triangleContainer" className="w-full relative">
          <div id="homeTriangleLeft" className="absolute z-30"></div>
          <div
            id="glowTriangleLeftWrapper"
            className="absolute flex flex-col justify-center items-center"
          >
            <div id="glowTriangleLeft" className=""></div>
          </div>
          <div id="homeTriangleRight" className="absolute z-30"></div>
          <div
            id="glowTriangleRightWrapper"
            className="absolute flex flex-col justify-center items-center"
          >
            <div id="glowTriangleRight" className=""></div>
          </div>
        </div>
        <div id="glowHider" className="w-full h-20 z-20 absolute"></div>
        <h1 className="z-40 mt-5 text-3xl relative">Who am I?</h1>
      </div>
    </div>
  );
}
