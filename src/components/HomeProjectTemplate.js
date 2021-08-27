import React from "react";
import { m } from "framer-motion";

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
    <m.div
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
      <m.div
        layoutId={`BackgroundContainer${props.projectobj.title}`}
        className="absolute left-0 right-0 bottom-0 h-full z-20 overflow-hidden"
      >
        <m.div
          layoutId={`BackgroundInnerContainer${props.projectobj.title}`}
          className="absolute -right-full -left-full top-0 bottom-0"
        >
          <m.img
            layoutId={`BackgroundImage${props.projectobj.title}`}
            src={props.projectobj.background}
            className="h-full mx-auto"
            alt=""
          ></m.img>
        </m.div>
      </m.div>
      <m.div
        layoutId={`RightContainer${props.projectobj.title}`}
        className="relative flex flex-col items-center z-40 p-5"
      >
        <m.h1 layoutId={`Title${props.projectobj.title}`} className="text-2xl">
          {props.projectobj.title}
        </m.h1>
        <m.p
          layoutId={`Description${props.projectobj.title}`}
          className="text-1xl"
        >
          {props.projectobj.description}
        </m.p>
      </m.div>
      <div
        style={{ background: "rgba(0,0,0,0.5)" }}
        className="w-full h-full absolute top-0 left-0 z-30"
      ></div>
    </m.div>
  );
}
