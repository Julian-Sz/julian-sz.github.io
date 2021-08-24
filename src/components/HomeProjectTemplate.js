import React from "react";
import { motion } from "framer-motion";

export default function HomeProjectTemplate(props) {
  return (
    <motion.div
      className="w-full h-56 flex flex-col justify-center relative overflow-hidden"
      onClick={() => {
        props.setexpanded(props.index);
      }}
      whileHover={{ scale: 1.1 }}
      layoutId={`Container${props.projectobj.title}`}
      initial={{ borderRadius: "2rem" }}
      // animate={{ borderRadius: "2rem" }}
    >
      <motion.div
        layoutId={`Background${props.projectobj.title}`}
        style={{ background: props.projectobj.background }}
        className="absolute left-0 right-0 top-0 bottom-0 z-20"
      ></motion.div>
      <div className="relative z-30">
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
      </div>
      <motion.div
        layoutId={`RightContainer${props.projectobj.title}`}
        className="w-full h-full bg-gray-400 absolute"
      ></motion.div>
    </motion.div>
  );
}
