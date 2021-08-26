import React, { useState } from "react";
import HomeProjectTemplate from "./HomeProjectTemplate";
import HomeProjectTemplateExpanded from "./HomeProjectTemplateExpanded";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import IceCreamImg from "./HomeProjectsImages/ice-cream-shop.png";
import DrumMachineImg from "./HomeProjectsImages/drum-machine.png";
import PomodoroClockImg from "./HomeProjectsImages/pomodoro-clock.png";
import CalculatorImg from "./HomeProjectsImages/calculator.png";
import QuoteMachineImg from "./HomeProjectsImages/random-quote-machine.png";
import MarkdownViewerImg from "./HomeProjectsImages/markdown-viewer.png";
import BootstrapTestImg from "./HomeProjectsImages/bootstrap-test.png";
import PythonStuffImg from "./HomeProjectsImages/python-stuff.png";

export default function HomeProjects() {
  const projectObjArray = [
    {
      title: "Unreal ice cream shop",
      description: "Order an unreal ice cream!",
      details:
        "I've created this project to train my skills of React-Router, React and Framer Motion. It contains multiple,  cross-animated pages which simulate an ordering process.",
      background: IceCreamImg,
      link: "https://julian-sz.github.io/Ice-Cream-Shop/#/",
      codelink: "https://github.com/Julian-Sz/Ice-Cream-Shop",
    },
    {
      title: "Drum Machine",
      description: "Play the drums in your browser!",
      details:
        "This project is part of the FreeCodeCamp.org curriculum. It uses React and Framer Motion. You can play the drums on the screen or on the keyboard",
      background: DrumMachineImg,
      link: "https://julian-sz.github.io/FCC-Drum-Machine/",
      codelink: "https://github.com/Julian-Sz/FCC-Drum-Machine",
    },

    {
      title: "Pomodoro Clock",
      description: "It's like a timer, but different!",
      details:
        "This project is part of the FreeCodeCamp.org curriculum. It has alternating timers, and you can set those individually. Powered by React.",
      background: PomodoroClockImg,
      link: "https://julian-sz.github.io/FCC-Pomodoro-Clock/",
      codelink: "https://github.com/Julian-Sz/FCC-Pomodoro-Clock",
    },
    {
      title: "Calculator",
      description: "It has point before line calculation!",
      details:
        "This project is part of the FreeCodeCamp.org curriculum. It uses Bootstrap and React.",
      background: CalculatorImg,
      link: "https://julian-sz.github.io/FCC-Calculator/",
      codelink: "https://github.com/Julian-Sz/FCC-Calculator",
    },
    {
      title: "Random quote machine",
      description: "Get random quotes!",
      details:
        "This project is part of the FreeCodeCamp.org curriculum. It uses React, Redux and Bootstrap.",
      background: QuoteMachineImg,
      link: "https://codepen.io/julian-sz/full/oNZwGRG",
      codelink: "https://codepen.io/julian-sz/pen/oNZwGRG",
    },
    {
      title: "Markdown Previewer",
      description: "View Markdown in the browser!",
      details:
        "This project is part of the FreeCodeCamp.org curriculum. Markdown is a simple markup language, and you can format text with it using a plain-text editor. On this website, you can preview the Markdown and check how it looks like.",
      background: MarkdownViewerImg,
      link: "https://codepen.io/julian-sz/full/poedvwE",
      codelink: "https://codepen.io/julian-sz/pen/poedvwE",
    },
    {
      title: "Bootstrap Testwebsite",
      description: "",
      details: "Just for learning Bootstrap.",
      background: BootstrapTestImg,
      link: "https://julian-sz.github.io/Bootstrap-Test/",
      codelink: "https://github.com/Julian-Sz/Bootstrap-Test",
    },
    {
      title: "Interesting stuff in Python",
      description: "One of my first websites",
      details:
        "It's one of my first websites, and I've learned a lot about Python while creating it.",
      background: PythonStuffImg,
      link: "https://codepen.io/julian-sz/full/bGgXZxM",
      codelink: "https://codepen.io/julian-sz/pen/bGgXZxM",
    },
  ];

  const [expanded, setExpanded] = useState(undefined);
  const [isAnimatingOut, setAnimatingOut] = useState();

  return (
    <div>
      <h1 className="text-6xl my-5 md:text-left md:ml-10 pb-5">My Projects</h1>
      <div
        style={{ maxWidth: "1500px" }}
        id="projectsGrid"
        className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto"
      >
        <AnimateSharedLayout type="crossfade">
          {projectObjArray.map((el, index) => {
            return (
              <div key={el.title}>
                {index !== expanded && (
                  <HomeProjectTemplate
                    projectobj={el}
                    key={el.title}
                    index={index}
                    setexpanded={setExpanded}
                    isanimatingout={isAnimatingOut === index}
                    setanimatingout={setAnimatingOut}
                  />
                )}
                <AnimatePresence>
                  {index === expanded && (
                    <HomeProjectTemplateExpanded
                      projectobj={el}
                      key={el.title}
                      index={index}
                      setexpanded={setExpanded}
                      setanimatingout={setAnimatingOut}
                    />
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </AnimateSharedLayout>
      </div>
    </div>
  );
}
