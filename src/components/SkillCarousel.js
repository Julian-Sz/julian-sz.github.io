import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useWindowSize from "../Hooks/useWindowSize";
import SkillFramerMotion from "./SkillCarousel/SkillFramerMotion";
import SkillTemplate from "./SkillCarousel/SkillTemplate";
import reactRouterLogo from "./SkillCarousel/Images/react-router-logo.png";
import bootstrapLogo from "./SkillCarousel/Images/bootstrap-logo.svg";
import tailwindLogo from "./SkillCarousel/Images/tailwind-logo.svg";
import threeLogo from "./SkillCarousel/Images/three-logo.svg";
import reactLogo from "./SkillCarousel/Images/logo512.png";

export default function SkillCarousel() {
  // const borderRadius = 50;
  const width = useWindowSize().width;

  const mobile = width < 768 ? true : false;

  const skillList = useMemo(() => {
    const reactRouterObj = {
      logo: reactRouterLogo,
      title: "React Router",
      details: "Add details here",
      background: "#EA2027",
    };

    const bootstrapObj = {
      logo: bootstrapLogo,
      title: "Bootstrap",
      details:
        "With Bootstrap, you can easily create responsive websites. It has many useful pre-built components that are easy to use.",
      background: "#8e44ad",
    };

    const tailwindObj = {
      logo: tailwindLogo,
      title: "Tailwind CSS",
      details:
        "Tailwind CSS is a utility-based library. Instead of writing normal CSS,        Tailwind has pre-defined classes for nearly every CSS property.",
      background: "#009432",
    };

    const threeObj = {
      logo: threeLogo,
      title: "Three.js",
      details:
        "With Three.js, you can make 3D animations in the webbrowser.        React-three-fiber makes it possible to use this superpower with React. Just look at that 3D-animation up there!",
      background: "#0652DD",
    };

    const reactObj = {
      logo: reactLogo,
      title: "React",
      details:
        "React is a javascript library that enables you to create reusable components and manage their state.",
      background: "#1289A7",
    };

    const framerMotionObj = {
      title: "Framer Motion",
      details:
        "Framer motion is a powerful animation library that works hand-in-hand with react. It powers this carousel and many other things on this website.",
      background: "#B53471",
    };

    return [
      <SkillTemplate skillobj={reactObj} mobile={mobile} />,
      <SkillTemplate skillobj={bootstrapObj} mobile={mobile} />,
      <SkillTemplate skillobj={tailwindObj} mobile={mobile} />,
      <SkillFramerMotion skillobj={framerMotionObj} mobile={mobile} />,
      <SkillTemplate skillobj={threeObj} mobile={mobile} />,
      <SkillTemplate skillobj={reactRouterObj} mobile={mobile} />,
    ];
  }, [mobile]);

  const [displayed, setDisplayed] = useState(0);
  const [displayedElements, setDisplayedElements] = useState(undefined);

  const PositionVariants = useMemo(
    () => ({
      initialLeft: {
        x: width < 1024 ? -500 : -1000,
        zIndex: 30,
        scale: 0,
      },
      initialRight: {
        x: width < 1024 ? 500 : 1000,
        zIndex: 30,
        scale: 0,
      },
      exitLeft: {
        x: width < 1024 ? -500 : -1000,
        scale: 0,
        zIndex: 20,
        transition: {
          duration: 1,
          ease: "easeInOut",
        },
      },
      exitRight: {
        x: width < 1024 ? 500 : 1000,
        scale: 0,
        zIndex: 20,
        transition: {
          duration: 1,
          ease: "easeInOut",
        },
      },
      firstPosition: {
        x: 0,
        scale: width < 768 ? 0.6 : 0.8,
        zIndex: 30,
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
      secondPosition: {
        scale: 1,
        x: 0,
      },
      thirdPosition: {
        x: 0,
        scale: width < 768 ? 0.6 : 0.8,
        zIndex: 30,
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
        return {
          position: 1,
          element: (
            <motion.div
              variants={PositionVariants}
              animate="secondPosition"
              whileHover="hoverMiddle"
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
      {displayedElements !== undefined && (
        <AnimatePresence initial={false}>
          {displayedElements.filter((el) => el.position === 0)[0].element}
          {displayedElements.filter((el) => el.position === 1)[0].element}
          {displayedElements.filter((el) => el.position === 2)[0].element}
        </AnimatePresence>
      )}
    </>
  );
}
