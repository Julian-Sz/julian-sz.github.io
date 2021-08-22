import React from "react";
import { motion } from "framer-motion";

export default function HomeProjectTemplateExpanded(props) {
  return (
    <>
      <div className="h-56"></div>
      <motion.div
        className="w-full fixed top-0 left-0 right-0 bottom-0 z-50 flex flex-col justify-center items-center"
        style={{ background: "rgba(0, 0, 0, 0.5)" }}
        onClick={() => {
          props.setexpanded(undefined);
        }}
        layout
        layoutID={props.index}
      >
        <div
          style={{
            background: props.projectobj.background,
            width: "80vw",
            height: "50vh",
          }}
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="rounded-2xl"
        >
          <h1 className="text-2xl">{props.projectobj.title}</h1>
          <p className="text-1xl">{props.projectobj.description}</p>
        </div>
      </motion.div>
    </>
  );
}
