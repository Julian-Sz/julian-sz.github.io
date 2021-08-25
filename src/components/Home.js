import React, { useEffect } from "react";
import HomeSpaceWindow from "./HomeSpaceWindow";
import SkillCarousel from "./SkillCarousel";
import HomeProjects from "./HomeProjects";
import HomeFirstSection from "./HomeFirstSection";
import { motion } from "framer-motion";

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

  const homeVariants = {
    initial: {
      x: "-150vw",
    },
    animate: {
      x: 0,
      transition: {
        duration: 2,
      },
    },
    exit: {
      x: "-150vw",
      transition: {
        duration: 2,
      },
    },
  };
  return (
    <motion.main
      variants={homeVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      id="Home"
      className="flex flex-col justify-center align-center text-center text-white relative w-full overflow-x-hidden"
    >
      <div id="homeTopSection" className="absolute h-screen w-full top-0">
        <HomeSpaceWindow />
      </div>
      <section className="z-10 h-screen flex flex-col justify-center font-bold">
        <h1 id="homeHeading" className="text-6xl mb-5">
          Hi, I am Julian Szigethy
        </h1>
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
          <HomeFirstSection />
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
      <section id="homeSkillSection" className="p-5">
        <h1 className="text-6xl my-5 md:text-left md:ml-10 pb-10">My Skills</h1>
        <div className="carousel grid relative">
          <SkillCarousel />
        </div>
      </section>
      <section id="homeProjectsSection" className="p-5">
        <HomeProjects />
      </section>
    </motion.main>
  );
}
