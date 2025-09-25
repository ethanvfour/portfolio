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
      
    </div>
  );
}

export default AboutMe;
