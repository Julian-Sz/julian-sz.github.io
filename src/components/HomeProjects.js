import React, { useState } from "react";
import HomeProjectTemplate from "./HomeProjectTemplate";
import HomeProjectTemplateExpanded from "./HomeProjectTemplateExpanded";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";

export default function HomeProjects() {
  const projectObjArray = [
    {
      title: "Unreal ice cream shop",
      description: "some description",
      details:
        "This project was created to train my skills of React-Router, React and Framer Motion",
      background: "#f00",
      link: "",
    },
    {
      title: "Drum Machine",
      description: "some description",
      details: "some details",
      background: "#f00",
      link: "",
    },
    {
      title: "Bootstrap Testwebsite",
      description: "some description",
      details: "some details",
      background: "#f00",
      link: "",
    },
    {
      title: "Pomodoro Clock",
      description: "some description",
      details: "some details",
      background: "#f00",
      link: "",
    },
    {
      title: "Calculator",
      description: "some description",
      details: "some details",
      background: "#f00",
      link: "",
    },
    {
      title: "Random quote machine",
      description: "some description",
      details: "some details",
      background: "#f00",
      link: "",
    },
    {
      title: "Project 7",
      description: "some description",
      details: "some details",
      background: "#f00",
      link: "",
    },
    {
      title: "Project 8",
      description: "some description",
      details: "some details",
      background: "#f00",
      link: "",
    },
    {
      title: "Project 9",
      description: "some description",
      details: "some details",
      background: "#f00",
      link: "",
    },
  ];

  const [expanded, setExpanded] = useState(undefined);
  const [isAnimatingOut, setAnimatingOut] = useState();

  return (
    <div>
      <h1 className="text-6xl my-5 md:text-left md:ml-10 pb-5">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <AnimateSharedLayout type="crossfade">
          <AnimatePresence>
            {projectObjArray.map((el, index) => {
              if (index !== expanded) {
                return (
                  <HomeProjectTemplate
                    projectobj={el}
                    key={el.title}
                    index={index}
                    setexpanded={setExpanded}
                    isanimatingout={isAnimatingOut === index}
                    setanimatingout={setAnimatingOut}
                  />
                );
              } else {
                return (
                  <HomeProjectTemplateExpanded
                    projectobj={el}
                    key={el.title}
                    index={index}
                    setexpanded={setExpanded}
                    setanimatingout={setAnimatingOut}
                  />
                );
              }
            })}
          </AnimatePresence>
        </AnimateSharedLayout>
      </div>
    </div>
  );
}
