import { useEffect, useState } from "react";

import "../index.css";

const projects = [
  {
    name: "Chat Bot",
    link: "https://github.com/ethanvfour/chatBotReact",
    public: "/chatBot.gif",
    description:
      "A React-based chatbot application. Later on, an ML model is going to be used as a backend to determine whether or not a message is either {Good, Bad, Greeting}",
  },
  {
    name: "Password Manager",
    link: "https://github.com/ethanvfour/password_manager",
    public: "/password.gif",
    description:
      "A secure password manager built with C++. Features a simple encryption, and a user-friendly interface for managing credentials.",
  },
  {
    name: "Booth's Algorithm Vizualizer",
    link: "https://github.com/ethanvfour/BoothAlgVisualizer",
    public: "/boothAlg.gif",
    description:
      "A Booth's Algorithm Vizualizer I made to help me with my Computer Architecture class. It shows every step and why a certain step is done and neededs",
  },
];

/**
 * Card Component
 * @param {props.name} name of main thing
 * @param {props.link} link to project
 * @param {props.left} boolean if left or right
 * @param {props.public} where gif is
 * @param {props.desc} description of Card
 */
function Card(props) {
  const [showImg, setShowImg] = useState(false);

  return (
    <div
      className={`relative flex w-[75%] min-h-[300px] border-3 mb-11 rounded-lg shadow-2xl ${
        props.left ? "md:flex-row" : "md:flex-row-reverse"
      } flex-col items-center justify-center`}
    >
      <div
        className={`md:w-[50%] w-[80%] flex flex-col justify-center items-center`}
      >
        <div className="text-2xl text-center">{props.name}</div>
        <div className="text-center p-3">{props.desc}</div>
      </div>
      <div className={` w-[50%] flex flex-col items-center justify-evenly`}>
        <div className="w-[75%] h-[75%]">
          <img
            src={props.public}
            className="w-full h-full object-contain max-w-full max-h-full rounded-sm p-3 hidden md:block"
            alt="GIF showing off the project"
          />
          {/* image above the button to go to it */}
        </div>
        <button
          className="md:hidden border-black m-2 rounded-lg p-1 border-3"
          onClick={() => setShowImg(true)}
        >
          <p>Click to see it in action!</p>
        </button>
        <a
          href={props.link}
          target="_blank"
          className="hover:text-[#000000] focus:text-[#000000] text-[#838383] transition-all duration-250"
        >
          <button>GitHub Link</button>
        </a>
      </div>

      <div
        id="hidden_box"
        className={`${
          !showImg ? "hidden" : ""
        } md:hidden absolute z-50 w-[95%] h-[95%] bg-[#FFFFFF] rounded-lg shadow-md shadow-[#211f1f]  flex justify-center flex-col items-center p-2`}
      >
        <img
          src={props.public}
          className="object-contain max-w-full max-h-full rounded-sm"
          alt="GIF showing off the project"
        />
        <button
          id="exit"
          className=" hover:text-[#000000] focus:text-[#000000] text-[#838383] transition-all duration-250"
          onClick={() => setShowImg(false)}
        >
          Close
        </button>
      </div>
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
  }, []);

  return (
    <div className="flex justify-center flex-col items-center">
      <ul className="w-full">
        {projects.map((p, index) => {
          return (
            <li key={index} className="flex justify-center mb-1.5">
              <Card
                name={p.name}
                link={p.link}
                left={index % 2 === 0}
                public={p.public}
                desc={p.description}
              />
            </li>
          );
        })}
      </ul>
      <a href="https://github.com/ethanvfour" target="_blank">
        <button className="hover:text-[#000000] focus:text-[#000000] text-[#838383] transition-all text-2xl duration-250 pb-1">
          All public projects
        </button>
      </a>
    </div>
  );
}

export default Projects;
