import { useEffect } from "react";
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

  return (
    <div id="about-me" className="flex justify-center flex-col items-center">
      <div className="flex flex-col justify-evenly items-center pt-3 pb-3 border-3 shadow-xl/30 h-[400px] w-[400px] p-12">
        <h1 className="text-2xl">
          <b>About me</b>
        </h1>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis,
          accusantium. Possimus nulla consequuntur maxime perspiciatis maiores
          delectus expedita nobis deleniti! Veritatis impedit debitis laborum
          quidem quaerat perferendis iusto totam vel!
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
