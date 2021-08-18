import React from "react";
import HomeSpaceWindow from "./HomeSpaceWindow";

export default function Home() {
  return (
    <div className="flex flex-col justify-center align-center h-screen text-center text-white">
      <div className="absolute">
        <HomeSpaceWindow />
      </div>
      <div className="z-10">
        <h1 className="text-6xl mb-5">Hi, I am Julian Szigethy</h1>
        <h2 className="text-2xl">And I'm learning web development!</h2>
      </div>
    </div>
  );
}
