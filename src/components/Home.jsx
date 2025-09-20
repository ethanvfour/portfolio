import { useEffect, useRef, useState } from "react";
import "../index.css";
import "./Home.css";

import me from "../assets/ethan.jpg";

/**
 * Component
 * @param {props.name} name of component
 * @param {props.setterForStyle} setter function for style.
 */
function Home(props) {
  useEffect(() => {
    document.title = props.name;
    props.setterForStyle(props.name);
  }, [props, props.name]);

  const h2Element = useRef(0),
    bio = useRef(0);

  const [openOrNot, setOpenOrNot] = useState(false);
  /* for the cool animation at the top */
  return (
    <div className="flex flex-col justify-center items-center p-3 w-full h-full transition-all duration-250">
      <div
        id="info-about-me"
        className="flex justify-between h-[400px] w-[75%]"
      >
        <div
          className={`relative w-2/4 p-4 flex flex-col items-center text-center justify-evenly rounded-bl-3xl rounded-tl-3xl transition-all duration-1000 ${
            openOrNot ? "" : "rounded-br-3xl rounded-tr-3xl translate-x-1/2"
          } bg-[#d4d4d4] z-20`}
          role="region"
          aria-labelledby="home-name"
        >
          <h2 className="text-3xl font-bold" ref={h2Element}>
            <span id="home-name">Ethan Guillem</span>
          </h2>
          <button
            className={`hover:text-[#000000] focus:text-[#000000] text-[#838383] transition-all duration-250 border-[#838383] hover:border-[#000000] hover:scale-105 border-2 p-2 rounded-xl ${
              openOrNot ? "hidden" : ""
            }`}
            aria-expanded={openOrNot}
            aria-controls="home-bio"
            aria-label={openOrNot ? "Hide bio" : "Show bio"}
            onClick={() => {
              setOpenOrNot(true);
            }}
          >
            Click to see more about me!
          </button>
          <p
            id="home-bio"
            className={`mt-2 text-xs ${openOrNot ? "" : "hidden"}`}
            ref={bio}
            role="region"
            aria-hidden={!openOrNot}
          >
            {/* {cool bio here} */}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt,
            eaque? Est inventore odit corporis quis! Ratione aspernatur, commodi
            exercitationem laborum veritatis dolore velit quaerat totam beatae
            at, sint eaque qui!
          </p>
        </div>
        <div
          id="photo"
          className={`relative z-10 w-2/4 p-2 flex items-center justify-center bg-[#dedede] rounded-br-3xl rounded-tr-3xl transition-all duration-1000 ${
            openOrNot ? "" : "rounded-bl-3xl rounded-tl-3xl -translate-x-1/2"
          }`}
          role="img"
          aria-label="Photo of Ethan"
        >
          {/* Uncomment and use `me` when ready to show the photo */}
          <img
            className="object-contain max-h-[90%] rounded-lg hover:scale-105 transition-all duration-250"
            src={me}
            alt="Ethan aka me :)"
            tabIndex={0}
            role="button"
            aria-pressed={openOrNot}
            onClick={() => {
              setOpenOrNot(false);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
