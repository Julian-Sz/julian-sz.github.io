import React from "react";
import reactLogo from "./Images/logo512.png";

export default function SkillReact(props) {
  return (
    <div
      className="card h-full grid grid-cols-3 items-center justify-items-center"
      style={{
        background: props.background,
        gridTemplateRows: "min-content 1fr",
      }}
    >
      <div className="bg-gray-800 w-24 h-24 rounded-2xl p-2" style={{}}>
        <img src={reactLogo} alt=""></img>
      </div>
      <h2 className="text-5xl my-10 col-span-2 w-full">React</h2>
      <p className="col-span-3 text-2xl px-7">
        React is a javascript library that enables you to create reusable
        components and manage their state.
      </p>
    </div>
  );
}
