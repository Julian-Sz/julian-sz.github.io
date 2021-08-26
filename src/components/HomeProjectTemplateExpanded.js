import React from "react";
import { motion } from "framer-motion";
import useWindowSize from "../Hooks/useWindowSize.js";

export default function HomeProjectTemplateExpanded(props) {
  const detailsVariants = {
    initial: {
      opacity: 0,
      scale: 0.4,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.4,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.4,
    },
  };
  const containerVariants = {
    initial: {
      borderRadius: "20px",
    },
    animate: {
      borderRadius: "20px",
    },
  };

  const backgroundVariants = {
    initial: { backgroundColor: "rgba(0, 0, 0, 0)" },
    animate: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    exit: {
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
  };

  const { width } = useWindowSize();
  return (
    <>
      <motion.div
        className="w-full fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
        onClick={() => {
          props.setexpanded(undefined);
          props.setanimatingout(props.index);
        }}
        variants={backgroundVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.div
          style={{
            width: "80vw",
            maxWidth: "1600px",
            height: width < 768 ? "80vh" : "50vh",
          }}
          onClick={(e) => {
            e.stopPropagation();
          }}
          layoutId={`Container${props.projectobj.title}`}
          className="flex flex-col md:flex-row overflow-hidden justify-end relative bg-blue-500"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          <motion.div
            layoutId={`BackgroundContainer${props.projectobj.title}`}
            className="absolute left-0 top-0 flex-1 w-full h-3/6 md:w-6/12 md:h-full z-40 overflow-hidden"
          >
            <motion.div
              layoutId={`BackgroundInnerContainer${props.projectobj.title}`}
              className="absolute -right-full -left-full top-0 bottom-0"
            >
              <motion.img
                layoutId={`BackgroundImage${props.projectobj.title}`}
                src={props.projectobj.background}
                className="h-full mx-auto"
              ></motion.img>
            </motion.div>
          </motion.div>
          <motion.div
            layoutId={`RightContainer${props.projectobj.title}`}
            className="flex flex-col md:w-6/12 justify-center z-50 h-3/6 md:h-full items-center px-2 md:px-0"
          >
            <motion.h1
              layoutId={`Title${props.projectobj.title}`}
              className="text-2xl"
            >
              {props.projectobj.title}
            </motion.h1>
            <motion.p
              layoutId={`Description${props.projectobj.title}`}
              className="text-1xl"
            >
              {props.projectobj.description}
            </motion.p>
            <motion.p
              variants={detailsVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {props.projectobj.details}
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
