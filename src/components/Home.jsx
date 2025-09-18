import { useEffect } from "react";
import "../index.css";
import "./Home.css";

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

  return (
  <div className="flex flex-col">
    <div className="">

    </div>
  </div>);
}

export default Home;
