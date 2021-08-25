import React, { useState } from "react";
import HomeProjectTemplate from "./HomeProjectTemplate";
import HomeProjectTemplateExpanded from "./HomeProjectTemplateExpanded";
import { AnimateSharedLayout } from "framer-motion";

export default function HomeProjects() {
  const projectObjArray = [
    {
      title: "Project 1",
      description: "some description",
      background: "#f00",
      link: "",
    },
    {
      title: "Project 2",
      description: "some description",
      background: "#f00",
      link: "",
    },
    {
      title: "Project 3",
      description: "some description",
      background: "#f00",
      link: "",
    },
    {
      title: "Project 4",
      description: "some description",
      background: "#f00",
      link: "",
    },
    {
      title: "Project 5",
      description: "some description",
      background: "#f00",
      link: "",
    },
    {
      title: "Project 6",
      description: "some description",
      background: "#f00",
      link: "",
    },
    {
      title: "Project 7",
      description: "some description",
      background: "#f00",
      link: "",
    },
    {
      title: "Project 8",
      description: "some description",
      background: "#f00",
      link: "",
    },
    {
      title: "Project 9",
      description: "some description",
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
        </AnimateSharedLayout>
      </div>
    </div>
  );
}
