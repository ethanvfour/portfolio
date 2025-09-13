import { useEffect } from "react";
import "../index.css";
import "./Home.css";





/**
 * Component
 * @param {props.name} name of component
 * @param {props.setterForStyle} setter function for style.
 */
function Home(props) {
  useEffect(()=>
    {
        document.title = props.name;
        props.setterForStyle(props.name);
    },[])

  return <p className="flex justify-center items-center">Home</p>;
}

export default Home;
