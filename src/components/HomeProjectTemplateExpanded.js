import React from "react";
import { motion } from "framer-motion";

export default function HomeProjectTemplateExpanded(props) {
  const detailsVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
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
  return (
    <>
      <div className="h-56"></div>
      <motion.div
        className="w-full fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
        style={{ background: "rgba(0, 0, 0, 0.5)" }}
        onClick={() => {
          props.setexpanded(undefined);
          props.setanimatingout(props.index);
        }}
      >
        <motion.div
          style={{
            width: "80vw",
            height: "50vh",
          }}
          onClick={(e) => {
            e.stopPropagation();
          }}
          layoutId={`Container${props.projectobj.title}`}
          className="flex flex-col md:flex-row overflow-hidden items-center relative"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          <motion.div
            layoutId={`Background${props.projectobj.title}`}
            style={{ background: props.projectobj.background }}
            className="flex-1 h-3/6 w-full md:w-6/12 md:h-full z-40"
          ></motion.div>
          <motion.div
            layoutId={`RightContainerBackground${props.projectobj.title}`}
            className="absolute h-3/6 md:h-full w-full md:w-6/12 right-0 md:top-0 bottom-0 bg-gray-400"
          ></motion.div>
          <motion.div
            layoutId={`RightContainer${props.projectobj.title}`}
            className="flex-1 flex flex-col justify-center z-50 h-3/6 md:h-full items-center"
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
            // variants={detailsVariants}
            // initial="initial"
            // animate="animate"
            // exit="exit"
            >
              {props.projectobj.details}
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
