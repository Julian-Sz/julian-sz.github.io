import React from "react";
import { motion } from "framer-motion";

export default function HomeProjectTemplateExpanded(props) {
  return (
    <>
      <div className="h-56"></div>
      <motion.div
        className="w-full fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
        style={{ background: "rgba(0, 0, 0, 0.5)" }}
        onClick={() => {
          props.setexpanded(undefined);
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
          initial={{ borderRadius: "2rem" }}
          // animate={{ borderRadius: "2rem" }}
          className="flex flex-col md:flex-row overflow-hidden"
        >
          <motion.div
            layoutId={`Background${props.projectobj.title}`}
            style={{ background: props.projectobj.background }}
            className="flex-1"
          ></motion.div>
          <motion.div
            layoutId={`RightContainer${props.projectobj.title}`}
            className="flex-1 flex flex-col justify-center bg-gray-400"
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
        </motion.div>
      </motion.div>
    </>
  );
}
