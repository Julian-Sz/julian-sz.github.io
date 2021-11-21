export default function HomeFirstSection() {
  return (
    <>
      <h1 className="z-40 mt-5 text-3xl relative">Who am I?</h1>
      <div className="z-40 relative w-11/12 md:w-6/12 mb-32 self-center mt-10">
        <div
          id="aboutMeBox"
          className="h-56 p-5 relative z-30 rounded-2xl flex flex-col justify-center"
        >
          <p className="px-3 md:text-2xl">
            Currently, I am attending HTL Waidhofen in the department of
            mechanical engineering. In my free time, I am learning to code and
            designing websites and web apps, like this one.
          </p>
        </div>
        <div
          id="descriptionGlow3"
          style={{
            boxShadow:
              "0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem #0e49b5, 0 0 0.8rem #0e49b5, 0 0 2.8rem #0e49b5, inset 0 0 1.3rem #0e49b5",
          }}
          className="w-full rounded-2xl absolute top-24 left-9 h-56"
        ></div>
        <div
          id="descriptionGlow2"
          style={{
            boxShadow:
              "0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem #0e49b5, 0 0 0.8rem #0e49b5, 0 0 2.8rem #0e49b5, inset 0 0 1.3rem #0e49b5",
          }}
          className="w-full rounded-2xl absolute top-16 left-6 h-56"
        ></div>
        <div
          id="descriptionGlow1"
          style={{
            boxShadow:
              "0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem #0e49b5, 0 0 0.8rem #0e49b5, 0 0 2.8rem #0e49b5, inset 0 0 1.3rem #0e49b5",
          }}
          className="w-full rounded-2xl absolute top-8 left-3 h-56"
        ></div>
      </div>
    </>
  );
}
