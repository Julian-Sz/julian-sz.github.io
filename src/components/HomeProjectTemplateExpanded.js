import React from "react";
import { m } from "framer-motion";
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
      <m.div
        id="expandedProjectCard"
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
        <m.div
          style={{
            width: "80vw",
            maxWidth: "1600px",
            height: width < 768 ? "80vh" : "50vh",
            background: "#130f40",
          }}
          onClick={(e) => {
            e.stopPropagation();
          }}
          layoutId={`Container${props.projectobj.title}`}
          className="overflow-hidden relative rounded-2xl"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          <m.div
            layoutId={`BackgroundContainer${props.projectobj.title}`}
            className="absolute left-0 top-0 flex-1 w-full h-3/6 md:w-6/12 md:h-full z-40 overflow-hidden"
          >
            <m.div
              layoutId={`BackgroundInnerContainer${props.projectobj.title}`}
              className="absolute -right-full -left-full top-0 bottom-0"
            >
              <m.img
                layoutId={`BackgroundImage${props.projectobj.title}`}
                src={props.projectobj.background}
                className="h-full mx-auto"
              ></m.img>
            </m.div>
          </m.div>
          <m.div
            layoutId={`RightContainer${props.projectobj.title}`}
            className="absolute right-0 bottom-0 md:w-6/12 flex flex-col justify-start z-40 h-3/6 md:h-full items-center md:items-start md:text-left px-2 md:px-5 overflow-y-scroll md:overflow-y-hidden py-5"
          >
            <m.h1
              layoutId={`Title${props.projectobj.title}`}
              className="text-2xl md:text-4xl mt-5"
            >
              {props.projectobj.title}
            </m.h1>
            <m.p
              layoutId={`Description${props.projectobj.title}`}
              className="md:text-xl mt-5"
            >
              {props.projectobj.description}
            </m.p>
            <m.p
              variants={detailsVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="mt-5 md:mt-20 md:text-xl"
            >
              {props.projectobj.details}
            </m.p>
            <m.div
              variants={detailsVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex flex-col pl-5 md:pb-20 mt-auto text-xl md:text-3xl"
            >
              <a
                href={props.projectobj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 flex items-end"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="h-8 pr-5"
                >
                  <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                </svg>
                <span>Visit the website</span>
              </a>
              <a
                href={props.projectobj.codelink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 flex items-end"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="h-8 pr-5"
                >
                  <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                </svg>
                <span>View the code</span>
              </a>
            </m.div>
          </m.div>
          <m.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
            style={{ backgroundColor: "#130f40" }}
            className="absolute top-5 right-5 h-10 cursor-pointer hover:text-gray-400 z-50 md:bg-transparent rounded-full"
            exit={{ scale: 0 }}
            onClick={() => {
              props.setexpanded(undefined);
              props.setanimatingout(props.index);
            }}
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </m.svg>
        </m.div>
      </m.div>
    </>
  );
}
