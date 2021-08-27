import { useState } from "react";
import { m } from "framer-motion";

export default function SkillFramerMotion(props) {
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
      transition: {
        duration: 2,
      },
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)",
      transition: {
        duration: 2,
      },
    },
  };

  const [animationOut, setAnimationOut] = useState(false);
  return (
    <>
      {props.mobile ? (
        <>
          <div
            className="card w-full h-full p-5"
            style={{ background: props.skillobj.background }}
          >
            <div
              className="bg-gray-800 w-full h-full p-4 flex flex-col justify-center rounded-2xl"
              onClick={() => {
                setAnimationOut(true);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <m.path
                  d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
                  variants={icon}
                  animate={animationOut ? "hidden" : "visible"}
                  style={{ stroke: "#fff", strokeWidth: 2 }}
                  onAnimationComplete={() => {
                    if (animationOut) {
                      setAnimationOut(false);
                    }
                  }}
                />
              </svg>
            </div>
          </div>
          <div className="absolute left-0 right-0 mx-auto -top-10 text-2xl">
            {props.skillobj.title}
          </div>
          <div className="absolute top-56 px-2">{props.skillobj.details}</div>
        </>
      ) : (
        <div
          className="card h-full grid grid-cols-3 items-center justify-items-center"
          style={{
            background: props.skillobj.background,
            gridTemplateRows: "min-content 1fr",
          }}
        >
          <div
            className="bg-gray-800 w-24 h-24 rounded-2xl p-4 flex flex-col justify-center"
            style={{}}
            onClick={() => {
              setAnimationOut(true);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
              <m.path
                d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
                variants={icon}
                animate={animationOut ? "hidden" : "visible"}
                style={{ stroke: "#fff", strokeWidth: 2 }}
                onAnimationComplete={() => {
                  if (animationOut) {
                    setAnimationOut(false);
                  }
                }}
              />
            </svg>
          </div>
          <h2 className="text-5xl my-10 col-span-2 w-full">
            {props.skillobj.title}
          </h2>
          <p className="col-span-3 text-2xl px-7">{props.skillobj.details}</p>
        </div>
      )}
    </>
  );
}
