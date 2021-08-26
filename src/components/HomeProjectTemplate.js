import React from "react";
import { motion } from "framer-motion";

export default function HomeProjectTemplate(props) {
  const containerVariants = {
    initial: {
      borderRadius: "20px",
    },
    animate: {
      borderRadius: "20px",
    },
    hover: {
      y: -10,
    },
  };

  let zIndex = 10;
  if (props.isanimatingout) {
    zIndex = 40;
  }

  return (
    <motion.div
      className="closedProjectCard w-full h-64 flex flex-col justify-center items-center relative overflow-hidden cursor-pointer"
      style={{ zIndex: zIndex, background: "#130f40" }}
      onClick={() => {
        props.setexpanded(props.index);
      }}
      onLayoutAnimationComplete={() => {
        if (props.isanimatingout) {
          props.setanimatingout(false);
        }
      }}
      layoutId={`Container${props.projectobj.title}`}
      variants={containerVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
    >
      <motion.div
        layoutId={`BackgroundContainer${props.projectobj.title}`}
        className="absolute left-0 right-0 bottom-0 h-full z-20 overflow-hidden"
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
        className="relative flex flex-col items-center z-40 p-5"
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
      </motion.div>
      <div
        style={{ background: "rgba(0,0,0,0.5)" }}
        className="w-full h-full absolute top-0 left-0 z-30"
      ></div>
    </motion.div>
  );
}
