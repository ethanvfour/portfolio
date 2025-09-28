import { useEffect, Fragment, useState, useRef } from "react";
import { codingLangPhotos } from "../data/photosCodingLang.js";
import "../index.css";

/**
 * Component
 * @param {props.name} name of component
 * @param {props.setterForStyle} setter function for style.
 */
function AboutMe(props) {
  useEffect(() => {
    document.title = props.name;
    props.setterForStyle(props.name);
  }, [props, props.name]);

  const divOfImg = useRef(0);

  const addValue = 200;
  const [currIndex, setIndex] = useState(0);

  const handleLeft = () => {
    if (currIndex != 0) {
      setIndex((prevI) => prevI - 1);
    }
  };
  const handleRight = () => {
    if (currIndex != codingLangPhotos.length - 1) {
      setIndex((prevI) => prevI + 1);
    }
  };

  return (
    <div
      id="container"
      className="flex flex-col items-center p-3 w-full h-full overflow-y-auto"
    >
      <div
        id="about-me"
        className="w-full max-w-6xl p-3 flex flex-col lg:flex-row gap-6 justify-center items-center"
      >
        <div id="quick-intro" className="p-4 w-full md:min-w-1/2 md:max-w-1/2">
          <h1 className="text-4xl font-semibold mb-4">{"I'm Ethan!"}</h1>
          <p className="text-gray-700 leading-relaxed">
            I'm a computer science student that has passion in what I do. I've
            been able to tutor computer science for many students and have
            helped many understand difficult subjects. I've used these skills
            that I've learned from my classes to learn many other topics such as
            web development, machine learning, and many more.
          </p>
          <img />
        </div>

        {/* will not show if screen is too small */}
        <div
          id="languages"
          className=" bg-white rounded-lg shadow-sm w-3/4 md:min-w-1/2 md:max-w-1/2 relative pb-5 hidden md:block"
        >
          <h1 className="p-4 text-4xl font-semibold mb-4">
            {"Tools of the Trade"}
          </h1>
          <button
            className={`absolute text-4xl translate-y-1/2 top-1/2 left-2 z-10 ${
              currIndex == 0 ? "text-gray-400" : "hover:cursor-pointer"
            } transition-all duration-500`}
            onClick={handleLeft}
            disabled={currIndex == 0}
          >
            {"<"}
          </button>
          <button
            className={`absolute text-4xl right-2 top-1/2 translate-y-1/2 z-10 ${
              currIndex == codingLangPhotos.length - 1
                ? "text-gray-400"
                : "hover:cursor-pointer"
            } transition-all duration-500`}
            onClick={handleRight}
            disabled={currIndex == codingLangPhotos.length - 1}
          >
            {">"}
          </button>
          <div id="rotating" className="overflow-hidden flex flex-row">
            {codingLangPhotos.map((e) => (
              <Fragment key={e.image}>
                <div
                  className="relative transition-all duration-500 object-contain 
                  mr-[200px] max-w-[200px] max-h-[200px] min-w-[200px] min-h-[200px]
                  
                  lg:mr-[300px] lg:max-w-[300px] lg:max-h-[300px] lg:min-w-[300px] lg:min-h-[300px] flex-shrink-0"
                  style={{
                    transform: `translateX(${50 + currIndex * -addValue}%)`,
                  }}
                  ref={divOfImg}
                >
                  <img
                    src={e.image}
                    alt={e.alt}
                    className="w-full h-full object-contain"
                  />
                </div>
              </Fragment>
            ))}
          </div>
        </div>

        {/* will show if screen is too small */}
        <div id="tooSmall" className="p-4 w-full md:hidden">
          <h1 className="text-4xl font-semibold mb-4 w-full text-center">
            {"Tools of the Trade"}
          </h1>
          <ul className="w-full flex flex-col items-center justify-between gap-2.5">
            {codingLangPhotos.map((e) => (
              
                <li key={e.image} 
                    className="object-contain flex flex-row ">
                  <img
                    src={e.image}
                    alt={e.alt}
                    className="w-7 h-7 object-contain mr-2"
                  />
                  <p>{e.name}</p>
                </li>
              
            ))}
          </ul>
        </div>


      </div>
    </div>
  );
}

export default AboutMe;
