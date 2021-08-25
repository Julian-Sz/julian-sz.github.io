import React from "react";
import { motion } from "framer-motion";

export default function HomeProjectTemplate(props) {
  const containerVariants = {
    animate: {
      borderRadius: "20px",
    },
  };

  let zIndex = 10;
  if (props.isanimatingout) {
    zIndex = 40;
  }
  return (
    <motion.div
      className="w-full h-56 flex flex-col justify-center items-center relative overflow-hidden"
      style={{ zIndex: zIndex }}
      onClick={() => {
        props.setexpanded(props.index);
      }}
      onLayoutAnimationComplete={() => {
        if (props.isanimatingout) {
          console.log("animation completed");
          props.setanimatingout(false);
        }
      }}
      layoutId={`Container${props.projectobj.title}`}
      variants={containerVariants}
      animate="animate"
    >
      <motion.div
        layoutId={`Background${props.projectobj.title}`}
        style={{ background: props.projectobj.background }}
        className="absolute left-0 right-0 top-0 bottom-0 z-20"
      ></motion.div>
      <motion.div className="relative flex flex-col items-center z-30">
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
      <motion.div
        layoutId={`RightContainerBackground${props.projectobj.title}`}
        className="w-full h-full bg-gray-400 absolute"
      ></motion.div>
    </motion.div>
  );
}
