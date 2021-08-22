import React from "react";
import { motion } from "framer-motion";

export default function HomeProjectTemplate(props) {
  return (
    <motion.div
      className="w-full rounded-2xl h-56 flex flex-col justify-center"
      style={{ background: props.projectobj.background }}
      onClick={() => {
        props.setexpanded(props.index);
      }}
      whileHover={{ scale: 1.1 }}
      layout
      layoutID={props.index}
    >
      <h1 className="text-2xl">{props.projectobj.title}</h1>
      <p className="text-1xl">{props.projectobj.description}</p>
    </motion.div>
  );
}
