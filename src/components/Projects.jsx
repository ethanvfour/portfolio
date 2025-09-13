import { useEffect } from "react";
import "../index.css";

const projects = [
  { name: "Chat Bot", link: "https://github.com/ethanvfour/chatBotReact" },
  {
    name: "Password Manager",
    link: "https://github.com/ethanvfour/password_manager",
  },
  {
    name: "Booth's Algorithm Vizualizer",
    link: "https://github.com/ethanvfour/BoothAlgVisualizer",
  },
];

/**
 * Card Component
 * @param {props.name} name of main thing
 * @param {props.link} link to project
 * @param {props.left} boolean if left or right
 */
function Card(props) {
  return (
    <div className="flex w-[75%] min-h-[300px]">
      <div className={`relative`}>

      </div>
      <div className={`relative`}>
        <a href={props.link} target="_blank"><button>GitHub Link</button></a>
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
      <ul>
        {projects.map((p, index) => {
          return (
            <li key={index}>
              <Card name={p.name} link={p.link} left={index % 2 === 0} />
            </li>
          );
        })}
      </ul>
      <a href="https://github.com/ethanvfour" target="_blank">
        <button>See more</button>
      </a>
    </div>
  );
}

export default Projects;
