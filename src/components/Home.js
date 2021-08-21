import React, { useEffect } from "react";
import HomeSpaceWindow from "./HomeSpaceWindow";
import SkillCarousel from "./SkillCarousel";

export default function Home() {
  useEffect(() => {
    let triangleContainer =
      document.getElementsByClassName("triangleContainer")[0];
    let homeContainer = document.getElementById("Home");
    const resizeFunction = () => {
      setTimeout(() => {
        let width = triangleContainer.clientWidth / 2;
        let triangleHeight = parseInt(
          getComputedStyle(triangleContainer).getPropertyValue(
            "--triangle-height"
          )
        );
        let angle = Math.asin(triangleHeight / width);
        let angleVal = String(angle) + "rad";
        homeContainer.style.setProperty("--rotate-left", angleVal);

        let hypotenuse =
          String(Math.sqrt(width ** 2 + triangleHeight ** 2)) + "px";
        homeContainer.style.setProperty("--triangle-hypotenuse", hypotenuse);
      }, 100);
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
    <main
      id="Home"
      className="flex flex-col justify-center align-center text-center text-white relative w-full overflow-x-hidden"
    >
      <div className="absolute h-screen w-full top-0">
        <HomeSpaceWindow />
      </div>
      <section className="z-10 h-screen flex flex-col justify-center">
        <h1 className="text-6xl mb-5">Hi, I am Julian Szigethy</h1>
        <h2 className="text-2xl">And I'm learning web development!</h2>
      </section>
      <section id="homeFirstSection" className="z-20 w-full">
        <div className="triangleContainer w-full relative h-0">
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
          <div id="glowingArrowContainer" className="z-50 relative">
            {[0, 50, 100].map((el, index) => {
              return (
                <div className="glowingArrow absolute" key={index}>
                  <div className="glowingArrowLeft flex">
                    <div className="glowingArrowLine mr-auto"></div>
                  </div>
                  <div className="glowingArrowRight flex">
                    <div className="glowingArrowLine ml-auto"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div id="glowHider" className="w-full h-20 z-20 absolute"></div>
        <section id="firstSection" className="flex flex-col z-20 relative">
          <h1 className="z-40 mt-5 text-3xl relative">Who am I?</h1>
          <div className="z-40 relative w-11/12 md:w-6/12 mb-32 self-center mt-10">
            <p id="cyanBoxShadow" className="p-5 rounded-2xl">
              Currently, I am attending HTL Waidhofen in the department of
              mechanical engineering. In my free time, I am coding and designing
              websites and web apps, like this one.
            </p>
          </div>
        </section>
        <div className="triangleContainer w-full relative h-0 z-10">
          <div id="homeTriangleLeft2" className="absolute z-30"></div>
          <div
            id="glowTriangleLeftWrapper2"
            className="absolute flex flex-col justify-center items-center"
          >
            <div id="glowTriangleLeft2" className=""></div>
          </div>

          <div id="homeTriangleRight2" className="absolute z-30"></div>
          <div
            id="glowTriangleRightWrapper2"
            className="absolute flex flex-col justify-center items-center"
          >
            <div id="glowTriangleRight2" className=""></div>
          </div>
        </div>
      </section>
      <section id="homeSkillSection" className="">
        <h1 className="text-6xl text-left ml-10 pb-5">My Skills</h1>
        <div className="carousel grid grid-cols-3 relative">
          <SkillCarousel />
        </div>
      </section>
    </main>
  );
}
