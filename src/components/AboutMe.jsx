import { useEffect, Fragment, useState } from "react";
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
      <div id="about-me" className="w-full max-w-6xl p-3 flex flex-row gap-6">
        <div
          id="quick-intro"
          className="p-4 bg-white rounded-lg shadow-sm min-w-1/2 max-w-1/2"
        >
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
        <div
          id="languages"
          className=" bg-white rounded-lg shadow-sm min-w-1/2 max-w-1/2 relative pb-5"
        >
          <h1 className="p-4 text-4xl font-semibold mb-4">
            {"Tools of the Trade"}
          </h1>
          <button
            className={`absolute text-4xl translate-y-1/2 top-1/2 left-2 z-10 ${
              currIndex == 0 ? "" : "hover:cursor-pointer"
            }`}
            onClick={handleLeft}
            disabled={currIndex == 0}
          >
            {"<"}
          </button>
          <button
            className={`absolute text-4xl right-2 top-1/2 translate-y-1/2 z-10 ${
              currIndex == codingLangPhotos.length - 1
                ? ""
                : "hover:cursor-pointer"
            }`}
            onClick={handleRight}
            disabled={currIndex == codingLangPhotos.length - 1}
          >
            {">"}
          </button>
          <div id="rotating" className="overflow-hidden flex flex-row">
            {codingLangPhotos.map((e) => (
              <Fragment key={e.image}>
                <div
                  className="relative transition-all duration-500 object-contain mr-[300px] max-w-[300px] max-h-[300px] min-w-[300px] min-h-[300px] flex-shrink-0"
                  style={{
                    transform: `translateX(${50 + currIndex * -addValue}%)`,
                  }}
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
      </div>
    </div>
  );
}

export default AboutMe;
