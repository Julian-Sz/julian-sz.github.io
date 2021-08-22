import React from "react";

export default function SkillTemplate(props) {
  return (
    <>
      {props.mobile ? (
        <>
          <div
            className="card w-full h-full p-5"
            style={{ background: props.skillobj.background }}
          >
            <div className="bg-gray-800 w-full h-full p-2 flex flex-col justify-center rounded-2xl">
              <img src={props.skillobj.logo} alt=""></img>
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
            className="bg-gray-800 w-24 h-24 rounded-2xl p-2 flex flex-col justify-center"
            style={{}}
          >
            <img src={props.skillobj.logo} alt=""></img>
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
