import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useWindowSize from "../Hooks/useWindowSize";
import SkillReact from "./SkillCarousel/SkillReact";
import SkillTailwind from "./SkillCarousel/SkillTailwind";
import SkillBootstrap from "./SkillCarousel/SkillBootstrap";
import SkillFramerMotion from "./SkillCarousel/SkillFramerMotion";
import SkillReactRouter from "./SkillCarousel/SkillReactRouter";
import SkillThree from "./SkillCarousel/SkillThree";
import SkillPython from "./SkillCarousel/SkillPython";

export default function SkillCarousel() {
  const borderRadius = 50;

  const skillList = useMemo(
    () => [
      <SkillReact background={"#1289A7"} borderradius={borderRadius} />,
      <SkillBootstrap background={"#A3CB38"} borderradius={borderRadius} />,
      <SkillTailwind background={"#F79F1F"} borderradius={borderRadius} />,
      <SkillFramerMotion background={"#B53471"} borderradius={borderRadius} />,
      <SkillThree background={"#D980FA"} borderradius={borderRadius} />,
      <SkillPython background={"#FFC312"} borderradius={borderRadius} />,
      <SkillReactRouter background={"#EA2027"} borderradius={borderRadius} />,
    ],
    []
  );

  const width = useWindowSize().width;

  const [displayed, setDisplayed] = useState(0);
  const [displayedElements, setDisplayedElements] = useState(undefined);

  const PositionVariants = useMemo(
    () => ({
      initialLeft: {
        x: width < 1024 ? -500 : -1000,
        scale: 0,
      },
      initialRight: {
        x: width < 1024 ? 500 : 1000,
        scale: 0,
      },
      exitLeft: {
        x: width < 1024 ? -500 : -1000,
        scale: 0,
        transition: {
          duration: 1,
          ease: "easeInOut",
        },
      },
      exitRight: {
        x: width < 1024 ? 500 : 1000,
        scale: 0,
        transition: {
          duration: 1,
          ease: "easeInOut",
        },
      },
      firstPosition: {
        x: 0,
        scale: width < 768 ? 0.6 : 0.8,
        transition: {
          duration: 0.5,
        },
      },
      hover: {
        scale: width < 768 ? 1 : 0.85,
      },
      hoverMiddle: {
        scale: 1,
      },
      // tap: {
      //   scale: 0.7,
      // },
      // tapMiddle: {
      //   scale: 1,
      // },
      secondPosition: {
        scale: 1,
        x: 0,
      },
      thirdPosition: {
        x: 0,
        scale: width < 768 ? 0.6 : 0.8,
        transition: {
          duration: 0.5,
        },
      },
    }),
    [width]
  );

  useEffect(() => {
    let skillListElements = skillList.map((el, index) => {
      if (
        index === displayed - 1 ||
        (displayed === 0 && index === skillList.length - 1)
      ) {
        return {
          position: 0,
          element: (
            <motion.div
              variants={PositionVariants}
              initial="initialLeft"
              animate="firstPosition"
              exit="exitLeft"
              whileHover="hover"
              // whileTap="tap"
              // onTap={() => {
              //   setDisplayed(index);
              // }}
              // onTapCancel={() => {
              //   setDisplayed(index);
              // }}
              onClick={() => {
                setDisplayed(index);
              }}
              layout
              key={index}
              className="cardWrapper flex justify-center absolute -right-8 md:-right-4 lg:right-5"
              style={{ gridArea: "A0" }}
            >
              <div className="card flex flex-col justify-center">
                {skillList[index]}
              </div>
            </motion.div>
          ),
        };
      } else if (index === displayed) {
        console.log("rerendered!");
        return {
          position: 1,
          element: (
            <motion.div
              variants={PositionVariants}
              animate="secondPosition"
              whileHover="hoverMiddle"
              // whileTap="tapMiddle"
              layout
              key={index}
              className="cardWrapper flex justify-center z-40 absolute"
              style={{ gridArea: "A1" }}
            >
              <div className="card flex flex-col justify-center">
                {skillList[index]}
              </div>
            </motion.div>
          ),
        };
      } else if (
        index === displayed + 1 ||
        (displayed === skillList.length - 1 && index === 0)
      ) {
        return {
          position: 2,
          element: (
            <motion.div
              variants={PositionVariants}
              initial="initialRight"
              animate="thirdPosition"
              exit="exitRight"
              whileHover="hover"
              // whileTap="tap"
              // onTap={() => {
              //   setDisplayed(index);
              // }}
              // onTapCancel={() => {
              //   setDisplayed(index);
              // }}
              onClick={() => {
                setDisplayed(index);
              }}
              key={index}
              layout
              className="cardWrapper flex justify-center absolute -left-8 md:-left-4 lg:left-5"
              style={{ gridArea: "A2" }}
            >
              <div className="card flex flex-col justify-center">
                {skillList[index]}
              </div>
            </motion.div>
          ),
        };
      } else {
        return undefined;
      }
    });

    skillListElements = skillListElements.filter((el) =>
      el !== undefined ? true : false
    );

    setDisplayedElements(skillListElements);
  }, [displayed, skillList, PositionVariants]);

  return (
    <>
      {/* <AnimateSharedLayout> */}

      {displayedElements !== undefined && (
        <AnimatePresence initial={false}>
          {displayedElements.filter((el) => el.position === 0)[0].element}
          {displayedElements.filter((el) => el.position === 1)[0].element}
          {displayedElements.filter((el) => el.position === 2)[0].element}
        </AnimatePresence>
      )}
      {/* </AnimateSharedLayout> */}
    </>
  );
}
