import { m } from "framer-motion";

export default function Contact() {
  const contactVariants = {
    initial: {
      x: "150vw",
    },
    animate: {
      x: 0,
      transition: {
        duration: 2,
      },
    },
    exit: {
      x: "150vw",
      transition: {
        duration: 2,
      },
    },
  };

  return (
    <m.div
      variants={contactVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col mt-32 mb-5 p-8 md:p-20 text-white text-center w-min m-auto rounded-2xl glow"
      style={{}}
    >
      <div className="flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 16"
          className="h-12 mr-4"
        >
          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
        </svg>
        <h1 className="text-5xl py-4">Contact</h1>
      </div>
      <section>
        <h2 className="text-2xl">My Profiles:</h2>
        <ul className="">
          <li className="p-3">
            <a
              href="https://github.com/Julian-Sz"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li className="p-3">
            <a
              href="https://stackoverflow.com/users/14207819/dasjulian"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stack Overflow
            </a>
          </li>
          <li className="p-3">
            <a
              href="https://www.linkedin.com/in/julian-szigethy-176536215/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li className="p-3">
            <a
              href="https://www.freecodecamp.org/julian_sz"
              target="_blank"
              rel="noopener noreferrer"
            >
              FreeCodeCamp
            </a>
          </li>
          <li className="p-3">
            <a
              href="https://codesandbox.io/u/Julian-Sz"
              target="_blank"
              rel="noopener noreferrer"
            >
              Codesandbox
            </a>
          </li>
          <li className="p-3">
            <a
              href="https://codepen.io/julian-sz"
              target="_blank"
              rel="noopener noreferrer"
            >
              CodePen
            </a>
          </li>
        </ul>
      </section>
    </m.div>
  );
}
