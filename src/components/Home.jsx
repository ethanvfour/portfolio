import { useEffect, useRef, useState } from "react";
import "../index.css";
import "./Home.css";

import me from "../assets/ethan.jpg";
import { Link } from "react-router-dom";

/**
 * Component
 * @param {props.name} name of component
 * @param {props.setterForStyle} setter function for style.
 */
function Home(props) {
  const [openOrNot, setOpenOrNot] = useState(false);
  const [msgOnScreen, setMsgOnScreen] = useState("");
  const openingMsg = "Hi! I'm Ethan Guillem. A CS major at UNLV!";
  const openingSpan = useRef(0);

  useEffect(() => {
    document.title = props.name;
    props.setterForStyle(props.name);
  }, [props, props.name]);

  useEffect(() => {
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    setMsgOnScreen("");

    (async () => {
      for (let i = 0; i < openingMsg.length; i++) {
        setMsgOnScreen((m) => m + openingMsg[i]);
        await sleep(30);
      }
      await sleep(500);
      setOpenOrNot(true);
    })();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center p-3 w-full h-full transition-all duration-250">
      <div id="info-about-me" className="flex justify-center h-[400px] w-[75%]">
        <div
          className={`relative w-full md:w-2/4 p-4 flex flex-col items-center text-center justify-evenly rounded-3xl md:rounded-bl-3xl md:rounded-tl-3xl transition-all duration-1000 ${
            openOrNot
              ? "md:rounded-br-none md:rounded-tr-none"
              : "md:rounded-br-3xl md:rounded-tr-3xl md:translate-x-1/2"
          } bg-[#d4d4d4] z-20`}
          role="region"
          aria-labelledby="home-name"
        >
          <h2 className="text-2xl font-bold">
            <span id="home-name" ref={openingSpan}>
              {msgOnScreen}
            </span>
          </h2>

          <Link
            to="/about"
            className={`${
              openOrNot ? "mt-1 opacity-100" : "opacity-0"
            } text-base transition-all duration-500 text-center hover:text-[#000000] focus:text-[#000000] text-[#999999] md:hidden`}
          >
            Click to see my <span className="italic font-bold">About Me</span>{" "}
            to see more
          </Link>
          <p
            id="home-bio"
            className={`mt-2 text-s transition-all duration-500 hidden md:block ${
              openOrNot ? "opacity-100" : "opacity-0"
            }`}
            role="region"
            aria-hidden={!openOrNot}
          >
            {/* {cool bio here} */}
            Hello! My name is Ethan Guillem and I am a Computer Science major at
            UNLV. I hope you find all that is useful to why you're here, all
            this is still a work on progress. Email me and let me know if there
            should be any changes!
          </p>
        </div>
        <div
          id="photo"
          className={`relative z-10 hidden md:flex md:w-2/4 p-2 items-center justify-center bg-[#dedede] rounded-br-3xl rounded-tr-3xl transition-all duration-1000 ${
            openOrNot ? "" : "rounded-bl-3xl rounded-tl-3xl -translate-x-1/2"
          }`}
          role="img"
          aria-label="Photo of Ethan"
        >
          {/* Uncomment and use `me` when ready to show the photo */}
          <img
            className="object-contain max-h-[90%] rounded-lg hover:scale-101 transition-all duration-250"
            src={me}
            alt="Ethan aka me :)"
            tabIndex={0}
            role="button"
            aria-pressed={openOrNot}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
