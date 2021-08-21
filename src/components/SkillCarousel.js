import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SkillCarousel() {
  const skillList = useMemo(() => [1, 2, 3, 4, 5, 6], []);

  const [displayed, setDisplayed] = useState(3);
  const [displayedElements, setDisplayedElements] = useState(undefined);

  const PositionVariants = useMemo(
    () => ({
      initialLeft: {
        x: -500,
        scale: 0.8,
      },
      initialRight: {
        x: 500,
        scale: 0.8,
      },
      firstPosition: {
        x: 0,
        scale: 0.8,
        transition: {
          duration: 0.5,
        },
      },
      hover: {
        opacity: 0.3,
      },
      secondPosition: {
        scale: 1,
        scaleX: 1.2,
        x: 0,
      },
      thirdPosition: {
        x: 0,
        scale: 0.8,
        transition: {
          duration: 0.5,
        },
      },
    }),
    []
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
              exit="initialLeft"
              whileHover="hover"
              layout
              key={index}
              className="cardWrapper w-full flex justify-center absolute"
              onClick={() => {
                setDisplayed(index);
              }}
              style={{ gridArea: "A0" }}
            >
              <div className="card flex flex-col justify-center">
                <p>{skillList[index]}</p>
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
              layout
              key={index}
              className="cardWrapper w-full flex justify-center z-40 absolute"
              style={{ gridArea: "A1" }}
            >
              <div className="card flex flex-col justify-center">
                <p>{skillList[index]}</p>
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
              exit="initialRight"
              whileHover="hover"
              key={index}
              layout
              className="cardWrapper w-full flex justify-center absolute"
              onClick={() => {
                setDisplayed(index);
              }}
              style={{ gridArea: "A2" }}
            >
              <div className="card flex flex-col justify-center">
                <p>{skillList[index]}</p>
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
