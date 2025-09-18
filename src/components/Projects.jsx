import { useEffect, useState } from "react";

import "../index.css";

const projects = [
  {
    name: "Chat Bot",
    link: "https://github.com/ethanvfour/chatBotReact",
    gifSrc: `${import.meta.env.BASE_URL}chatBot.gif`, //has to add because of the github pages
    description:
      "A React-based chatbot application. Later on, an ML model is going to be used as a backend to determine whether or not a message is either {Good, Bad, Greeting}",
  },
  {
    name: "Password Manager",
    link: "https://github.com/ethanvfour/password_manager",
    gifSrc: `${import.meta.env.BASE_URL}password.gif`,
    description:
      "A secure password manager built with C++. Features a simple encryption, and a user-friendly interface for managing credentials.",
  },
  {
    name: "Booth's Algorithm Visualizer",
    link: "https://github.com/ethanvfour/BoothAlgVisualizer",
    gifSrc: `${import.meta.env.BASE_URL}boothAlg.gif`,
    description:
      "A Booth's Algorithm Visualizer I made to help me with my Computer Architecture class. It shows every step and why a certain step is done and neededs",
  },
];

/**
 * Card Component
 * @param {props.name} name of main thing
 * @param {props.link} link to project
 * @param {props.left} boolean if left or right
 * @param {props.gifSrc} where gif is
 * @param {props.desc} description of Card
 */
function Card(props) {
  const [showImg, setShowImg] = useState(false);
  //for the button to show the gif if the screen is too small

  return (
    <div
      className={`relative flex w-[75%] min-h-[300px] border-3 mb-11 rounded-lg shadow-2xl ${
        props.left ? "lg:flex-row" : "lg:flex-row-reverse"
      } flex-col items-center justify-center`}
    >
      <div
        className={`lg:w-[50%] w-[80%] flex flex-col justify-center items-center`}
      >
        <div className="text-2xl text-center">{props.name}</div>
        <div className="text-center p-3">{props.desc}</div>
      </div>
      <div className={` w-[50%] flex flex-col items-center justify-evenly`}>
        <div className="w-[75%] h-[75%]">
          <img
            src={props.gifSrc}
            className="w-full h-full object-contain max-w-full max-h-full rounded-sm p-3 hidden lg:block"
            alt={`GIF showing off ${props.name}`}
          />
          {/* image above the button to go to it */}
        </div>
        <button
          className="lg:hidden border-black m-2 rounded-lg p-1 border-3"
          onClick={() => setShowImg(true)}
        >
          <p>{`Click to see the ${props.name} in action!`}</p>
        </button>
        {/*Will only show if the screen is too small*/}

        <a
          href={props.link}
          target="_blank"
          className="hover:text-[#000000] focus:text-[#000000] text-[#838383] transition-all duration-250"
          rel="noopener noreferrer"
        >
          <button>GitHub Link</button>
        </a>
      </div>

      <div
        id="hidden_box"
        className={`${
          !showImg ? "hidden" : ""
        } lg:hidden absolute z-50 w-[95%] h-[95%] bg-[#FFFFFF] rounded-lg shadow-md shadow-[#211f1f] flex justify-center flex-col items-center p-2`}
      >
        <img
          src={props.gifSrc}
          className="object-contain max-w-full max-h-full rounded-sm"
          alt={`GIF showing off ${props.name}`}
        />
        <button
          id="exit"
          className="absolute top-2 right-2 hover:text-[#ffffff] focus:text-[#ffffff] text-[#cccccc] transition-all duration-250 bg-black p-1 rounded-md"
          onClick={() => setShowImg(false)}
        >
          Close
        </button>
      </div>
      {/* this div will only show if the screen is too small and the button is pressed */}
    </div>
  );
}

/**
 * Component
 * @param {props.name} name of component
 * @param {props.setterForStyle} setter function for style.
 */
function Projects(props) {
  useEffect(() => {
    document.title = props.name;
    props.setterForStyle(props.name);
  }, [props, props.name]);

  return (
    <div className="flex justify-center flex-col items-center pt-2.5">
      <ul className="w-full">
        {projects.map((p, index) => {
          return (
            <li key={p.link} className="flex justify-center mb-1.5">
              <Card
                name={p.name}
                link={p.link}
                left={index % 2 === 0}
                gifSrc={p.gifSrc}
                desc={p.description}
              />
            </li>
          );
        })}
      </ul>
      <div className="mb-11">
        <a
          href="https://github.com/ethanvfour"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="hover:text-[#000000] focus:text-[#000000] text-[#838383] transition-all text-2xl duration-250 pb-1">
            All public projects
          </button>
        </a>
      </div>
    </div>
  );
}

export default Projects;
